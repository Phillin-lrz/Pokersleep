(function () {
  "use strict";

  function createTextElement(tagName, className, textValue) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = String(textValue == null ? "" : textValue);
    return element;
  }

  function formatDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}/.test(String(value || ""))) return "日期未定";
    return String(value).slice(0, 10).replaceAll("-", ".");
  }

  function safeHref(value) {
    const raw = String(value || "").trim();
    if (!raw || raw.startsWith("//")) return "#";
    try {
      const parsed = new URL(raw, window.location.href);
      const isWebUrl = parsed.protocol === "http:" || parsed.protocol === "https:";
      const isLocalFile = parsed.protocol === "file:" && window.location.protocol === "file:";
      if (!isWebUrl && !isLocalFile) return "#";
      return raw;
    } catch (_error) {
      return "#";
    }
  }

  function normaliseContent() {
    const groups = [
      [window.POKER_THOUGHTS, "碎碎念"],
      [window.POKER_LIFE, "生活"],
      [window.POKER_DRINKS, "酒桌"],
      [window.POKER_BEDROOM, "床上"],
    ];
    return groups
      .flatMap(function (group) {
        const entries = Array.isArray(group[0]) ? group[0] : [];
        return entries.map(function (entry) {
          return Object.assign({ section: group[1] }, entry);
        });
      })
      .sort(function (a, b) {
        return String(b.publishedAt || "").localeCompare(String(a.publishedAt || ""));
      });
  }

  function renderCards(container, entries, emptyCopy) {
    if (!container) return;
    container.replaceChildren();
    if (!entries.length) {
      const empty = createTextElement("div", "empty-state", "");
      empty.append(
        createTextElement("span", "empty-mark", "⌁"),
        createTextElement("strong", "", emptyCopy),
        createTextElement("p", "", "这里会保留真实内容的位置，不用虚构故事把房间填满。")
      );
      container.append(empty);
      return;
    }

    entries.forEach(function (entry) {
      const article = document.createElement("article");
      article.className = "content-card";
      const meta = createTextElement(
        "p",
        "card-meta",
        `${entry.section || entry.category || "记录"} · ${formatDate(entry.publishedAt)}${entry.contentRating === "adult" ? " · 18+" : ""}`
      );
      const titleText = String(entry.title || "").trim();
      const entryUrl = safeHref(entry.url);
      let link = null;
      if (entryUrl !== "#") {
        link = createTextElement("a", "", titleText || "阅读全文");
        link.href = entryUrl;
        try {
          const destination = new URL(link.href, window.location.href);
          if (destination.origin !== window.location.origin) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          }
        } catch (_error) {
          link = null;
        }
      }
      const summary = createTextElement("p", "", entry.summary || "没有附加说明。");
      article.append(meta);
      if (titleText) {
        const title = createTextElement("h3", "", link ? "" : titleText);
        if (link) title.append(link);
        article.append(title, summary);
      } else {
        article.append(summary);
        if (link) {
          const readMore = createTextElement("p", "card-source", "");
          readMore.append(link);
          article.append(readMore);
        }
      }
      const sourceUrl = safeHref(entry.sourceUrl);
      if (sourceUrl !== "#") {
        const sourceLine = createTextElement("p", "card-source", "");
        const sourceLink = createTextElement(
          "a",
          "",
          `查看${entry.sourcePlatform ? ` ${entry.sourcePlatform} ` : ""}原始出处`
        );
        sourceLink.href = sourceUrl;
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
        sourceLine.append(sourceLink);
        article.append(sourceLine);
      }
      container.append(article);
    });
  }

  function renderPageCollections() {
    const mappings = [
      ["thoughts", window.POKER_THOUGHTS, "扑克暂时没把心事放在这里"],
      ["life", window.POKER_LIFE, "相册还是空的，生活正在发生"],
      ["drinks", window.POKER_DRINKS, "酒桌还没留下第一圈水痕"],
      ["bedroom", window.POKER_BEDROOM, "床铺暂时整齐得不太像话"],
      ["friends", window.POKER_FRIENDS, "猫窝还没挂上朋友的门牌"],
    ];
    mappings.forEach(function (mapping) {
      const container = document.querySelector(`[data-content-list="${mapping[0]}"]`);
      const entries = Array.isArray(mapping[1]) ? mapping[1] : [];
      renderCards(container, entries, mapping[2]);
    });

    const recent = document.querySelector("[data-recent-content]");
    const limit = Number(window.POKER_CONFIG && window.POKER_CONFIG.recentLimit) || 4;
    renderCards(recent, normaliseContent().slice(0, limit), "猫还没往这里叼东西");
  }

  function renderGripes() {
    const entries = Array.isArray(window.POKER_GRIPES) ? window.POKER_GRIPES.slice() : [];
    entries.sort(function (a, b) {
      return String(b.publishedAt || "").localeCompare(String(a.publishedAt || ""));
    });

    document.querySelectorAll("[data-gripe-list]").forEach(function (container) {
      const isArchive = container.hasAttribute("data-gripe-archive");
      const visible = isArchive ? entries : entries.slice(0, 3);
      container.replaceChildren();
      if (!visible.length) {
        const empty = createTextElement("div", "gripe-empty", "");
        empty.append(
          createTextElement("span", "", "=^･ω･^="),
          createTextElement("p", "", "今天还没开始骂。")
        );
        container.append(empty);
        return;
      }
      visible.forEach(function (entry) {
        const item = document.createElement("article");
        item.className = "gripe-item";
        item.append(
          createTextElement("span", "gripe-emoji", entry.emoji || "⌁"),
          createTextElement("p", "", entry.text || ""),
          createTextElement("time", "", `${entry.mood || "猫猫状态"} · ${formatDate(entry.publishedAt)}`)
        );
        container.append(item);
      });
    });
  }

  function initMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.dataset.open = String(!expanded);
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      }
    });
  }

  function init() {
    initMobileNav();
    renderPageCollections();
    renderGripes();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
