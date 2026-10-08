/* @ds-bundle: {"format":4,"namespace":"AidressDesignSystem_f2dd6a","components":[{"name":"AgentPanel","sourcePath":"components/cards/AgentPanel.jsx"},{"name":"AgentPopover","sourcePath":"components/cards/AgentPopover.jsx"},{"name":"IndustryCard","sourcePath":"components/cards/IndustryCard.jsx"},{"name":"LayerCard","sourcePath":"components/cards/LayerCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MediaSlot","sourcePath":"components/core/MediaSlot.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ActivityList","sourcePath":"components/data/ActivityList.jsx"},{"name":"KeyValueList","sourcePath":"components/data/KeyValueList.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"StatRow","sourcePath":"components/data/Stat.jsx"},{"name":"TrustMeter","sourcePath":"components/data/TrustMeter.jsx"},{"name":"Accordion","sourcePath":"components/forms/Accordion.jsx"},{"name":"RadioList","sourcePath":"components/forms/RadioList.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"DEFAULT_GRAPH","sourcePath":"components/graph/NetworkGraph.jsx"},{"name":"NetworkGraph","sourcePath":"components/graph/NetworkGraph.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TextLink","sourcePath":"components/navigation/TextLink.jsx"},{"name":"FlowDiagram","sourcePath":"components/site/FlowDiagram.jsx"},{"name":"IndustryTile","sourcePath":"components/site/IndustryTile.jsx"},{"name":"LayerTabs","sourcePath":"components/site/LayerTabs.jsx"},{"name":"MachineView","sourcePath":"components/site/MachineView.jsx"},{"name":"ModeToggle","sourcePath":"components/site/ModeToggle.jsx"},{"name":"SectionHeader","sourcePath":"components/site/SectionHeader.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"},{"name":"WorkflowRail","sourcePath":"components/workflow/WorkflowRail.jsx"}],"sourceHashes":{"components/cards/AgentPanel.jsx":"2ed0c088b76e","components/cards/AgentPopover.jsx":"0fd402cfc22b","components/cards/IndustryCard.jsx":"7005e59a60f8","components/cards/LayerCard.jsx":"eab803766a56","components/core/Avatar.jsx":"1bd9ad93902f","components/core/Badge.jsx":"d0d289436b72","components/core/Button.jsx":"0aeac86dcb6f","components/core/Eyebrow.jsx":"78929ec1deac","components/core/Icon.jsx":"586636bb60cf","components/core/IconButton.jsx":"0c26b2c0265f","components/core/MediaSlot.jsx":"3565f1238f83","components/core/Tag.jsx":"e98ebe248d3d","components/data/ActivityList.jsx":"021ca70d9b87","components/data/KeyValueList.jsx":"a1552017860d","components/data/Stat.jsx":"362521acaf3e","components/data/TrustMeter.jsx":"c2df14e89c20","components/forms/Accordion.jsx":"0d5542f4d873","components/forms/RadioList.jsx":"eb7668f416dc","components/forms/SearchInput.jsx":"835665ed8c1d","components/forms/SegmentedControl.jsx":"075a2931997e","components/graph/NetworkGraph.jsx":"2e5439c23d88","components/navigation/NavBar.jsx":"9edb9fd60289","components/navigation/Tabs.jsx":"92a33044520c","components/navigation/TextLink.jsx":"1e8ffd6af1f5","components/site/FlowDiagram.jsx":"d5d3428d9703","components/site/IndustryTile.jsx":"4c8ced42ebdc","components/site/LayerTabs.jsx":"fd1ad80d00ec","components/site/MachineView.jsx":"e2183cec9039","components/site/ModeToggle.jsx":"d1ef15210acb","components/site/SectionHeader.jsx":"31a4f6d14428","components/site/SiteFooter.jsx":"96ac273485b5","components/workflow/WorkflowRail.jsx":"77c047807a72","ui_kits/platform/App.jsx":"f310820caa21","ui_kits/platform/Atlas.jsx":"61c7f36bd3cb","ui_kits/platform/Home.jsx":"c025f5390da7","ui_kits/platform/Industries.jsx":"e595383a3fbf","ui_kits/platform/Passport.jsx":"3c357d297c62","ui_kits/platform/Technology.jsx":"e894bc95b30f","ui_kits/platform/data.js":"6740b5c79061","ui_kits/website/Dev.jsx":"66b3958f58b3","ui_kits/website/Diagrams.jsx":"2e9d9eb4dbe3","ui_kits/website/Docs.jsx":"c052103721f3","ui_kits/website/Impact.jsx":"b6aeac4fb3f2","ui_kits/website/Industry.jsx":"953be5006c12","ui_kits/website/Layers5.jsx":"776e50fe6c6a","ui_kits/website/Research.jsx":"b4a67ed7558b","ui_kits/website/Shared.jsx":"ebeaf5b82b4e","ui_kits/website/SiteApp.jsx":"a4a85828f35e","ui_kits/website/SiteAtlas.jsx":"1d60509119d7","ui_kits/website/SiteHome.jsx":"123e6572526b","ui_kits/website/atlasApi.js":"fb928f2dc3ac","ui_kits/website/data.js":"f918cbeeb38f","ui_kits/website/data2.js":"78ea2022a36c","ui_kits/website/docsContent.jsx":"0767b76dc096","ui_kits/website/image-slot.js":"fff26d081c8d","ui_kits/website/interopDoc.jsx":"063011269ae2","ui_kits/website/papersContent.jsx":"8add0a233926"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AidressDesignSystem_f2dd6a = window.AidressDesignSystem_f2dd6a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  letter = 'A',
  size = 48,
  tone = 'neutral',
  ring = false,
  style
}) {
  const T = {
    neutral: {
      bg: 'var(--stone-100)',
      fg: 'var(--ink)'
    },
    ink: {
      bg: 'var(--ink)',
      fg: 'var(--paper)'
    },
    resolved: {
      bg: 'var(--vermilion-500)',
      fg: 'var(--white)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: T.bg,
      color: T.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      font: '500 ' + Math.round(size * 0.42) + 'px/1 var(--font-sans)',
      border: tone === 'neutral' ? '1px solid var(--border-default)' : 'none',
      boxShadow: ring ? tone === 'resolved' ? 'var(--shadow-resolved-ring)' : 'var(--shadow-node-ring)' : 'none',
      ...style
    }
  }, letter);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'muted',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'accent' ? 'var(--text-accent)' : tone === 'ink' ? 'var(--ink)' : 'var(--text-secondary)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Path data copied verbatim from lucide-static@0.460.0 (assets/icons/*.svg). 24×24, 1.5–2px stroke.
const ICONS = {
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />",
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />",
  "arrow-down": "<path d=\"M12 5v14\" /> <path d=\"m19 12-7 7-7-7\" />",
  "arrow-up-right": "<path d=\"M7 7h10v10\" /> <path d=\"M7 17 17 7\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /> <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "network": "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" /> <rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" /> <rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\" /> <path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\" /> <path d=\"M12 12V8\" />",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" />",
  "list": "<path d=\"M3 12h.01\" /> <path d=\"M3 18h.01\" /> <path d=\"M3 6h.01\" /> <path d=\"M8 12h13\" /> <path d=\"M8 18h13\" /> <path d=\"M8 6h13\" />",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" /> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /> <path d=\"M8 16H3v5\" />",
  "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\" /> <circle cx=\"19\" cy=\"12\" r=\"1\" /> <circle cx=\"5\" cy=\"12\" r=\"1\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" />",
  "route": "<circle cx=\"6\" cy=\"19\" r=\"3\" /> <path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\" /> <circle cx=\"18\" cy=\"5\" r=\"3\" />",
  "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /> <path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /> <path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />",
  "code": "<polyline points=\"16 18 22 12 16 6\" /> <polyline points=\"8 6 2 12 8 18\" />",
  "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />",
  "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /> <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /> <line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /> <line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /> <line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /> <line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /> <line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /> <line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /> <line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /> <line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />",
  "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />",
  "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />",
  "locate-fixed": "<line x1=\"2\" x2=\"5\" y1=\"12\" y2=\"12\" /> <line x1=\"19\" x2=\"22\" y1=\"12\" y2=\"12\" /> <line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"5\" /> <line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\" /> <circle cx=\"12\" cy=\"12\" r=\"7\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />",
  "cpu": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\" /> <rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\" /> <path d=\"M15 2v2\" /> <path d=\"M15 20v2\" /> <path d=\"M2 15h2\" /> <path d=\"M2 9h2\" /> <path d=\"M20 15h2\" /> <path d=\"M20 9h2\" /> <path d=\"M9 2v2\" /> <path d=\"M9 20v2\" />",
  "key-round": "<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\" /> <circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />",
  "truck": "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\" /> <path d=\"M15 18H9\" /> <path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\" /> <circle cx=\"17\" cy=\"18\" r=\"2\" /> <circle cx=\"7\" cy=\"18\" r=\"2\" />",
  "credit-card": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\" /> <line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\" />",
  "heart-pulse": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" /> <path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\" />",
  "flask-conical": "<path d=\"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2\" /> <path d=\"M8.5 2h7\" /> <path d=\"M7 16h10\" />",
  "landmark": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /> <line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /> <line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /> <line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /> <line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /> <polygon points=\"12 2 20 7 4 7\" />",
  "shopping-bag": "<path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\" /> <path d=\"M3 6h18\" /> <path d=\"M16 10a4 4 0 0 1-8 0\" />",
  "terminal": "<polyline points=\"4 17 10 11 4 5\" /> <line x1=\"12\" x2=\"20\" y1=\"19\" y2=\"19\" />"
};
const ICON_NAMES = Object.keys(ICONS);
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  color = 'currentColor',
  style,
  ...rest
}) {
  const inner = ICONS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'resolved',
  size = 'md',
  icon,
  children,
  style
}) {
  const T = {
    resolved: {
      bg: 'var(--vermilion-50)',
      fg: 'var(--vermilion-700)',
      ic: 'var(--vermilion-500)',
      di: 'circle-check'
    },
    neutral: {
      bg: 'var(--surface-muted)',
      fg: 'var(--ink)',
      ic: 'var(--ink)',
      di: null
    },
    pending: {
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-secondary)',
      ic: 'var(--gray-500)',
      di: 'refresh-cw'
    },
    inverse: {
      bg: 'var(--ink)',
      fg: 'var(--paper)',
      ic: 'var(--vermilion-400)',
      di: 'circle-check'
    }
  }[tone];
  const ic = icon === null ? null : icon || T.di;
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: lg ? 8 : 5,
      height: lg ? 32 : 22,
      padding: lg ? '0 12px' : '0 7px',
      background: T.bg,
      color: T.fg,
      borderRadius: 'var(--radius-sm)',
      font: '500 ' + (lg ? 16 : 12) + 'px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, ic && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: lg ? 18 : 13,
    color: T.ic,
    strokeWidth: 2
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 32,
    fs: 13,
    px: 14,
    gap: 6,
    ic: 14
  },
  md: {
    h: 40,
    fs: 14,
    px: 20,
    gap: 8,
    ic: 16
  },
  lg: {
    h: 48,
    fs: 15,
    px: 28,
    gap: 10,
    ic: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      bg: h ? 'var(--black)' : 'var(--ink)',
      fg: 'var(--paper)',
      bd: 'transparent'
    },
    secondary: {
      bg: h ? 'var(--surface-sunken)' : 'var(--surface-card)',
      fg: 'var(--ink)',
      bd: 'var(--ink)'
    },
    accent: {
      bg: h ? 'var(--vermilion-600)' : 'var(--vermilion-500)',
      fg: 'var(--white)',
      bd: 'transparent'
    },
    ghost: {
      bg: h ? 'var(--surface-sunken)' : 'transparent',
      fg: h ? 'var(--text-accent)' : 'var(--ink)',
      bd: 'transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: variant === 'ghost' ? '0 ' + s.px / 2 + 'px' : '0 ' + s.px + 'px',
      font: '500 ' + s.fs + 'px/1 var(--font-sans)',
      letterSpacing: '-0.005em',
      background: V.bg,
      color: V.fg,
      border: '1px solid ' + V.bd,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: p && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),transform var(--dur-instant)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic,
    style: {
      transform: h && !disabled ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const d = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const bg = active ? 'var(--ink)' : variant === 'outline' ? h ? 'var(--surface-sunken)' : 'var(--surface-card)' : h ? 'var(--surface-muted)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      background: bg,
      color: active ? 'var(--paper)' : 'var(--ink)',
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MediaSlot.jsx
try { (() => {
function MediaSlot({
  src,
  alt = '',
  label,
  ratio = '16/9',
  height,
  texture = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: height ? undefined : ratio,
      height,
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)',
      background: texture ? 'var(--gradient-grain)' : 'var(--surface-sunken)',
      border: texture || src ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, texture && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'cover'
    }
  }), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), !src && label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 10,
      font: '400 11px/1 var(--font-mono)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: texture ? 'var(--paper)' : 'var(--text-tertiary)'
    }
  }, label));
}
Object.assign(__ds_scope, { MediaSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MediaSlot.jsx", error: String((e && e.message) || e) }); }

// components/cards/IndustryCard.jsx
try { (() => {
function IndustryCard({
  title,
  agents,
  metric,
  media,
  size = 'sm',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: lg ? 20 : 18,
      padding: lg ? '28px 28px 24px' : '20px 18px 18px',
      background: 'var(--surface-card)',
      border: '1px solid ' + (h ? 'var(--border-default)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      boxShadow: h ? 'var(--shadow-hover)' : 'none',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-resolve),border-color var(--dur-base)',
      boxSizing: 'border-box',
      ...style
    }
  }, lg ? /*#__PURE__*/React.createElement(__ds_scope.MediaSlot, {
    src: media,
    ratio: "12/5"
  }) : /*#__PURE__*/React.createElement(__ds_scope.MediaSlot, {
    src: media,
    ratio: "3/2",
    style: {
      width: 78
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: lg ? 10 : 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 ' + (lg ? 22 : 16) + 'px/1.15 var(--font-sans)',
      letterSpacing: '-0.015em',
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 ' + (lg ? 19 : 14) + 'px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, agents), /*#__PURE__*/React.createElement("div", {
    style: {
      font: (lg ? '400 19px' : '500 14px') + '/1.3 var(--font-sans)',
      color: h ? 'var(--text-accent)' : lg ? 'var(--text-secondary)' : 'var(--ink)',
      transition: 'color var(--dur-base)'
    }
  }, metric)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: lg ? 20 : 14,
    style: {
      marginBottom: 3,
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  })));
}
Object.assign(__ds_scope, { IndustryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/IndustryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/LayerCard.jsx
try { (() => {
function LayerCard({
  title,
  description,
  media,
  index,
  onClick,
  active = false,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 11,
      background: 'var(--surface-card)',
      border: '1px solid ' + (active ? 'var(--ink)' : h ? 'var(--border-default)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-xs)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: h ? 'var(--shadow-hover)' : 'none',
      transition: 'box-shadow var(--dur-base),border-color var(--dur-base)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaSlot, {
    src: media,
    ratio: "5/2",
    label: index
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      padding: '0 2px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.2 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13.5px/1.4 var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 5
    }
  }, description)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14,
    style: {
      marginTop: 2,
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  })));
}
Object.assign(__ds_scope, { LayerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/LayerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  mono = false,
  selected = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const click = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 9px',
      borderRadius: 'var(--radius-sm)',
      background: selected ? 'var(--ink)' : click && h ? 'var(--surface-muted)' : 'var(--surface-sunken)',
      color: selected ? 'var(--paper)' : 'var(--ink)',
      border: '1px solid ' + (selected ? 'var(--ink)' : 'var(--border-subtle)'),
      font: mono ? '400 11.5px/1 var(--font-mono)' : '400 12px/1 var(--font-sans)',
      cursor: click ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ActivityList.jsx
try { (() => {
function ActivityList({
  items = [],
  size = 'md',
  style
}) {
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: lg ? 16 : 14,
      minHeight: lg ? 55 : 34,
      borderBottom: lg ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: lg ? 26 : 8,
      height: lg ? 26 : 8,
      borderRadius: '50%',
      flex: 'none',
      background: it.resolved ? 'var(--vermilion-500)' : lg ? 'var(--stone-100)' : 'var(--gray-600)',
      border: lg && !it.resolved ? '1px solid var(--border-default)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 ' + (lg ? 17 : 14) + 'px/1.3 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, it.text), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 ' + (lg ? 16 : 13) + 'px/1 var(--font-sans)',
      color: 'var(--text-tertiary)',
      whiteSpace: 'nowrap'
    }
  }, it.time))));
}
Object.assign(__ds_scope, { ActivityList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ActivityList.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyValueList.jsx
try { (() => {
function KeyValueList({
  rows = [],
  size = 'md',
  split = '45%',
  align = 'left',
  style
}) {
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: split + ' 1fr',
      alignItems: 'center',
      minHeight: lg ? 56 : 40,
      borderBottom: '1px solid var(--border-subtle)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 ' + (lg ? 17 : 14) + 'px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: r.mono ? '400 ' + (lg ? 15 : 13) + 'px/1.3 var(--font-mono)' : '400 ' + (lg ? 17 : 14) + 'px/1.3 var(--font-sans)',
      color: r.accent ? 'var(--text-accent)' : 'var(--ink)',
      textAlign: align,
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.value))));
}
Object.assign(__ds_scope, { KeyValueList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyValueList.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  size = 'md',
  accent = false,
  style
}) {
  const vs = size === 'lg' ? 32 : size === 'sm' ? 22 : 26;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: size === 'lg' ? 10 : 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 ' + vs + 'px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: accent ? 'var(--text-accent)' : 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 ' + (size === 'lg' ? 17 : 13) + 'px/1.2 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
function StatRow({
  stats = [],
  size = 'md',
  dividers = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: size === 'lg' ? 1 : 'none',
      paddingLeft: i ? size === 'lg' ? 40 : 28 : 0,
      paddingRight: size === 'lg' ? 0 : 28,
      borderLeft: dividers && i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Stat, _extends({}, s, {
    size: size
  })))));
}
Object.assign(__ds_scope, { Stat, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/TrustMeter.jsx
try { (() => {
function TrustMeter({
  label = 'Trust Score',
  value = 0,
  max = 100,
  showValue = true,
  style
}) {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 15px/1 var(--font-sans)',
      color: 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--stone-100)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: 'var(--vermilion-500)',
      transition: 'width var(--dur-scene) var(--ease-resolve)'
    }
  })));
}
Object.assign(__ds_scope, { TrustMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrustMeter.jsx", error: String((e && e.message) || e) }); }

// components/cards/AgentPanel.jsx
try { (() => {
const H = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    font: '600 15px/1 var(--font-sans)',
    color: 'var(--ink)',
    marginBottom: 14
  }
}, children);
function AgentPanel({
  name,
  letter = 'A',
  verified = true,
  description,
  trust,
  stats = [],
  capabilities = [],
  transactions = [],
  onViewProfile,
  onMore,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      padding: '24px 24px 28px',
      background: 'var(--surface-card)',
      borderLeft: '1px solid var(--border-subtle)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    letter: letter,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 19px/1.1 var(--font-sans)',
      letterSpacing: '-0.01em'
    }
  }, name), verified && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "Verified"))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "ellipsis",
    label: "More",
    size: "sm",
    onClick: onMore
  })), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      font: '400 14.5px/1.55 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, description), trust != null && /*#__PURE__*/React.createElement(__ds_scope.TrustMeter, {
    value: trust,
    style: {
      marginTop: 22,
      paddingTop: 22,
      borderTop: '1px solid var(--border-subtle)'
    }
  }), stats.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.KeyValueList, {
    rows: stats,
    split: "1fr",
    align: "right",
    style: {
      marginTop: 10
    }
  }), capabilities.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(H, null, "Capabilities"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, capabilities.map(c => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: c
  }, c)))), transactions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(H, null, "Recent Transactions"), /*#__PURE__*/React.createElement(__ds_scope.ActivityList, {
    items: transactions
  })), onViewProfile && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: onViewProfile,
    style: {
      marginTop: 24
    }
  }, "View Full Profile"));
}
Object.assign(__ds_scope, { AgentPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AgentPanel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  multiple = true,
  defaultOpen = [],
  dense = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = id => setOpen(o => o.includes(id) ? o.filter(x => x !== id) : multiple ? [...o, id] : [id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map(it => {
    const on = open.includes(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: dense ? 'none' : '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        height: dense ? 30 : 52,
        font: (dense ? '400 14px' : '500 16px') + '/1 var(--font-sans)',
        color: 'var(--ink)'
      }
    }, dense && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      style: {
        transform: on ? 'rotate(90deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-resolve)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, it.meta), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: dense ? 'chevron-down' : on ? 'minus' : 'plus',
      size: dense ? 14 : 16,
      color: "var(--text-secondary)",
      style: {
        transform: dense && on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-resolve)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-resolve)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: dense ? '4px 0 10px 24px' : '0 0 20px',
        font: 'var(--type-small)',
        color: 'var(--text-secondary)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioList.jsx
try { (() => {
function RadioList({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      ...style
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement(RadioRow, {
      key: it.value,
      it: it,
      on: on,
      onClick: () => onChange && onChange(it.value)
    });
  }));
}
function RadioRow({
  it,
  on,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    role: "radio",
    "aria-checked": on,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 32,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      background: on ? 'var(--surface-muted)' : h ? 'var(--surface-sunken)' : 'transparent',
      transition: 'background var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '1px solid ' + (on ? 'var(--ink)' : 'var(--gray-400)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      background: 'var(--surface-card)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: (on ? 500 : 400) + ' 14px/1 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, it.count));
}
Object.assign(__ds_scope, { RadioList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioList.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function SearchInput({
  value,
  defaultValue,
  onChange,
  placeholder = 'Search agents, industries, or protocols…',
  size = 'md',
  shortcut,
  width,
  style
}) {
  const [f, setF] = React.useState(false);
  const h = size === 'sm' ? 36 : size === 'lg' ? 48 : 40;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      width: width || '100%',
      boxSizing: 'border-box',
      padding: '0 12px',
      background: 'var(--surface-card)',
      border: '1px solid ' + (f ? 'var(--ink)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast)',
      cursor: 'text',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: size === 'lg' ? 18 : 16,
    color: "var(--ink)"
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    defaultValue: defaultValue,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: '400 ' + (size === 'sm' ? 13 : 14) + 'px/1 var(--font-sans)',
      color: 'var(--ink)'
    }
  }), shortcut && /*#__PURE__*/React.createElement("kbd", {
    style: {
      font: '400 11px/1 var(--font-mono)',
      color: 'var(--text-tertiary)',
      border: '1px solid var(--border-default)',
      borderRadius: 3,
      padding: '3px 5px'
    }
  }, shortcut));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 12,
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 36,
        padding: '0 16px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        background: on ? 'var(--ink)' : 'var(--surface-card)',
        color: on ? 'var(--paper)' : 'var(--ink)',
        border: '1px solid ' + (on ? 'var(--ink)' : 'var(--border-default)'),
        font: '500 14px/1 var(--font-sans)',
        transition: 'background var(--dur-fast)'
      }
    }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 15
    }), o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/graph/NetworkGraph.jsx
try { (() => {
function rng(seed) {
  return () => {
    seed = seed * 16807 % 2147483647;
    return (seed - 1) / 2147483646;
  };
}
function buildDefault() {
  const clusters = [['logistics', 'Logistics', 250, 150], ['research', 'Research', 760, 70], ['retail', 'Retail', 900, 200], ['finance', 'Finance', 150, 330], ['healthcare', 'Healthcare', 300, 470], ['devtools', 'Developer Tools', 830, 470]];
  const nodes = [{
    id: 'A',
    x: 500,
    y: 290,
    r: 22,
    kind: 'hub',
    label: 'A',
    industry: 'logistics'
  }];
  clusters.forEach(([id, label, x, y]) => nodes.push({
    id,
    x,
    y,
    r: 16,
    kind: 'cluster',
    label,
    industry: id
  }));
  const mids = [[400, 230, 'logistics'], [520, 150, 'research'], [610, 110, 'research'], [690, 290, 'retail'], [640, 390, 'devtools'], [500, 420, 'healthcare'], [420, 360, 'finance'], [350, 120, 'logistics'], [740, 200, 'retail'], [580, 310, 'devtools'], [300, 300, 'finance'], [430, 480, 'healthcare']];
  mids.forEach(([x, y, ind], i) => nodes.push({
    id: 'm' + i,
    x,
    y,
    r: 10,
    kind: 'agent',
    industry: ind
  }));
  const r = rng(7);
  const edges = [];
  for (let i = 0; i < 7; i++) edges.push(['A', 'm' + i]);
  mids.forEach(([,, ind], i) => edges.push(['m' + i, ind]));
  [['m0', 'm7'], ['m1', 'm2'], ['m3', 'm8'], ['m4', 'm9'], ['m5', 'm11'], ['m6', 'm10'], ['m2', 'm8'], ['m9', 'm3'], ['m6', 'm5'], ['m0', 'm6'], ['m1', 'm0'], ['m10', 'finance'], ['m7', 'm1'], ['m4', 'm5']].forEach(e => edges.push(e));
  for (let i = 0; i < 34; i++) {
    const x = 80 + r() * 860,
      y = 30 + r() * 540;
    const id = 'd' + i;
    let best = null,
      bd = 1e9;
    nodes.forEach(n => {
      if (n.kind === 'dot') return;
      const dd = (n.x - x) ** 2 + (n.y - y) ** 2;
      if (dd < bd) {
        bd = dd;
        best = n;
      }
    });
    nodes.push({
      id,
      x,
      y,
      r: 3 + r() * 3,
      kind: 'dot',
      industry: best.industry
    });
    if (r() < 0.6) edges.push([id, best.id]);
  }
  return {
    nodes,
    edges
  };
}
const DEFAULT_GRAPH = buildDefault();
function NetworkGraph({
  nodes = DEFAULT_GRAPH.nodes,
  edges = DEFAULT_GRAPH.edges,
  selectedId,
  focusIndustry,
  onSelect,
  onHover,
  showLabels = true,
  drift = true,
  width = 1000,
  height = 580,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    if (!drift) return;
    let raf,
      s = performance.now();
    const tick = n => {
      setT((n - s) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [drift]);
  const pos = {};
  nodes.forEach((n, i) => {
    const a = n.kind === 'hub' ? 0 : n.kind === 'dot' ? 3 : 1.6;
    pos[n.id] = {
      x: n.x + Math.sin(t * 0.4 + i) * a,
      y: n.y + Math.cos(t * 0.33 + i * 1.3) * a
    };
  });
  const focus = hover || selectedId;
  const nb = new Set();
  if (focus) {
    nb.add(focus);
    edges.forEach(([a, b]) => {
      if (a === focus) nb.add(b);
      if (b === focus) nb.add(a);
    });
  }
  const dimmed = n => focusIndustry && focusIndustry !== 'all' && n.industry !== focusIndustry && n.kind !== 'hub' || hover && !nb.has(n.id);
  const enter = n => {
    if (n.kind === 'dot') return;
    setHover(n.id);
    onHover && onHover(n, pos[n.id]);
  };
  const leave = () => {
    setHover(null);
    onHover && onHover(null);
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + width + ' ' + height,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, edges.map(([a, b], i) => {
    const p = pos[a],
      q = pos[b];
    if (!p || !q) return null;
    const hot = selectedId && (a === selectedId || b === selectedId);
    const warm = hover && (a === hover || b === hover);
    const na = nodes.find(n => n.id === a),
      nbb = nodes.find(n => n.id === b);
    const dim = na && dimmed(na) || nbb && dimmed(nbb);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: p.x,
      y1: p.y,
      x2: q.x,
      y2: q.y,
      stroke: hot ? 'var(--graph-edge-active)' : warm ? 'var(--gray-600)' : 'var(--graph-edge)',
      strokeWidth: hot ? 1.4 : 1,
      strokeDasharray: hot ? '4 4' : undefined,
      style: {
        opacity: dim && !hot ? 0.25 : 1,
        transition: 'opacity var(--dur-base), stroke var(--dur-base)',
        animation: hot ? 'ad-dash 1.2s linear infinite' : 'none'
      }
    });
  }), nodes.map(n => {
    const p = pos[n.id];
    const sel = n.id === selectedId;
    const hv = n.id === hover;
    const dim = dimmed(n);
    const fill = sel ? 'var(--graph-node-resolved)' : n.kind === 'hub' ? 'var(--gray-700)' : n.kind === 'dot' ? 'var(--gray-350)' : n.kind === 'cluster' ? 'var(--gray-400)' : 'var(--stone-200)';
    const r = n.r * (hv ? 1.15 : 1);
    return /*#__PURE__*/React.createElement("g", {
      key: n.id,
      onMouseEnter: () => enter(n),
      onMouseLeave: leave,
      onClick: () => n.kind !== 'dot' && onSelect && onSelect(n),
      style: {
        cursor: n.kind === 'dot' ? 'default' : 'pointer',
        opacity: dim ? 0.3 : 1,
        transition: 'opacity var(--dur-base)'
      }
    }, (n.kind === 'hub' || sel) && /*#__PURE__*/React.createElement("circle", {
      cx: p.x,
      cy: p.y,
      r: r + 5,
      fill: "var(--paper)",
      stroke: sel ? 'var(--vermilion-500)' : 'var(--ink)',
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: p.x,
      cy: p.y,
      r: r,
      fill: fill,
      stroke: n.kind === 'dot' ? 'none' : sel ? 'var(--vermilion-600)' : 'var(--gray-500)',
      strokeWidth: "1",
      style: {
        transition: 'r var(--dur-fast), fill var(--dur-base)'
      }
    }), n.kind === 'hub' && /*#__PURE__*/React.createElement("text", {
      x: p.x,
      y: p.y + 5,
      textAnchor: "middle",
      style: {
        font: '500 15px var(--font-sans)',
        fill: 'var(--paper)',
        pointerEvents: 'none'
      }
    }, n.label), showLabels && n.kind === 'cluster' && /*#__PURE__*/React.createElement("text", {
      x: p.x + (p.x > 500 ? r + 10 : -(r + 10)),
      y: p.y + 4,
      textAnchor: p.x > 500 ? 'start' : 'end',
      style: {
        font: '400 13px var(--font-sans)',
        fill: hv || sel ? 'var(--ink)' : 'var(--gray-700)',
        pointerEvents: 'none'
      }
    }, n.label), n.kind === 'agent' && hv && /*#__PURE__*/React.createElement("text", {
      x: p.x,
      y: p.y - r - 8,
      textAnchor: "middle",
      style: {
        font: '400 10px var(--font-mono)',
        fill: 'var(--gray-600)',
        pointerEvents: 'none'
      }
    }, 'agent://' + n.id));
  }));
}
Object.assign(__ds_scope, { DEFAULT_GRAPH, NetworkGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graph/NetworkGraph.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const DEFAULT_LINKS = ['Atlas', 'Technology', 'Research', 'About', 'Docs'];
function NavBar({
  logo,
  links = DEFAULT_LINKS,
  active,
  onNavigate,
  onHome,
  cta = 'Register Agent',
  onCta,
  menus = {},
  search = true,
  sticky = false,
  sub,
  extra,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '0 var(--gutter)',
      borderBottom: '1px solid var(--border-subtle)',
      background: dark ? 'var(--ink-deep)' : sticky ? 'var(--surface-glass)' : 'var(--surface-page)',
      borderBottomColor: dark ? '#3a3c38' : undefined,
      backdropFilter: sticky ? 'var(--blur-glass)' : undefined,
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 20,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    "aria-label": "Aidress home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      flex: 'none'
    }
  }, logo && /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    className: "ad-noflip",
    style: {
      width: 26,
      height: 26,
      objectFit: 'contain',
      display: 'block',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 22px/1 var(--font-sans)',
      letterSpacing: '-0.035em',
      color: dark ? 'var(--paper)' : 'var(--ink)'
    }
  }, "AIDRESS"), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-mono)',
      textTransform: 'uppercase',
      color: 'var(--vermilion-500)'
    }
  }, "/ ", sub)), /*#__PURE__*/React.createElement("nav", {
    "data-ad-nav": "links",
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    label: l,
    on: l === active,
    dark: dark,
    items: menus[l],
    onPick: k => onNavigate && onNavigate(k),
    onClick: () => onNavigate && onNavigate(l)
  }))), extra, search && /*#__PURE__*/React.createElement(__ds_scope.SearchInput, {
    size: "sm",
    width: 280
  }), cta && /*#__PURE__*/React.createElement("span", {
    "data-ad-nav": "cta",
    style: {
      display: 'contents'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta,
    style: {
      height: 34
    }
  }, cta)));
}
function NavLink({
  label,
  on,
  dark,
  onClick,
  items,
  onPick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      cursor: 'pointer',
      font: (on ? 500 : 400) + ' 13px/1 var(--font-sans)',
      color: dark ? on || h ? 'var(--paper)' : 'var(--gray-400)' : on || h ? 'var(--ink)' : 'var(--gray-700)'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: -1,
      height: 2,
      background: 'var(--vermilion-500)',
      transform: on ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  }), items && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 9,
      opacity: .6
    }
  }, "\u25BE"), items && h && /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: '100%',
      left: 4,
      minWidth: 180,
      display: 'flex',
      flexDirection: 'column',
      padding: 6,
      background: dark ? 'var(--ink-deep)' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? '#3a3c38' : 'var(--border-box)'),
      boxShadow: '0 12px 32px rgba(22,22,22,.12)',
      zIndex: 30
    }
  }, items.map(([t, k]) => /*#__PURE__*/React.createElement(DropItem, {
    key: t,
    t: t,
    dark: dark,
    onClick: () => {
      setH(false);
      onPick(k);
    }
  }))));
}
function DropItem({
  t,
  dark,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: '9px 10px',
      font: '400 13px/1.2 var(--font-sans)',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      color: dark ? 'var(--paper)' : 'var(--ink)',
      background: h ? dark ? '#2c2e2a' : 'var(--stone-100)' : 'transparent'
    }
  }, t);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  size = 'md',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: size === 'lg' ? 56 : 40,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        all: 'unset',
        cursor: 'pointer',
        position: 'relative',
        padding: size === 'lg' ? '0 0 18px' : '0 0 14px',
        font: (on ? 500 : 400) + ' ' + (size === 'lg' ? 18 : 16) + 'px/1 var(--font-sans)',
        color: on ? 'var(--ink)' : 'var(--text-secondary)',
        transition: 'color var(--dur-fast)'
      }
    }, l, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--ink)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-resolve)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TextLink.jsx
try { (() => {
function TextLink({
  children,
  direction = 'forward',
  size = 'md',
  onClick,
  href,
  style
}) {
  const [h, setH] = React.useState(false);
  const back = direction === 'back';
  const fs = size === 'lg' ? 18 : size === 'sm' ? 13 : 15;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      font: '500 ' + fs + 'px/1 var(--font-sans)',
      color: h ? 'var(--text-accent)' : 'var(--ink)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast)',
      ...style
    }
  }, back && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: fs + 1,
    style: {
      transform: h ? 'translateX(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: back ? 400 : 500
    }
  }, children), !back && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: fs,
    style: {
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/AgentPopover.jsx
try { (() => {
function AgentPopover({
  name,
  letter = 'A',
  verified = true,
  rows = [],
  onView,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 216,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-popover)',
      padding: '10px 14px 14px',
      boxSizing: 'border-box',
      animation: 'ad-fade-up var(--dur-base) var(--ease-resolve)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'center',
      paddingBottom: 10,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    letter: letter,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1.1 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, name), verified && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "Verified"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      padding: '6px 0 8px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      height: 25,
      alignItems: 'center',
      font: '400 11px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontFamily: r.mono ? 'var(--font-mono)' : undefined
    }
  }, r.value)))), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    size: "sm",
    onClick: onView,
    style: {
      marginTop: 12,
      fontSize: 12
    }
  }, "View Agent"));
}
Object.assign(__ds_scope, { AgentPopover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AgentPopover.jsx", error: String((e && e.message) || e) }); }

// components/site/FlowDiagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Box({
  title,
  sub,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      minWidth: 172,
      padding: '22px 18px',
      background: 'var(--paper)',
      border: '1px solid ' + (accent ? 'var(--vermilion-500)' : 'var(--border-box)'),
      transition: 'border-color var(--dur-slow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1 var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--ink-deep)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, sub));
}
function FlowDiagram({
  from,
  to,
  label,
  via = [],
  activeVia,
  resolved = true,
  style
}) {
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    setK(x => x + 1);
  }, [label, to && to.title, activeVia]);
  const col = resolved ? 'var(--vermilion-500)' : 'var(--gray-box)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Box, from), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      height: 120,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      height: 1,
      background: col,
      transformOrigin: 'left',
      animation: 'ad-draw var(--dur-scene) var(--ease-resolve)'
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      transform: 'translateY(-22px)',
      textAlign: 'center',
      font: '400 12px/1 var(--font-mono)',
      textTransform: 'uppercase',
      color: col
    }
  }, label), via.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      transform: 'translateY(14px)',
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, via.map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      font: '400 11px/1 var(--font-mono)',
      textTransform: 'uppercase',
      padding: '5px 7px',
      border: '1px solid ' + (v === activeVia ? 'var(--vermilion-500)' : 'var(--border-box)'),
      color: v === activeVia ? 'var(--vermilion-600)' : 'var(--text-secondary)',
      background: 'var(--paper)',
      transition: 'all var(--dur-base)'
    }
  }, v)))), /*#__PURE__*/React.createElement(Box, _extends({}, to, {
    accent: resolved
  })));
}
Object.assign(__ds_scope, { FlowDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/FlowDiagram.jsx", error: String((e && e.message) || e) }); }

// components/site/IndustryTile.jsx
try { (() => {
function IndustryTile({
  media,
  src,
  title,
  description,
  code,
  active = false,
  height = 250,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const on = active || h;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      cursor: onClick ? 'pointer' : 'default',
      borderBottom: '1px solid ' + (on ? 'var(--vermilion-500)' : 'var(--border-subtle)'),
      boxShadow: on ? 'inset 0 -1px 0 var(--vermilion-500)' : 'none',
      transition: 'border-color var(--dur-base),box-shadow var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--stone-section)'
    }
  }, media || src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), code && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      font: '400 11px/1 var(--font-mono)',
      padding: '5px 7px',
      background: 'var(--paper)',
      color: 'var(--ink-deep)',
      pointerEvents: 'none'
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 26px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: on ? 'var(--vermilion-500)' : 'var(--ink-deep)',
      transition: 'color var(--dur-base)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 26,
    strokeWidth: 1.25,
    color: on ? 'var(--vermilion-500)' : 'var(--ink-deep)',
    style: {
      transform: h ? 'translate(2px,-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-resolve)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 22px',
      font: '400 15px/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { IndustryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/IndustryTile.jsx", error: String((e && e.message) || e) }); }

// components/site/LayerTabs.jsx
try { (() => {
function LayerTabs({
  items = [],
  value = 0,
  onChange,
  tone = 'light',
  style
}) {
  const n = items.length || 1;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(' + n + ',minmax(0,1fr))',
      borderBottom: '1px solid var(--border-rule)',
      ...style
    }
  }, items.map((it, i) => {
    const on = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(i),
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        padding: '0 12px 22px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 20px/1.1 var(--font-sans)',
        letterSpacing: '-0.01em',
        color: on ? 'var(--vermilion-500)' : tone === 'dark' ? 'var(--paper)' : 'var(--ink-deep)',
        transition: 'color var(--dur-base)'
      }
    }, typeof it === 'string' ? it : it.label));
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: value / n * 100 + '%',
      width: 100 / n + '%',
      bottom: -1,
      height: 3,
      background: 'var(--vermilion-500)',
      transition: 'left var(--dur-slow) var(--ease-resolve)'
    }
  }));
}
Object.assign(__ds_scope, { LayerTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/LayerTabs.jsx", error: String((e && e.message) || e) }); }

// components/site/MachineView.jsx
try { (() => {
function renderLine(line, onLink, i) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0,
    m;
  while (m = re.exec(line)) {
    if (m.index > last) parts.push(line.slice(last, m.index));
    const href = m[2],
      lab = m[1];
    parts.push(/*#__PURE__*/React.createElement("a", {
      key: m.index,
      href: href.startsWith('#') ? href : undefined,
      onClick: e => {
        if (onLink && href.startsWith('#')) {
          e.preventDefault();
          onLink(href.slice(1));
        }
      },
      style: {
        color: 'var(--ink-deep)',
        textDecoration: 'underline',
        textUnderlineOffset: 2,
        cursor: 'pointer'
      }
    }, "[", lab, "]"));
    last = re.lastIndex;
  }
  if (last < line.length) parts.push(line.slice(last));
  return /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minHeight: '1.6em'
    }
  }, parts);
}
function MachineView({
  text = '',
  onLink,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      color: 'var(--ink-deep)',
      font: '400 13.5px/1.6 var(--font-mono)',
      padding: '28px var(--gutter) 64px',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      ...style
    }
  }, text.split('\n').map((l, i) => renderLine(l, onLink, i)));
}
Object.assign(__ds_scope, { MachineView });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/MachineView.jsx", error: String((e && e.message) || e) }); }

// components/site/ModeToggle.jsx
try { (() => {
function ModeToggle({
  value = 'human',
  onChange,
  tone = 'light',
  style
}) {
  const opt = v => {
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onChange && onChange(v),
      style: {
        all: 'unset',
        cursor: 'pointer',
        padding: '6px 9px',
        font: '400 12px/1 var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        background: on ? tone === 'dark' ? 'var(--paper)' : 'var(--ink-deep)' : 'transparent',
        color: on ? tone === 'dark' ? 'var(--ink-deep)' : 'var(--paper)' : 'var(--text-secondary)',
        transition: 'background var(--dur-fast)'
      }
    }, v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      border: '1px solid ' + (tone === 'dark' ? '#444' : 'var(--border-box)'),
      padding: 2,
      gap: 2,
      ...style
    }
  }, opt('human'), opt('machine'));
}
Object.assign(__ds_scope, { ModeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ModeToggle.jsx", error: String((e && e.message) || e) }); }

// components/site/SectionHeader.jsx
try { (() => {
function SectionHeader({
  index,
  label,
  tagline,
  title,
  lead,
  tone = 'light',
  size = 'lg',
  style
}) {
  const dark = tone === 'dark';
  const fg = dark ? 'var(--paper)' : 'var(--ink-deep)';
  const mute = dark ? 'var(--gray-400)' : 'var(--text-secondary)';
  const fs = size === 'lg' ? 64 : size === 'md' ? 48 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: size === 'lg' ? 44 : 32,
      ...style
    }
  }, (index || label || tagline) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      font: '400 14px/1 var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: fg
    }
  }, /*#__PURE__*/React.createElement("span", null, index ? index + ' / ' : '', label), tagline && /*#__PURE__*/React.createElement("span", null, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 ' + fs + 'px/0.98 var(--font-sans)',
      letterSpacing: '-0.05em',
      color: fg,
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      justifySelf: 'end',
      maxWidth: 400,
      font: '400 16px/1.5 var(--font-sans)',
      color: mute,
      textWrap: 'pretty'
    }
  }, lead)));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
function SiteFooter({
  columns = [],
  onNavigate,
  note = '© 2026 Aidress',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-deep)',
      color: 'var(--paper)',
      padding: '64px var(--gutter) 32px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(' + columns.length + ',1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px/1 var(--font-sans)',
      letterSpacing: '-0.035em'
    }
  }, "AIDRESS"), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      textTransform: 'uppercase',
      color: 'var(--gray-400)',
      marginBottom: 6
    }
  }, c.title), c.links.map(l => {
    const lab = typeof l === 'string' ? l : l.label;
    const to = typeof l === 'string' ? null : l.to;
    return /*#__PURE__*/React.createElement("a", {
      key: lab,
      onClick: () => to && onNavigate && onNavigate(to),
      style: {
        font: '400 14px/1.2 var(--font-sans)',
        color: 'var(--paper)',
        cursor: 'pointer'
      }
    }, lab);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 72,
      paddingTop: 20,
      borderTop: '1px solid #3a3c38',
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--gray-400)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, note), /*#__PURE__*/React.createElement("span", null, "Orange = resolved")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/workflow/WorkflowRail.jsx
try { (() => {
function WorkflowRail({
  steps = [],
  activeIndex = -1,
  size = 'lg',
  onStepClick,
  style
}) {
  const d = size === 'lg' ? 110 : 80;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      ...style
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: d / 2 - 10,
      color: i <= activeIndex ? 'var(--vermilion-500)' : 'var(--gray-400)',
      transition: 'color var(--dur-slow)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 20,
    strokeWidth: 1.25,
    style: {
      width: 32
    }
  })), /*#__PURE__*/React.createElement(WorkflowStep, {
    step: s,
    d: d,
    state: i < activeIndex ? 'resolved' : i === activeIndex ? 'active' : 'idle',
    onClick: onStepClick ? () => onStepClick(i) : undefined
  }))));
}
function WorkflowStep({
  step,
  d,
  state,
  onClick
}) {
  const res = state === 'resolved',
    act = state === 'active';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      width: d + 30,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: d,
      height: d,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      background: res ? 'var(--vermilion-50)' : 'var(--stone-100)',
      border: '1px solid ' + (res || act ? 'var(--vermilion-500)' : 'var(--gray-400)'),
      color: res || act ? 'var(--vermilion-600)' : 'var(--ink)',
      animation: act ? 'ad-pulse 1.4s var(--ease-standard) infinite' : 'none',
      transition: 'background var(--dur-slow),border-color var(--dur-slow)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: step.icon || 'user',
    size: Math.round(d * 0.3),
    strokeWidth: 1.25
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 ' + (d > 90 ? 19 : 15) + 'px/1.3 var(--font-sans)',
      textAlign: 'center',
      color: 'var(--ink)',
      whiteSpace: 'pre-line'
    }
  }, step.label), step.meta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1 var(--font-mono)',
      color: res ? 'var(--text-accent)' : 'var(--text-tertiary)',
      marginTop: -8
    }
  }, step.meta));
}
Object.assign(__ds_scope, { WorkflowRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/workflow/WorkflowRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/App.jsx
try { (() => {
(() => {
  const {
    NavBar
  } = window.AidressDesignSystem_f2dd6a;
  const NAV = {
    Atlas: 'atlas',
    Technology: 'technology',
    Research: 'research',
    About: 'about',
    Docs: 'docs'
  };
  const ACTIVE = {
    atlas: 'Atlas',
    passport: 'Atlas',
    technology: 'Technology',
    research: 'Research',
    about: 'About',
    docs: 'Docs'
  };
  function App() {
    const init = (() => {
      try {
        return JSON.parse(localStorage.getItem('aidress-kit-route')) || {
          name: 'home',
          params: {}
        };
      } catch (e) {
        return {
          name: 'home',
          params: {}
        };
      }
    })();
    const [route, setRoute] = React.useState(init);
    const go = (name, params = {}) => {
      const r = {
        name,
        params
      };
      setRoute(r);
      localStorage.setItem('aidress-kit-route', JSON.stringify(r));
      window.scrollTo({
        top: 0
      });
    };
    const S = {
      home: window.Home,
      industries: window.Industries,
      industry: window.IndustryDetail,
      atlas: window.Atlas,
      passport: window.Passport,
      technology: window.Technology
    }[route.name];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1440,
        margin: '0 auto',
        background: 'var(--surface-page)',
        minHeight: '100vh',
        borderLeft: '1px solid var(--border-subtle)',
        borderRight: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      sticky: true,
      active: ACTIVE[route.name],
      onNavigate: l => go(NAV[l]),
      onHome: () => go('home')
    }), /*#__PURE__*/React.createElement("main", {
      key: route.name + JSON.stringify(route.params),
      style: {
        animation: 'ad-fade-up var(--dur-slow) var(--ease-resolve)'
      }
    }, S ? /*#__PURE__*/React.createElement(S, {
      go: go,
      params: route.params
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '120px var(--gutter)',
        font: 'var(--type-mono)',
        color: 'var(--text-tertiary)'
      }
    }, ACTIVE[route.name], " \u2014 not yet defined in the wireframes.")));
  }
  if (window.__adKitEntry) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Atlas.jsx
try { (() => {
(() => {
  const {
    Eyebrow,
    SearchInput,
    RadioList,
    Accordion,
    Button,
    SegmentedControl,
    NetworkGraph,
    AgentPanel,
    StatRow,
    Tag
  } = window.AidressDesignSystem_f2dd6a;
  function Atlas({
    go,
    params
  }) {
    const D = window.AD_DATA;
    const [view, setView] = React.useState('network');
    const [ind, setInd] = React.useState('all');
    const [sel, setSel] = React.useState(params.selected || 'A');
    const a = D.agentFor(sel);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '40px var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 24
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Atlas"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '16px 0 0',
        font: 'var(--type-h1)',
        letterSpacing: '-0.03em'
      }
    }, "Explore the Live Registry"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0',
        font: '400 20px/1.45 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 400
      }
    }, "Hover or click on any agent to inspect its identity, capabilities, and connections.")), /*#__PURE__*/React.createElement(SegmentedControl, {
      value: view,
      onChange: setView,
      options: [{
        value: 'network',
        label: 'Network',
        icon: 'network'
      }, {
        value: 'map',
        label: 'Map',
        icon: 'globe'
      }, {
        value: 'list',
        label: 'List',
        icon: 'list'
      }]
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'var(--sidebar-width) minmax(0,1fr) var(--panel-width)',
        marginTop: 24,
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        padding: '20px 22px 28px var(--gutter)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(SearchInput, {
      placeholder: "Search agents, capabilities\u2026"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 14
      }
    }, "Filter by industry"), /*#__PURE__*/React.createElement(RadioList, {
      value: ind,
      onChange: setInd,
      items: D.filterIndustries
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 10
      }
    }, "Filter by"), /*#__PURE__*/React.createElement(Accordion, {
      dense: true,
      items: [{
        id: 'cap',
        title: 'Capabilities',
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6
          }
        }, ['Routing', 'Negotiation', 'Payments', 'Tracking'].map(t => /*#__PURE__*/React.createElement(Tag, {
          key: t,
          onClick: () => {}
        }, t)))
      }, {
        id: 'pro',
        title: 'Protocols',
        content: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6
          }
        }, ['A2A', 'MCP', 'x402'].map(t => /*#__PURE__*/React.createElement(Tag, {
          key: t,
          mono: true,
          onClick: () => {}
        }, t)))
      }, {
        id: 'trust',
        title: 'Trust Score',
        content: '≥ 90 · ≥ 95 · ≥ 98'
      }, {
        id: 'ver',
        title: 'Verification Status',
        content: 'Verified · Pending'
      }, {
        id: 'loc',
        title: 'Location',
        content: 'Any region'
      }]
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconLeft: "refresh-cw",
      fullWidth: true,
      onClick: () => {
        setInd('all');
        setSel('A');
      }
    }, "Reset Filters")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '28px 32px 12px',
        display: 'flex',
        alignItems: 'center'
      }
    }, view === 'network' ? /*#__PURE__*/React.createElement(NetworkGraph, {
      selectedId: sel,
      focusIndustry: ind,
      onSelect: n => setSel(n.id)
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        textAlign: 'center',
        font: 'var(--type-mono)',
        color: 'var(--text-tertiary)'
      }
    }, view === 'map' ? 'Map' : 'List', " view \u2014 not yet defined in the wireframes.")), /*#__PURE__*/React.createElement(StatRow, {
      size: "lg",
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '28px 40px 32px'
      },
      stats: [{
        value: '10K+',
        label: 'Registered Agents'
      }, {
        value: '50+',
        label: 'Industries'
      }, {
        value: '14.2M',
        label: 'Transactions'
      }, {
        value: '99.8%',
        label: 'Routing Success'
      }]
    })), /*#__PURE__*/React.createElement(AgentPanel, {
      key: sel,
      name: a.name,
      letter: a.letter,
      description: a.description,
      trust: a.trust,
      stats: [{
        label: 'Transactions',
        value: a.transactions
      }, {
        label: 'Connected Agents',
        value: a.connected
      }, {
        label: 'Protocols',
        value: a.protocols
      }],
      capabilities: a.capabilities,
      transactions: a.activity,
      onViewProfile: () => go('passport', {
        id: sel
      }),
      style: {
        animation: 'ad-fade-up var(--dur-base) var(--ease-resolve)'
      }
    })));
  }
  window.Atlas = Atlas;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Atlas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    NavBar,
    Button,
    Eyebrow,
    StatRow,
    NetworkGraph,
    AgentPopover,
    IndustryCard,
    TextLink,
    Icon
  } = window.AidressDesignSystem_f2dd6a;
  function Home({
    go
  }) {
    const D = window.AD_DATA;
    const [pop, setPop] = React.useState({
      id: 'A',
      x: 500,
      y: 290
    });
    const a = D.agentFor(pop ? pop.id : 'A');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
        gap: 24,
        padding: '72px var(--gutter) 24px',
        minHeight: 560,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "The coordination layer"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '26px 0 0',
        font: '600 72px/1.0 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, "For the", /*#__PURE__*/React.createElement("br", null), "Agentic Economy"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '26px 0 0',
        font: 'var(--type-lead)',
        color: 'var(--text-secondary)',
        maxWidth: 460,
        textWrap: 'pretty'
      }
    }, "A universal registry for autonomous agents to discover, verify, and collaborate."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => go('atlas')
    }, "Explore the Atlas"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary"
    }, "Register Agent")), /*#__PURE__*/React.createElement(StatRow, {
      style: {
        marginTop: 56
      },
      stats: [{
        value: '10K+',
        label: 'Registered Agents'
      }, {
        value: '50+',
        label: 'Industries'
      }, {
        value: '99.8%',
        label: 'Routing Success'
      }, {
        value: '< 1s',
        label: 'Discovery Time'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(NetworkGraph, {
      height: 560,
      onHover: (n, p) => n && n.kind !== 'dot' && setPop({
        id: n.id,
        ...p
      }),
      onSelect: n => go('atlas', {
        selected: n.id
      })
    }), pop && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: Math.min(pop.x, 760) / 1000 * 100 + '%',
        top: pop.y / 580 * 100 + '%',
        transform: 'translate(28px,-60%)',
        pointerEvents: 'auto'
      },
      key: pop.id
    }, /*#__PURE__*/React.createElement(AgentPopover, {
      name: a.name,
      letter: a.letter,
      rows: [{
        label: 'Trust Score',
        value: a.trust
      }, {
        label: 'Transactions',
        value: a.transactions
      }, {
        label: 'Connected Agents',
        value: a.connected
      }, {
        label: 'Protocols',
        value: a.protocols
      }],
      onView: () => go('atlas', {
        selected: pop.id
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        font: '400 11px/1 var(--font-mono)',
        color: 'var(--text-secondary)',
        letterSpacing: '.08em',
        textTransform: 'uppercase'
      }
    }, "Scroll", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down",
      size: 16
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '48px var(--gutter) 72px',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Industries"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: 'var(--type-h2)',
        letterSpacing: '-0.025em'
      }
    }, "Agent Networks in Action"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px 0 0',
        font: '400 18px/1.3 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "Real workflows. Measurable impact.")), /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => go('industries')
    }, "Explore all industries")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6,minmax(0,1fr))',
        gap: 18,
        marginTop: 32
      }
    }, D.industries.slice(0, 6).map(i => /*#__PURE__*/React.createElement(IndustryCard, _extends({
      key: i.id
    }, i, {
      onClick: () => go('industry', {
        id: i.id
      })
    }))))));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Industries.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Eyebrow,
    IndustryCard,
    TextLink,
    Button,
    StatRow,
    Tabs,
    MediaSlot,
    WorkflowRail,
    KeyValueList
  } = window.AidressDesignSystem_f2dd6a;
  function Industries({
    go
  }) {
    const D = window.AD_DATA;
    const list = D.industries.filter(i => i.id !== 'retail');
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px var(--gutter) 72px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Industries"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '18px 0 0',
        font: 'var(--type-h1)',
        letterSpacing: '-0.03em'
      }
    }, "Agent Networks in Action"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        font: '400 20px/1.3 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "Real workflows. Measurable impact."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 16,
        marginTop: 36
      }
    }, list.map(i => /*#__PURE__*/React.createElement(IndustryCard, _extends({
      key: i.id,
      size: "lg"
    }, i, {
      onClick: () => go('industry', {
        id: i.id
      })
    })))));
  }
  function IndustryDetail({
    go,
    params
  }) {
    const D = window.AD_DATA;
    const ind = D.industries.find(i => i.id === (params.id || 'logistics')) || D.industries[0];
    const [tab, setTab] = React.useState(params.tab || 'Overview');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      size: "lg",
      onClick: () => go('industries')
    }, "Back to all industries"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: '600 72px/1 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, ind.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '22px 0 0',
        font: 'var(--type-lead)',
        color: 'var(--text-secondary)',
        maxWidth: 520
      }
    }, ind.id === 'logistics' ? 'International freight coordination powered by autonomous agents.' : 'Coordination across the ' + ind.title.toLowerCase() + ' value chain, powered by autonomous agents.')), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      style: {
        marginTop: 14
      }
    }, "Register for early access")), /*#__PURE__*/React.createElement(StatRow, {
      size: "lg",
      style: {
        marginTop: 40
      },
      stats: [{
        value: ind.agents.split(' ')[0],
        label: 'Registered Agents'
      }, {
        value: ind.metric,
        label: 'Coordination Time',
        accent: true
      }, {
        value: '99.8%',
        label: 'Routing Success'
      }, {
        value: '-94%',
        label: 'Manual Handoffs'
      }]
    })), /*#__PURE__*/React.createElement(Tabs, {
      size: "lg",
      value: tab,
      onChange: setTab,
      items: ['Overview', 'Workflow', 'Agents', 'Case Studies'],
      style: {
        marginTop: 48,
        padding: '0 var(--gutter)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      key: tab,
      style: {
        animation: 'ad-fade-up var(--dur-base) var(--ease-resolve)'
      }
    }, tab === 'Overview' && /*#__PURE__*/React.createElement(Overview, {
      ind: ind,
      onWorkflow: () => setTab('Workflow')
    }), tab === 'Workflow' && /*#__PURE__*/React.createElement(Workflow, {
      go: go
    }), (tab === 'Agents' || tab === 'Case Studies') && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '80px var(--gutter)',
        font: 'var(--type-mono)',
        color: 'var(--text-tertiary)'
      }
    }, tab, " \u2014 not yet defined in the wireframes.")));
  }
  function Overview({
    ind,
    onWorkflow
  }) {
    const [lit, setLit] = React.useState(0);
    React.useEffect(() => {
      const id = setInterval(() => setLit(x => (x + 1) % 5), 1100);
      return () => clearInterval(id);
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 64,
        padding: '36px var(--gutter) 72px'
      }
    }, /*#__PURE__*/React.createElement(MediaSlot, {
      ratio: "17/10",
      label: "Coordination map"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '600 36px/1.1 var(--font-sans)',
        letterSpacing: '-0.025em'
      }
    }, "How it works"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        font: '400 21px/1.45 var(--font-sans)',
        color: 'var(--text-secondary)',
        textWrap: 'pretty'
      }
    }, "AIDRESS enables ", ind.title.toLowerCase(), " agents to coordinate across planning, customs, insurance, carriers and settlement \u2014 automatically and securely."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        marginTop: 36
      }
    }, ['Trusted agent discovery', 'Automated negotiation', 'Real-time coordination', 'End-to-end transparency'].map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: i < lit ? 'var(--vermilion-500)' : 'var(--stone-100)',
        border: '1px solid ' + (i < lit ? 'var(--vermilion-500)' : 'var(--border-default)'),
        transition: 'background var(--dur-slow) var(--ease-resolve)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 19px/1 var(--font-sans)'
      }
    }, t)))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: onWorkflow,
      style: {
        marginTop: 32,
        paddingLeft: 0
      }
    }, "See the example workflow")));
  }
  function Workflow({
    go
  }) {
    const D = window.AD_DATA;
    const [i, setI] = React.useState(0);
    React.useEffect(() => {
      const id = setInterval(() => setI(x => x >= 6 ? 0 : x + 1), 1500);
      return () => clearInterval(id);
    }, []);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px var(--gutter) 56px',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Workflow"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 0',
        font: '600 56px/1.05 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, "Example Workflow"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        font: '400 21px/1.3 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "From shipment request to final settlement."), /*#__PURE__*/React.createElement(WorkflowRail, {
      steps: D.workflow,
      activeIndex: i,
      onStepClick: k => k > 0 && go('passport', {
        id: 'A',
        from: 'industry'
      }),
      style: {
        marginTop: 56,
        textAlign: 'left'
      }
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 0,
        padding: '0 var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '36px 40px 48px 0',
        borderRight: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(MediaSlot, {
      ratio: "2/1",
      texture: true,
      label: "Live simulation"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '36px 0 48px 44px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 22px',
        font: '600 28px/1 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, "Workflow Metrics"), /*#__PURE__*/React.createElement(KeyValueList, {
      size: "lg",
      split: "50%",
      rows: [{
        label: 'Total Time',
        value: '18 seconds',
        accent: i >= 6
      }, {
        label: 'Agents Involved',
        value: '6'
      }, {
        label: 'Trust Checks',
        value: '14'
      }, {
        label: 'Protocols Used',
        value: 'A2A, MCP, x402',
        mono: true
      }, {
        label: 'Success Rate',
        value: '99.8%'
      }]
    }))));
  }
  Object.assign(window, {
    Industries,
    IndustryDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Industries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Passport.jsx
try { (() => {
(() => {
  const {
    TextLink,
    Avatar,
    Badge,
    Button,
    Tabs,
    KeyValueList,
    MediaSlot,
    ActivityList,
    Accordion,
    TrustMeter,
    Tag
  } = window.AidressDesignSystem_f2dd6a;
  function Passport({
    go,
    params
  }) {
    const D = window.AD_DATA;
    const a = D.agentFor(params.id || 'A');
    const [tab, setTab] = React.useState('Overview');
    const [conn, setConn] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      size: "lg",
      onClick: () => params.from === 'industry' ? go('industry', {
        id: 'logistics',
        tab: 'Workflow'
      }) : go('atlas', {
        selected: params.id
      })
    }, "Back to ", params.from === 'industry' ? 'workflow' : 'Atlas'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 52,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      letter: a.letter,
      size: 134,
      tone: conn ? 'resolved' : 'neutral',
      ring: conn
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: '600 44px/1 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, a.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      size: "lg"
    }, "Verified"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono)',
        color: 'var(--text-secondary)'
      }
    }, a.id))), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: conn ? 'secondary' : 'accent',
      iconLeft: conn ? 'check' : undefined,
      onClick: () => setConn(c => !c),
      style: {
        minWidth: 164,
        height: 54,
        fontSize: 17
      }
    }, conn ? 'Connected' : 'Connect'))), /*#__PURE__*/React.createElement(Tabs, {
      size: "lg",
      value: tab,
      onChange: setTab,
      items: ['Overview', 'Capabilities', 'Trust', 'Protocols', 'Transactions'],
      style: {
        marginTop: 40,
        padding: '0 var(--gutter)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      key: tab,
      style: {
        animation: 'ad-fade-up var(--dur-base) var(--ease-resolve)'
      }
    }, tab === 'Overview' && /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        padding: '0 var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 44px 48px 0',
        borderRight: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(KeyValueList, {
      size: "lg",
      rows: [{
        label: 'Owner',
        value: a.owner
      }, {
        label: 'Type',
        value: a.type
      }, {
        label: 'Industry',
        value: a.industry
      }, {
        label: 'Trust Score',
        value: a.trust
      }, {
        label: 'Total Transactions',
        value: a.transactions
      }, {
        label: 'Uptime',
        value: a.uptime
      }, {
        label: 'Connected Agents',
        value: a.connected
      }, {
        label: 'Supported Protocols',
        value: a.protocols,
        mono: true
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '36px 0 48px 44px'
      }
    }, /*#__PURE__*/React.createElement(MediaSlot, {
      ratio: "3/1",
      label: "Connection graph"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '40px 0 16px',
        font: '600 22px/1 var(--font-sans)',
        letterSpacing: '-0.015em'
      }
    }, "Recent Activity"), /*#__PURE__*/React.createElement(ActivityList, {
      size: "lg",
      items: a.activity
    }), /*#__PURE__*/React.createElement(TextLink, {
      size: "lg",
      onClick: () => setTab('Transactions'),
      style: {
        marginTop: 36
      }
    }, "View all"))), tab === 'Capabilities' && /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '16px var(--gutter) 56px',
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(Accordion, {
      defaultOpen: [a.capabilities[0]],
      items: a.capabilities.map(c => ({
        id: c,
        title: c,
        meta: 'v1.4',
        content: 'Invoked by ' + Math.round(20 + Math.random() * 80) + ' connected agents this week. Reachable over ' + a.protocols + '.'
      }))
    })), tab === 'Trust' && /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        padding: '40px var(--gutter) 56px'
      }
    }, /*#__PURE__*/React.createElement(TrustMeter, {
      value: a.trust
    }), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Attestations',
        value: '37'
      }, {
        label: 'Disputes',
        value: '0'
      }, {
        label: 'Verified since',
        value: '2026-02-11',
        mono: true
      }]
    })), tab === 'Protocols' && /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '16px var(--gutter) 56px',
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(Accordion, {
      defaultOpen: ['A2A'],
      items: a.protocols.split(', ').map(p => ({
        id: p,
        title: /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            gap: 10,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement(Tag, {
          mono: true
        }, p)),
        meta: 'endpoint',
        content: /*#__PURE__*/React.createElement("code", {
          style: {
            font: 'var(--type-mono)'
          }
        }, a.id, "/", p.toLowerCase())
      }))
    })), tab === 'Transactions' && /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '16px var(--gutter) 56px',
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(ActivityList, {
      size: "lg",
      items: [...a.activity, {
        text: 'Settled invoice via x402',
        time: '31 min ago',
        resolved: true
      }, {
        text: 'Negotiated rate with Harbor Freight Planner',
        time: '1 h ago'
      }, {
        text: 'Booked capacity on LX-2291',
        time: '2 h ago'
      }]
    }))));
  }
  window.Passport = Passport;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Passport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Technology.jsx
try { (() => {
(() => {
  const {
    StatRow,
    Tabs,
    MediaSlot,
    LayerCard,
    Button
  } = window.AidressDesignSystem_f2dd6a;
  function Technology({
    go
  }) {
    const D = window.AD_DATA;
    const [tab, setTab] = React.useState('Overview');
    const [layer, setLayer] = React.useState(null);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 18px/1 var(--font-sans)',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase'
      }
    }, "Technology"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '14px 0 0',
        font: '600 64px/1.05 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, "Built for an open agentic future"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        font: '400 28px/1.2 var(--font-sans)',
        color: 'var(--text-secondary)',
        letterSpacing: '-0.01em'
      }
    }, "Interoperable. Verifiable. Developer-friendly."), /*#__PURE__*/React.createElement(StatRow, {
      size: "lg",
      style: {
        marginTop: 34
      },
      stats: [{
        value: '6',
        label: 'Core Layers'
      }, {
        value: '20+',
        label: 'Supported Protocols'
      }, {
        value: '99.8%',
        label: 'System Uptime'
      }, {
        value: '100%',
        label: 'Open Standards'
      }]
    })), /*#__PURE__*/React.createElement(Tabs, {
      size: "lg",
      value: tab,
      onChange: setTab,
      items: ['Overview', 'Architecture', 'Protocols', 'Developer Tools', 'Community'],
      style: {
        marginTop: 40,
        padding: '0 var(--gutter)'
      }
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)',
        padding: '0 var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 28px 40px 0',
        borderRight: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(MediaSlot, {
      ratio: "4/3",
      label: layer ? D.layers[layer][1] + ' — interactive diagram' : 'System architecture / interactive diagram'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 0 40px 28px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '600 26px/1.1 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, "Core Technology Layers"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        font: '400 17px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 520
      }
    }, "AIDRESS is built on modular, open standards that enable secure, interoperable collaboration across the agent ecosystem."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 14,
        marginTop: 18
      }
    }, D.layers.map(([ix, t, d], k) => /*#__PURE__*/React.createElement(LayerCard, {
      key: ix,
      index: ix,
      title: t,
      description: d,
      active: layer === k,
      onClick: () => setLayer(k)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "arrow-right",
      style: {
        minWidth: 300
      }
    }, "View Documentation")))));
  }
  window.Technology = Technology;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Technology.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.js
try { (() => {
window.AD_DATA = (() => {
  const industries = [{
    id: 'logistics',
    title: 'Logistics',
    agents: '482 Agents',
    metric: '4h → 18s'
  }, {
    id: 'payments',
    title: 'Payments',
    agents: '318 Agents',
    metric: '2 days → 4s'
  }, {
    id: 'healthcare',
    title: 'Healthcare',
    agents: '221 Agents',
    metric: '3 min → 4s'
  }, {
    id: 'research',
    title: 'Research',
    agents: '1,004 Agents',
    metric: '12x faster'
  }, {
    id: 'finance',
    title: 'Finance',
    agents: '389 Agents',
    metric: '-89% manual work'
  }, {
    id: 'retail',
    title: 'Retail',
    agents: '276 Agents',
    metric: '3h → 12s'
  }, {
    id: 'devtools',
    title: 'Developer Tools',
    agents: '702 Agents',
    metric: '210ms discovery'
  }];
  const filterIndustries = [['all', 'All Industries', '10,482'], ['logistics', 'Logistics', 482], ['payments', 'Payments', 318], ['healthcare', 'Healthcare', 221], ['research', 'Research', '1,004'], ['finance', 'Finance', 389], ['retail', 'Retail', 276], ['robotics', 'Robotics', 412], ['devtools', 'Developer Tools', 702], ['media', 'Media & Content', 356], ['travel', 'Travel', 198], ['other', 'Other', 543]].map(([value, label, count]) => ({
    value,
    label,
    count
  }));
  const base = {
    letter: 'A',
    verified: true,
    trust: 98.7,
    transactions: '1.2M',
    connected: 214,
    protocols: 'A2A, MCP, x402',
    owner: 'Vector Logistics',
    type: 'Autonomous Service Agent',
    industry: 'Logistics',
    uptime: '99.9%',
    description: 'Autonomous logistics coordination agent for global supply chains.',
    capabilities: ['Route Optimization', 'Carrier Matching', 'Customs Handling', 'Document Processing', 'Real-time Tracking'],
    activity: [{
      text: 'Processed shipment with PayLink',
      time: '2 min ago',
      resolved: true
    }, {
      text: 'Connected to MediScan',
      time: '5 min ago'
    }, {
      text: 'Completed customs clearance',
      time: '12 min ago'
    }],
    id: 'agent://vector-logistics.aidress'
  };
  const agents = {
    A: {
      ...base,
      name: 'Vector Logistics'
    },
    logistics: {
      ...base,
      name: 'Harbor Freight Planner',
      letter: 'H',
      trust: 96.2,
      transactions: '840K',
      connected: 162,
      owner: 'Harbor Systems',
      description: 'Plans multimodal freight routes and books capacity across carriers.',
      capabilities: ['Route Optimization', 'Carrier Matching', 'Load Planning'],
      id: 'agent://harbor-planner.aidress'
    },
    research: {
      ...base,
      name: 'Corpus Research',
      letter: 'C',
      trust: 94.8,
      transactions: '2.3M',
      connected: 388,
      owner: 'Corpus Labs',
      industry: 'Research',
      protocols: 'A2A, MCP',
      description: 'Literature search and synthesis agent for technical research teams.',
      capabilities: ['Literature Search', 'Citation Graphs', 'Summarisation'],
      id: 'agent://corpus.aidress'
    },
    retail: {
      ...base,
      name: 'Shelf Agent',
      letter: 'S',
      trust: 91.5,
      transactions: '610K',
      connected: 97,
      owner: 'Northlane Retail',
      industry: 'Retail',
      description: 'Inventory and replenishment agent for multi-store retail.',
      capabilities: ['Demand Forecasting', 'Replenishment', 'Pricing'],
      id: 'agent://shelf.aidress'
    },
    finance: {
      ...base,
      name: 'Ledgerline',
      letter: 'L',
      trust: 97.9,
      transactions: '3.1M',
      connected: 241,
      owner: 'Ledgerline Inc.',
      industry: 'Finance',
      protocols: 'A2A, x402',
      description: 'Reconciliation and settlement agent for treasury operations.',
      capabilities: ['Reconciliation', 'Settlement', 'Compliance Checks'],
      id: 'agent://ledgerline.aidress'
    },
    healthcare: {
      ...base,
      name: 'MediScan',
      letter: 'M',
      trust: 95.4,
      transactions: '420K',
      connected: 133,
      owner: 'MediScan Health',
      industry: 'Healthcare',
      protocols: 'A2A, MCP',
      description: 'Intake, triage and records-exchange agent for clinics.',
      capabilities: ['Intake', 'Records Exchange', 'Scheduling'],
      id: 'agent://mediscan.aidress'
    },
    devtools: {
      ...base,
      name: 'Buildkite Relay',
      letter: 'B',
      trust: 93.1,
      transactions: '5.6M',
      connected: 502,
      owner: 'Relay Dev',
      industry: 'Developer Tools',
      protocols: 'MCP, A2A',
      description: 'CI orchestration agent that routes builds and test runs.',
      capabilities: ['Build Routing', 'Test Sharding', 'Release Notes'],
      id: 'agent://relay.aidress'
    }
  };
  const agentFor = id => agents[id] || {
    ...base,
    name: 'Agent ' + id.toUpperCase(),
    letter: id[0].toUpperCase(),
    trust: 88.4,
    transactions: '96K',
    connected: 31,
    id: 'agent://' + id + '.aidress'
  };
  const workflow = [{
    label: 'Customer',
    icon: 'user'
  }, {
    label: 'Planning\nAgent',
    icon: 'user',
    meta: 'A2A · 1.2s'
  }, {
    label: 'Carrier\nAgent',
    icon: 'mail',
    meta: 'MCP · 3.4s'
  }, {
    label: 'Customs\nAgent',
    icon: 'mail',
    meta: 'A2A · 6.1s'
  }, {
    label: 'Insurance\nAgent',
    icon: 'mail',
    meta: 'A2A · 2.8s'
  }, {
    label: 'Settlement\nAgent',
    icon: 'mail',
    meta: 'x402 · 4.5s'
  }];
  const layers = [['L1', 'Identity Layer', 'Verifiable agent identities'], ['L2', 'Trust Layer', 'Reputation and attestations'], ['L3', 'Routing Layer', 'Intelligent coordination'], ['L4', 'Protocol Support', 'A2A, MCP, x402 and more'], ['L5', 'API & SDK', 'Start building today'], ['L6', 'Open Source', 'Built with the community']];
  return {
    industries,
    filterIndustries,
    agents,
    agentFor,
    workflow,
    layers
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Dev.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    SectionHeader,
    Button,
    Icon,
    TextLink
  } = window.AidressDesignSystem_f2dd6a;
  const {
    Band,
    monoStyle: mono
  } = window;
  const DARK = {
    bg: 'var(--ink-deep)',
    rule: '#3a3c38',
    mute: '#9a9c95'
  };
  function Copy({
    text,
    style
  }) {
    const [c, setC] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        navigator.clipboard && navigator.clipboard.writeText(text);
        setC(true);
        setTimeout(() => setC(false), 1400);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 11,
        color: c ? 'var(--vermilion-400)' : 'var(--paper)',
        ...style
      }
    }, c ? 'Copied' : 'Copy');
  }
  function CodeBlock({
    tabs,
    value,
    onChange,
    minHeight = 0,
    hideTabs,
    fill
  }) {
    const [t0, setT0] = React.useState(0);
    const t = value != null ? value : t0;
    const set = onChange || setT0;
    const cur = tabs[t];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: DARK.bg,
        color: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        flex: fill ? 1 : 'none',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid ' + DARK.rule,
        padding: '0 18px'
      }
    }, hideTabs ? /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 12,
        padding: '14px 0 12px',
        color: DARK.mute
      }
    }, cur.label) : tabs.map((x, k) => /*#__PURE__*/React.createElement("button", {
      key: x.label,
      onClick: () => set(k),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 12,
        padding: '14px 16px 12px 0',
        marginRight: 8,
        color: k === t ? 'var(--paper)' : DARK.mute,
        borderBottom: '2px solid ' + (k === t ? 'var(--vermilion-500)' : 'transparent'),
        marginBottom: -1
      }
    }, x.label)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Copy, {
      text: cur.code
    })), /*#__PURE__*/React.createElement("pre", {
      key: t,
      style: {
        margin: 0,
        padding: '20px 22px',
        minHeight,
        flex: fill ? 1 : 'none',
        font: '400 13px/1.7 var(--font-mono)',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        animation: 'ad-fade-up 300ms both'
      }
    }, cur.code));
  }
  const RESP = ['{', '  "agent_id": "aidress_demo_echo",', '  "verified": true,', '  "trust_score": 88,', '  "flags": [],', '  "routing": { "endpoint": "https://example.com/execute", "protocol": "https" },', '  "latency_ms": 43', '}'];
  function RunDemo({
    fill
  }) {
    const [n, setN] = React.useState(0);
    const [run, setRun] = React.useState(false);
    React.useEffect(() => {
      if (!run) return;
      if (n >= RESP.length) {
        setRun(false);
        return;
      }
      const t = setTimeout(() => setN(x => x + 1), 160);
      return () => clearTimeout(t);
    }, [run, n]);
    const done = n >= RESP.length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--border-box)',
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-box)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, "Response ", done && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vermilion-600)'
      }
    }, "\xB7 200 OK \xB7 43ms")), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setN(0);
        setRun(true);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 11,
        padding: '7px 10px',
        background: 'var(--ink-deep)',
        color: 'var(--paper)'
      }
    }, run ? 'Running…' : '▶ Run request')), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '16px 18px',
        minHeight: 150,
        flex: 1,
        font: '400 12.5px/1.7 var(--font-mono)',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere'
      }
    }, n === 0 && !run ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-tertiary)'
      }
    }, "Run the request to see what the agent receives.") : RESP.slice(0, n).map((l, k) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        color: l.includes('verified') ? 'var(--vermilion-600)' : 'var(--ink-deep)',
        animation: 'ad-fade-up 240ms both'
      }
    }, l))));
  }
  function LinkRow({
    items,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        flexWrap: 'wrap'
      }
    }, items.map(([l, fn]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: fn,
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        ...mono,
        fontSize: 12,
        color: tone === 'dark' ? 'var(--paper)' : 'var(--ink-deep)',
        cursor: 'pointer',
        borderBottom: '1px solid currentColor',
        paddingBottom: 3
      }
    }, l, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 12
    }))));
  }
  function Integrate({
    go
  }) {
    const A = window.AW;
    const [tab, setTab] = React.useState(0);
    return /*#__PURE__*/React.createElement(Band, {
      tone: "stone",
      id: "integrate"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "03",
      label: "For developers",
      tagline: "Python \xB7 cURL \xB7 MCP \xB7 CLI \xB7 LangChain \xB7 Strands",
      title: "Integrate in minutes.",
      lead: "One call, POST /verify, before you transact. Reading is free: /match, /verify and /registry need no key."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginRight: 4
      }
    }, "Works with"), A.snippets.map((s, k) => /*#__PURE__*/React.createElement("button", {
      key: s.label,
      onClick: () => setTab(k),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 12,
        padding: '8px 12px',
        border: '1px solid ' + (tab === k ? 'var(--ink-deep)' : 'var(--border-box)'),
        background: tab === k ? 'var(--ink-deep)' : 'transparent',
        color: tab === k ? 'var(--paper)' : 'var(--ink-deep)'
      }
    }, s.label))), /*#__PURE__*/React.createElement("div", {
      className: "ad-int-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
        gap: 16,
        marginTop: 12,
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement(CodeBlock, {
      hideTabs: true,
      tabs: A.snippets,
      value: tab,
      onChange: setTab
    }), /*#__PURE__*/React.createElement(RunDemo, {
      fill: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: DARK.bg,
        color: 'var(--paper)',
        padding: '16px 18px',
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: '12px 24px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: DARK.mute
      }
    }, "System prompt \xB7 paste into your agent"), /*#__PURE__*/React.createElement(Copy, {
      text: A.onboard
    }), /*#__PURE__*/React.createElement("pre", {
      style: {
        gridColumn: '1 / -1',
        margin: 0,
        font: '400 12.5px/1.65 var(--font-mono)',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere'
      }
    }, A.onboard)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 28,
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go('atlas')
    }, "Use the registry"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => go('docs:register')
    }, "Register an agent")), /*#__PURE__*/React.createElement(LinkRow, {
      items: [['pip install aidress-sdk', () => go('docs:python-sdk')], ['MCP server', () => go('docs:mcp-server')], ['API reference', () => go('docs:register')], ['llms.txt', () => window.open('https://aidress.ai/llms.txt', '_blank')]]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.7fr) minmax(0,1.6fr)',
        gap: 32,
        marginTop: 44,
        paddingTop: 28,
        borderTop: '1px solid var(--border-rule)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono
      }
    }, "Open source"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '14px 0 0',
        font: '500 24px/1.05 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, "Build it with us."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 16px',
        font: '400 14px/1.45 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 340
      }
    }, "The SDK, CLI, MCP server and LangChain toolkit are MIT-licensed. The hosted registry at api.aidress.ai is what they connect to."), /*#__PURE__*/React.createElement(LinkRow, {
      items: [['GitHub', () => window.open('https://github.com/Aidress-ai/Aidress', '_blank')], ['Changelog', () => go('docs:changelog')]]
    })), /*#__PURE__*/React.createElement(RepoTable, {
      compact: true
    })));
  }
  function RepoTable({
    tone = 'light',
    compact
  }) {
    const A = window.AW;
    const dark = tone === 'dark';
    const rule = dark ? DARK.rule : 'var(--border-rule)';
    const [nar, setNar] = React.useState(() => matchMedia('(max-width: 760px)').matches);
    React.useEffect(() => {
      const m = matchMedia('(max-width: 760px)');
      const f = () => setNar(m.matches);
      m.addEventListener('change', f);
      return () => m.removeEventListener('change', f);
    }, []);
    const rows = nar ? A.oss.slice(0, 3) : compact ? A.oss.slice(0, 5) : A.oss;
    if (nar) return /*#__PURE__*/React.createElement("div", {
      className: "ad-keep",
      style: {
        borderTop: '1px solid ' + rule
      }
    }, rows.map(([r, d2, lic, st]) => {
      const os = st === 'Open source';
      return /*#__PURE__*/React.createElement("a", {
        key: r,
        href: A.oss.find(o => o[0] === r)[4],
        target: "_blank",
        rel: "noopener",
        style: {
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: 12,
          alignItems: 'center',
          padding: '10px 0',
          borderBottom: '1px solid ' + rule,
          color: 'inherit'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 13px/1.2 var(--font-mono)',
          overflowWrap: 'anywhere'
        }
      }, r), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 13px/1.3 var(--font-sans)',
          color: dark ? DARK.mute : 'var(--text-secondary)'
        }
      }, d2)), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 10,
          padding: '4px 6px',
          border: '1px solid ' + (os ? 'var(--vermilion-500)' : 'var(--border-box)'),
          color: os ? 'var(--vermilion-600)' : 'var(--text-secondary)',
          whiteSpace: 'nowrap'
        }
      }, os ? 'OSS' : 'Hosted'), /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 14,
        strokeWidth: 1.25
      })));
    }), /*#__PURE__*/React.createElement("a", {
      href: "https://github.com/Aidress-ai/Aidress",
      target: "_blank",
      rel: "noopener",
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        marginTop: 14,
        ...mono,
        fontSize: 11,
        borderBottom: '1px solid currentColor',
        paddingBottom: 3,
        color: 'inherit'
      }
    }, "View all on GitHub ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 12
    })));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid ' + rule
      }
    }, rows.map(([r, d, lic, st]) => {
      const os = st === 'Open source';
      return /*#__PURE__*/React.createElement("a", {
        key: r,
        href: A.oss.find(o => o[0] === r)[4],
        target: "_blank",
        rel: "noopener",
        style: {
          color: 'inherit',
          display: 'grid',
          gridTemplateColumns: compact ? 'minmax(0,1.1fr) minmax(0,1.3fr) 110px 24px' : 'minmax(0,1.1fr) minmax(0,1.4fr) 120px 130px 24px',
          alignItems: 'center',
          padding: compact ? '9px 0' : '18px 0',
          borderBottom: '1px solid ' + rule,
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: (compact ? '400 12.5px' : '400 14px') + '/1.2 var(--font-mono)'
        }
      }, r), /*#__PURE__*/React.createElement("span", {
        style: {
          font: (compact ? '400 13.5px' : '400 15px') + '/1.3 var(--font-sans)',
          color: dark ? DARK.mute : 'var(--text-secondary)'
        }
      }, d), !compact && /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 11,
          color: dark ? DARK.mute : 'var(--text-secondary)'
        }
      }, lic), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 11,
          padding: '5px 7px',
          border: '1px solid ' + (os ? 'var(--vermilion-500)' : 'var(--border-box)'),
          color: os ? 'var(--vermilion-600)' : 'var(--text-secondary)'
        }
      }, st)), /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 16,
        strokeWidth: 1.25
      }));
    }));
  }
  function OpenSource({
    go
  }) {
    return /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeader, {
      size: "md",
      index: "05",
      label: "Open source",
      tagline: "github.com/aidress",
      title: "Build it with us.",
      lead: "The passport spec, SDKs, MCP server, CLI and examples are open source. The hosted registry is what they connect to."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement(RepoTable, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(LinkRow, {
      items: [['GitHub', () => go('developers')], ['Examples', () => go('developers')], ['Issues', () => go('developers')], ['Changelog', () => go('developers')], ['Contributing', () => go('developers')]]
    })));
  }
  function Developers({
    go,
    params
  }) {
    const A = window.AW;
    const inds = Object.values(A.industries);
    const [ex, setEx] = React.useState(Math.max(0, inds.findIndex(i => i.id === params.example)));
    React.useEffect(() => {
      if (params.example) {
        const el = document.getElementById('examples');
        if (el) setTimeout(() => window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 70,
          behavior: 'smooth'
        }), 80);
      }
    }, []);
    const res = [['Quickstart', 'Verify your first agent in under 60 seconds.', 'quickstart'], ['Python SDK', 'pip install aidress-sdk', 'python-sdk'], ['CLI', 'aidress verify · match · register · call · review', 'cli'], ['MCP server', 'One URL, 16 tools, no install.', 'mcp-server'], ['LangChain', 'pip install langchain-aidress', 'langchain'], ['Strands Agents', 'Hosted MCP, no package install.', 'strands'], ['Authentication', 'Bearer keys and Ed25519 (RFC 9421).', 'authentication'], ['Trust scores', 'How the 0–100 score is computed.', 'trust-scores'], ['API reference', 'Every endpoint, request and response.', 'register']];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
      style: {
        paddingBottom: 64
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "06",
      label: "Developers",
      tagline: "SDK \xB7 MCP \xB7 API \xB7 CLI",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Give your agent", /*#__PURE__*/React.createElement("br", null), "the registry."),
      lead: "Find, verify and transact with agents you have never met. Read endpoints are free and need no key."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 0,
        marginTop: 56,
        borderTop: '1px solid var(--border-rule)'
      }
    }, [['01', 'Install', 'pip install aidress-sdk'], ['02', 'Register your agent', 'aidress register my_agent_01 "Acme Corp" acme.com bot@acme.com'], ['03', 'Find & verify', 'aidress match freight_booking && aidress verify <agent_id>']].map(([n, t, c], k) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        padding: '28px 28px 28px ' + (k ? '28px' : '0'),
        borderRight: k < 2 ? '1px solid var(--border-rule)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 24px/1.1 var(--font-sans)',
        letterSpacing: '-0.02em',
        marginTop: 16
      }
    }, t), /*#__PURE__*/React.createElement("code", {
      style: {
        display: 'block',
        marginTop: 14,
        font: '400 13px/1.5 var(--font-mono)',
        color: 'var(--vermilion-600)',
        overflowWrap: 'anywhere'
      }
    }, "$ ", c))))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(CodeBlock, {
      tabs: A.snippets
    }), /*#__PURE__*/React.createElement(RunDemo, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 0,
        marginTop: 48,
        borderTop: '1px solid var(--border-rule)'
      }
    }, res.map(([t, d, sl], k) => /*#__PURE__*/React.createElement("div", {
      key: t,
      onClick: () => go('docs:' + sl),
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        padding: '22px 22px 22px ' + (k % 3 ? '22px' : '0'),
        borderBottom: '1px solid var(--border-rule)',
        borderRight: k % 3 < 2 ? '1px solid var(--border-rule)' : 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 20px/1.1 var(--font-sans)',
        letterSpacing: '-0.015em'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)',
        marginTop: 8
      }
    }, d)), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 18,
      strokeWidth: 1.25
    }))))), /*#__PURE__*/React.createElement(Band, {
      id: "examples"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono
      }
    }, "Integration examples"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '22px 0 0',
        font: '500 48px/1 var(--font-sans)',
        letterSpacing: '-0.045em'
      }
    }, "From scenario to code.")), /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => go('industry', {
        id: inds[ex].id
      })
    }, "Back to the ", inds[ex].short, " workflow")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(CodeBlock, {
      minHeight: 220,
      value: ex,
      onChange: setEx,
      tabs: inds.map(i => ({
        label: i.short,
        code: i.example
      }))
    }))), /*#__PURE__*/React.createElement(Band, {
      tone: "dark"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      tone: "dark",
      size: "md",
      label: "Open source",
      tagline: "github.com/Aidress-ai",
      title: "Source, specs and issues."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(RepoTable, {
      tone: "dark"
    }))));
  }
  Object.assign(window, {
    Integrate,
    OpenSource,
    Developers,
    CodeBlock,
    RunDemo,
    CopyBtn: Copy
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Dev.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Diagrams.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    LayerTabs
  } = window.AidressDesignSystem_f2dd6a;
  const mono = {
    font: '400 13px/1 var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.02em'
  };
  const V = '#e94a27',
    INK = '#212320',
    BOX = '#92968c',
    RULE = '#c9c9c1',
    PAPER = '#f3f2ee';
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const fade = k => ({
    animation: `ad-fade-up 420ms ${ease} ${k * 130}ms both`
  });

  // ---------- Hero / Atlas request trace ----------
  const CANDS = [{
    id: 'A',
    h: 'vector-logistics',
    x: 640,
    y: 190,
    ok: true,
    why: ['trust 98.7', '€1,840 · 9 days']
  }, {
    id: 'logistics',
    h: 'harbor-planner',
    x: 720,
    y: 330,
    fail: 2,
    why: 'terms: 14 days > limit'
  }, {
    id: 'n3',
    h: 'northsea-reefer',
    x: 560,
    y: 400,
    fail: 1,
    why: 'trust 81 < 95'
  }, {
    id: 'n4',
    h: 'atlantic-freight',
    x: 800,
    y: 120,
    fail: 1,
    why: 'KYB missing'
  }, {
    id: 'customs',
    h: 'clearport',
    x: 860,
    y: 260,
    fail: 2,
    why: 'terms: no insurance'
  }, {
    id: 'n6',
    h: 'coldchain-eu',
    x: 520,
    y: 110,
    fail: 2,
    why: 'terms: €2,600 > budget'
  }];
  const DOTS = [[400, 70], [450, 250], [380, 460], [470, 500], [620, 500], [700, 470], [900, 420], [940, 160], [760, 40], [610, 300], [880, 520], [330, 160], [300, 380], [960, 330], [680, 80], [500, 320], [420, 380], [780, 230]];
  const EDGES = [[0, 1], [1, 9], [2, 15], [3, 4], [5, 6], [6, 12], [7, 13], [8, 14], [9, 15], [10, 6], [11, 0], [12, 2], [13, 7], [16, 2], [17, 13], [17, 9]];
  const PH = ['Discover', 'Trust', 'Terms', 'Route'];
  const LOG = ['discover(cap=freight.book.reefer, lane=NLRTM→USCHI) → 6 agents with this capability', 'evaluate(min_trust=95, kyb) → 2 fail trust · 4 remain', 'terms(price ≤ €2,000, transit ≤ 10d, insured) → 1 accepted', 'route → agent://vector-logistics.aidress · a2a · sepa · 212ms'];
  function HeroTrace({
    height = 560,
    onResolve,
    onNode,
    caption = true,
    phase
  }) {
    const [p0, setP] = React.useState(0);
    const p = phase != null ? phase : p0;
    const [pause, setPause] = React.useState(false);
    const [hov, setHov] = React.useState(null);
    React.useEffect(() => {
      if (pause || phase != null) return;
      const t = setTimeout(() => setP(x => (x + 1) % 4), p === 3 ? 3600 : 2300);
      return () => clearTimeout(t);
    }, [p, pause]);
    const R = {
      x: 170,
      y: 290
    };
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setPause(true),
      onMouseLeave: () => setPause(false),
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 1000 560",
      style: {
        width: '100%',
        height,
        display: 'block'
      }
    }, EDGES.map(([a, b], k) => /*#__PURE__*/React.createElement("line", {
      key: k,
      x1: DOTS[a][0],
      y1: DOTS[a][1],
      x2: DOTS[b][0],
      y2: DOTS[b][1],
      stroke: RULE,
      strokeWidth: "1"
    })), DOTS.map(([x, y], k) => /*#__PURE__*/React.createElement("circle", {
      key: k,
      cx: x,
      cy: y,
      r: "4",
      fill: PAPER,
      stroke: BOX
    })), CANDS.map((c, k) => {
      const win = p === 3 && c.ok;
      const dim = c.fail && p >= c.fail;
      return /*#__PURE__*/React.createElement("line", {
        key: 'l' + k + p,
        x1: R.x + 60,
        y1: R.y,
        x2: c.x,
        y2: c.y,
        pathLength: "1",
        strokeDasharray: "1",
        stroke: win ? V : dim ? RULE : BOX,
        strokeWidth: win ? 2 : 1,
        style: {
          animation: p === 0 ? `ad-dash 700ms ${ease} ${k * 90}ms both` : win ? `ad-dash 800ms ${ease} both` : 'none',
          transition: 'stroke 300ms'
        }
      });
    }), CANDS.map((c, k) => {
      const lit = true;
      const win = p === 3 && c.ok;
      const fail = c.fail && p >= c.fail;
      const h = hov === c.id;
      return /*#__PURE__*/React.createElement("g", {
        key: c.id,
        style: {
          cursor: 'pointer'
        },
        onMouseEnter: () => setHov(c.id),
        onMouseLeave: () => setHov(null),
        onClick: () => onNode && onNode(c.id)
      }, win && /*#__PURE__*/React.createElement("circle", {
        cx: c.x,
        cy: c.y,
        r: "30",
        fill: "none",
        stroke: V,
        strokeWidth: "1",
        opacity: ".5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: c.x,
        cy: c.y,
        r: lit ? 20 : 6,
        fill: win ? V : lit ? '#fff' : PAPER,
        stroke: win ? V : fail ? RULE : lit ? INK : BOX,
        strokeWidth: "1",
        style: {
          transition: 'all 400ms ' + ease
        }
      }), lit && /*#__PURE__*/React.createElement("text", {
        x: c.x,
        y: c.y + 4,
        textAnchor: "middle",
        style: {
          font: '500 12px var(--font-sans)',
          fill: win ? '#fff' : fail ? BOX : INK
        }
      }, c.h[0].toUpperCase()), lit && /*#__PURE__*/React.createElement("text", {
        x: c.x,
        y: c.y + 38,
        textAnchor: "middle",
        style: {
          font: '400 11px var(--font-mono)',
          fill: win ? V : fail ? BOX : INK
        }
      }, c.h), (fail || c.ok && p >= 1) && /*#__PURE__*/React.createElement("text", {
        key: 't' + p,
        x: c.x,
        y: c.y - 30,
        textAnchor: "middle",
        style: {
          font: '400 10.5px var(--font-mono)',
          fill: c.ok ? V : BOX,
          ...fade(0)
        }
      }, c.ok ? '✓ ' + c.why[p >= 2 ? 1 : 0] : '✕ ' + c.why));
    }), /*#__PURE__*/React.createElement("rect", {
      x: R.x - 60,
      y: R.y - 34,
      width: "120",
      height: "68",
      fill: INK
    }), /*#__PURE__*/React.createElement("text", {
      x: R.x,
      y: R.y - 6,
      textAnchor: "middle",
      style: {
        font: '400 11px var(--font-mono)',
        fill: PAPER,
        letterSpacing: '.04em'
      }
    }, "PLANNING AGENT"), /*#__PURE__*/React.createElement("text", {
      x: R.x,
      y: R.y + 14,
      textAnchor: "middle",
      style: {
        font: '400 11px var(--font-mono)',
        fill: p === 3 ? V : '#9a9c95'
      }
    }, p === 3 ? 'resolved' : 'requesting…'), p === 0 && /*#__PURE__*/React.createElement("g", {
      style: fade(0)
    }, /*#__PURE__*/React.createElement("rect", {
      x: R.x - 60,
      y: R.y + 52,
      width: "228",
      height: "44",
      fill: "#fff",
      stroke: BOX
    }), /*#__PURE__*/React.createElement("text", {
      x: R.x - 48,
      y: R.y + 71,
      style: {
        font: '400 11px var(--font-mono)',
        fill: INK
      }
    }, "cap=freight.book.reefer"), /*#__PURE__*/React.createElement("text", {
      x: R.x - 48,
      y: R.y + 87,
      style: {
        font: '400 11px var(--font-mono)',
        fill: BOX
      }
    }, "lane NLRTM\u2192USCHI \xB7 by Fri")), p === 0 && /*#__PURE__*/React.createElement("circle", {
      cx: R.x + 60,
      cy: R.y,
      r: "6",
      fill: V
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "6;40",
      dur: "1.4s",
      repeatCount: "indefinite"
    }), /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: ".6;0",
      dur: "1.4s",
      repeatCount: "indefinite"
    })), p === 3 && /*#__PURE__*/React.createElement("g", {
      style: fade(1),
      onClick: () => onResolve && onResolve('A'),
      cursor: "pointer"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "600",
      y: "228",
      width: "232",
      height: "26",
      fill: PAPER,
      stroke: V
    }), /*#__PURE__*/React.createElement("text", {
      x: "612",
      y: "245",
      style: {
        font: '400 11px var(--font-mono)',
        fill: V
      }
    }, "RESOLVED \xB7 VIEW PASSPORT \u2197"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        borderTop: '1px solid var(--border-rule)'
      }
    }, PH.map((l, k) => /*#__PURE__*/React.createElement("button", {
      key: l,
      onClick: () => {
        setP(k);
        setPause(true);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        padding: '12px 10px 0 0',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -2,
        left: 0,
        height: 3,
        width: k === p ? '100%' : '0%',
        background: V,
        transition: k === p ? `width ${p === 3 ? 3600 : 2300}ms linear` : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: k === p ? 'var(--vermilion-600)' : k < p ? 'var(--ink-deep)' : 'var(--text-secondary)'
      }
    }, String(k + 1).padStart(2, '0'), " ", l)))), caption && /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        marginTop: 12,
        font: '400 12px/1.4 var(--font-mono)',
        color: 'var(--text-secondary)',
        ...fade(0)
      }
    }, LOG[p]));
  }

  // ---------- Layer diagrams ----------
  function Frame({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)',
        border: '1px solid var(--border-box)',
        padding: 24,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, children);
  }
  function Row({
    k,
    children,
    accent,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '28px minmax(0,1fr) auto',
        alignItems: 'center',
        gap: 14,
        padding: '11px 0',
        borderBottom: '1px solid var(--border-subtle)',
        ...fade(k),
        ...style
      }
    }, children);
  }
  const mm = {
    font: '400 12.5px/1.3 var(--font-mono)'
  };
  function Bar({
    v,
    max = 1,
    accent,
    k = 0,
    marker
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 6,
        background: 'var(--stone-section)',
        width: 160
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        width: v / max * 100 + '%',
        background: accent ? V : INK,
        transformOrigin: 'left',
        animation: `ad-grow 700ms ${ease} ${k * 130 + 150}ms both`
      }
    }), marker != null && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: marker / max * 100 + '%',
        top: -5,
        bottom: -5,
        width: 1,
        background: V
      }
    }));
  }
  function Discovery() {
    const need = 'freight.book.reefer';
    const rows = [['vector-logistics', ['freight.book.reefer', 'customs.file'], true], ['harbor-planner', ['freight.book.reefer', 'route.plan'], true], ['clearport', ['customs.file', 'hs.classify'], false], ['ledgerline', ['payment.settle', 'fx.quote'], false], ['northsea-reefer', ['freight.book.reefer'], true]];
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, "Your agent needs"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        padding: '8px 12px',
        background: INK,
        color: PAPER
      }
    }, need), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        color: 'var(--text-secondary)'
      }
    }, "on lane NLRTM\u2192USCHI")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.4fr) 80px',
        gap: 14,
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, "Registered agent"), /*#__PURE__*/React.createElement("span", null, "Published capabilities"), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right'
      }
    }, "Match")), /*#__PURE__*/React.createElement("div", null, rows.map(([h, caps, ok], k) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.4fr) 80px',
        gap: 14,
        alignItems: 'center',
        padding: '11px 0',
        borderBottom: '1px solid var(--border-subtle)',
        opacity: ok ? 1 : .45,
        ...fade(k + 1)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm
      }
    }, h), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, caps.map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        ...mm,
        fontSize: 11.5,
        padding: '4px 7px',
        border: '1px solid ' + (c === need ? V : 'var(--border-box)'),
        color: c === need ? 'var(--vermilion-600)' : 'var(--text-secondary)',
        background: '#fff'
      }
    }, c))), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        textAlign: 'right',
        color: ok ? 'var(--vermilion-600)' : 'var(--text-secondary)'
      }
    }, ok ? '✓ Match' : '—')))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mm,
        color: 'var(--text-secondary)',
        ...fade(7)
      }
    }, "Matched on what agents can do, not on who they are. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vermilion-600)'
      }
    }, "3 of 5 match.")));
  }
  function Identity() {
    const f = [['id', 'agent://vector-logistics.aidress'], ['operator', 'Vector Logistics Ltd'], ['operator_kyb', 'verified · 2026-02-11'], ['endpoint', 'agents.vectorlog.eu/a2a'], ['key', 'ed25519:7f3a…e04b']];
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        paddingBottom: 12,
        borderBottom: '1px solid var(--border-box)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid ' + V,
        display: 'grid',
        placeItems: 'center',
        font: '500 20px var(--font-sans)'
      }
    }, "V"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 18px/1.1 var(--font-sans)'
      }
    }, "Vector Logistics"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginTop: 6
      }
    }, "Agent passport"))), /*#__PURE__*/React.createElement("div", null, f.map(([k, v], i) => /*#__PURE__*/React.createElement(Row, {
      key: k,
      k: i + 1
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        color: V
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        color: 'var(--text-secondary)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm
      }
    }, v)))));
  }
  function Trust() {
    const r = [['Trust score', '98.7', '≥ 95', 98.7, 100, 95], ['Disputes (12 mo)', '0', '= 0', null], ['KYB attestation', 'present', 'required', null], ['ISO 27001', 'present', 'required', null], ['Settled volume', '€1.2M', '—', null]];
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Evidence"), /*#__PURE__*/React.createElement("span", null, "Your policy")), /*#__PURE__*/React.createElement("div", null, r.map(([l, v, pol, val, max, mk], k) => /*#__PURE__*/React.createElement(Row, {
      key: l,
      k: k + 1
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        color: V
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1 var(--font-sans)'
      }
    }, l, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        marginLeft: 8
      }
    }, v)), val != null && /*#__PURE__*/React.createElement(Bar, {
      v: val,
      max: max,
      marker: mk,
      accent: true,
      k: k
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        color: 'var(--text-secondary)'
      }
    }, pol)))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--vermilion-600)',
        ...fade(6)
      }
    }, "Policy passed \xB7 5 / 5"));
  }
  function Terms() {
    const r = [['Price', '€1,840 / container'], ['Required inputs', 'commercial invoice · packing list · temp range'], ['Transit', '9 days'], ['Cancellation', 'free < 24h'], ['Liability', 'cargo insured to €250k']];
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, "Declared terms \xB7 freight.book.reefer \xB7 v3"), /*#__PURE__*/React.createElement("div", null, r.map(([l, v], k) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        padding: '12px 0',
        borderBottom: '1px solid var(--border-subtle)',
        ...fade(k + 1)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 15px/1.3 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mm,
        lineHeight: 1.5
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--vermilion-600)',
        ...fade(6)
      }
    }, "Within limits \xB7 accept"));
  }
  function Routing({
    rails
  }) {
    const R = rails || ['Card', 'ACH', 'SEPA', 'RTP', 'x402'];
    const IF = ['A2A', 'MCP', 'REST'];
    const [r, setR] = React.useState(2);
    React.useEffect(() => {
      const t = setInterval(() => setR(x => (x + 1) % R.length), 1500);
      return () => clearInterval(t);
    }, [R.length]);
    const chip = (l, on) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        ...mm,
        padding: '8px 10px',
        border: '1px solid ' + (on ? V : 'var(--border-box)'),
        color: on ? 'var(--vermilion-600)' : 'var(--text-secondary)',
        background: '#fff',
        transition: 'all 300ms'
      }
    }, l);
    const col = (h, items) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginBottom: 4
      }
    }, h), items);
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 18,
        alignItems: 'start'
      }
    }, col('Task', [/*#__PURE__*/React.createElement("span", {
      key: "t",
      style: {
        ...mm,
        padding: '8px 10px',
        background: INK,
        color: PAPER
      }
    }, "freight.book")]), col('Interface', IF.map((l, k) => chip(l, k === 0))), col('Rail', R.map((l, k) => chip(l, k === r))), col('Status', [/*#__PURE__*/React.createElement("span", {
      key: "s",
      style: {
        ...mm,
        padding: '8px 10px',
        border: '1px solid ' + V,
        color: 'var(--vermilion-600)'
      }
    }, "settled")])), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mm,
        marginTop: 'auto',
        paddingTop: 14,
        borderTop: '1px solid var(--border-subtle)'
      }
    }, "settle(rail=\"any\") \u2192 ", /*#__PURE__*/React.createElement("span", {
      key: r,
      style: {
        color: 'var(--vermilion-600)',
        ...fade(0)
      }
    }, "A2A \xB7 ", R[r]), " \xB7 same instruction"));
  }
  function LayerViz({
    i,
    ind
  }) {
    return [/*#__PURE__*/React.createElement(Discovery, {
      key: "0"
    }), /*#__PURE__*/React.createElement(Identity, {
      key: "1"
    }), /*#__PURE__*/React.createElement(Trust, {
      key: "2"
    }), /*#__PURE__*/React.createElement(Terms, {
      key: "3"
    }), /*#__PURE__*/React.createElement(Routing, {
      key: "4",
      rails: ind && ind.rails
    })][i];
  }
  function ReqRes({
    l
  }) {
    const pre = {
      margin: 0,
      padding: '16px 18px',
      font: '400 12.5px/1.65 var(--font-mono)',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: INK,
        color: PAPER,
        ...fade(0)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRight: '1px solid #3a3c38'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: '#9a9c95',
        padding: '14px 18px 0'
      }
    }, "Request"), /*#__PURE__*/React.createElement("pre", {
      style: pre
    }, l.req)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: '#f29a7f',
        padding: '14px 18px 0'
      }
    }, "Response"), /*#__PURE__*/React.createElement("pre", {
      style: pre
    }, l.res)));
  }
  function FiveLayers({
    ind
  }) {
    const D = window.AW;
    const [i, setI] = React.useState(0);
    const [raw, setRaw] = React.useState(false);
    const L = D.layers2[i];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LayerTabs, {
      value: i,
      onChange: setI,
      items: D.LAYERS
    }), /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.3fr)',
        gap: 64,
        paddingTop: 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: fade(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono
      }
    }, String(i + 1).padStart(2, '0'), " / ", D.LAYERS[i]), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '22px 0 0',
        font: '500 34px/1.05 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, L.kicker), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0',
        font: '400 17px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 420
      }
    }, L.body), ind && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '22px 0 0',
        font: '400 15px/1.45 var(--font-sans)',
        maxWidth: 420
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--vermilion-600)',
        display: 'block',
        marginBottom: 8
      }
    }, "In ", ind.short), ind.layerNote[i]), /*#__PURE__*/React.createElement("button", {
      onClick: () => setRaw(r => !r),
      style: {
        all: 'unset',
        cursor: 'pointer',
        marginTop: 28,
        display: 'inline-flex',
        gap: 10,
        alignItems: 'center',
        ...mono,
        fontSize: 12,
        padding: '10px 14px',
        border: '1px solid var(--ink-deep)',
        background: raw ? 'var(--ink-deep)' : 'transparent',
        color: raw ? 'var(--paper)' : 'var(--ink-deep)'
      }
    }, raw ? 'Hide' : 'View', " request / response ", raw ? '−' : '+')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(LayerViz, {
      i: i,
      ind: ind
    }), raw && /*#__PURE__*/React.createElement(ReqRes, {
      l: L
    }))));
  }
  Object.assign(window, {
    HeroTrace,
    FiveLayers,
    LayerViz
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Diagrams.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Docs.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW && window.AidressDocs)) return setTimeout(__run, 20);
  const mono = {
    font: '400 12px/1 var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.02em'
  };
  const V = '#E84A27',
    INK = '#212320';
  function BigFooter({
    go
  }) {
    const cols = [['Platform', [['Five layers', 'home'], ['Atlas', 'atlas'], ['Agent passport', 'passport']]], ['Industries', [['Payments', 'industry:payments'], ['Logistics + Shipping', 'industry:logistics'], ['Commerce', 'industry:commerce']]], ['Developers', [['Docs', 'docs'], ['API reference', 'docs:register'], ['MCP server', 'docs:mcp-server'], ['Changelog', 'docs:changelog'], ['For agents', 'developers']]], ['Company', [['Research', 'research'], ['Aidress for Good', 'impact'], ['Crew', 'crew'], ['Contact', 'home']]]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: V,
        color: INK
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)',
        gap: 48,
        padding: '56px var(--gutter) 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: (document.getElementById('ad-logo-src') || {}).src || '../../assets/logo-mark-ink.png',
      alt: "",
      style: {
        width: 56,
        height: 'auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 56px/0.9 var(--font-sans)',
        letterSpacing: '-0.045em'
      }
    }, "AIDRESS")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 18px/1.4 var(--font-sans)',
        maxWidth: 360
      }
    }, "The coordination protocol for autonomous AI agents.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 24
      }
    }, cols.map(([t, ls]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        marginBottom: 6,
        opacity: .75
      }
    }, t), ls.map(([l, to]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => go(to),
      style: {
        font: '400 15px/1.2 var(--font-sans)',
        color: INK,
        cursor: 'pointer'
      }
    }, l)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        flexWrap: 'wrap',
        padding: '18px var(--gutter)',
        borderTop: '1px solid rgba(33,35,32,.35)'
      }
    }, [['X', 'https://x.com/aidabornnative'], ['LinkedIn', 'https://www.linkedin.com/company/aidress'], ['Instagram', 'https://www.instagram.com/aidress.ai'], ['GitHub', 'https://github.com/Aidress-ai/Aidress'], ['Discord', 'https://discord.gg/DG2VjeB7T'], ['Email', 'mailto:teamaidress@gmail.com']].map(([l, u]) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: u,
      target: "_blank",
      rel: "noopener",
      style: {
        ...mono,
        fontSize: 12,
        color: INK,
        display: 'inline-flex',
        gap: 6,
        borderBottom: '1px solid currentColor',
        paddingBottom: 3
      }
    }, l, " \u2197"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px var(--gutter)',
        borderTop: '1px solid rgba(33,35,32,.35)',
        ...mono,
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Aidress"), /*#__PURE__*/React.createElement("span", null, "Orange = resolved")));
  }
  const DOC_TABS = [{
    id: 'start',
    label: 'Get started',
    icon: 'book-open',
    groups: ['Getting Started', 'Help']
  }, {
    id: 'concepts',
    label: 'Concepts',
    icon: 'layers',
    groups: ['Core Concepts']
  }, {
    id: 'sdks',
    label: 'SDKs & tools',
    icon: 'terminal',
    groups: ['SDKs & Integrations']
  }, {
    id: 'api',
    label: 'API reference',
    icon: 'code',
    groups: ['API Reference']
  }, {
    id: 'ref',
    label: 'Reference',
    icon: 'file-text',
    groups: ['Reference']
  }];
  const DOC_ICON = {
    interoperability: 'route',
    introduction: 'book-open',
    quickstart: 'arrow-right',
    authentication: 'key-round',
    faq: 'list',
    'trust-scores': 'shield-check',
    'anti-gaming': 'lock',
    'capability-resolution': 'network',
    payments: 'credit-card',
    'org-api-keys': 'key-round',
    'python-sdk': 'code',
    cli: 'terminal',
    'mcp-server': 'cpu',
    langchain: 'layers',
    strands: 'route',
    'error-codes': 'activity',
    'a2a-compatibility': 'globe',
    standards: 'file-text',
    changelog: 'refresh-cw'
  };
  const START = [['quickstart', 'Quickstart', 'Verify your first agent in under 60 seconds.', 'arrow-right'], ['authentication', 'Authentication', 'Bearer keys and Ed25519 signatures.', 'key-round'], ['mcp-server', 'MCP server', 'Connect Claude, Cursor or any MCP client.', 'cpu'], ['verify', 'API reference', 'Every endpoint, request and response.', 'code']];
  function Method({
    label
  }) {
    const m = label.match(/^(GET|POST)\s+(.*)$/);
    if (!m) return null;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        font: '500 9.5px/1 var(--font-mono)',
        padding: '3px 4px',
        minWidth: 30,
        textAlign: 'center',
        border: '1px solid ' + (m[1] === 'GET' ? 'var(--border-box)' : '#E84A27'),
        color: m[1] === 'GET' ? '#3a3c38' : '#B8381C'
      }
    }, m[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12.5px/1.25 var(--font-mono)',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, m[2]));
  }
  function Docs({
    go,
    params
  }) {
    const {
      Icon
    } = window.AidressDesignSystem_f2dd6a;
    const DD = window.AidressDocs;
    const slug = params && params.id || 'introduction';
    const page = DD.getPageData(slug) || DD.getPageData('introduction');
    const [narrow, setNarrow] = React.useState(() => matchMedia('(max-width: 900px)').matches);
    React.useEffect(() => {
      const m = matchMedia('(max-width: 900px)');
      const f = () => setNarrow(m.matches);
      m.addEventListener('change', f);
      return () => m.removeEventListener('change', f);
    }, []);
    const [navOpen, setNavOpen] = React.useState(false);
    const [q, setQ] = React.useState('');
    const [spy, setSpy] = React.useState(null);
    const [copied, setCopied] = React.useState(false);
    const artRef = React.useRef();
    React.useEffect(() => {
      window.scrollTo(0, 0);
      setSpy(page.anchors[0] && page.anchors[0].id);
    }, [slug]);
    React.useEffect(() => {
      const els = page.anchors.map(x => document.getElementById(x.id)).filter(Boolean);
      if (!els.length) return;
      const io = new IntersectionObserver(es => {
        const v = es.filter(e => e.isIntersecting).sort((x, y) => x.boundingClientRect.top - y.boundingClientRect.top)[0];
        if (v) setSpy(v.target.id);
      }, {
        rootMargin: '-80px 0px -65% 0px'
      });
      els.forEach(e => io.observe(e));
      return () => io.disconnect();
    }, [slug]);
    const groupOf = s => DD.sidebarNav.find(g => g.items.some(i => i.slug === s));
    const tab = DOC_TABS.find(t => t.groups.includes((groupOf(slug) || {}).title)) || DOC_TABS[0];
    const flat = DD.sidebarNav.flatMap(g => g.items);
    const ix = flat.findIndex(x => x.slug === slug);
    const prev = flat[ix - 1],
      next = flat[ix + 1];
    const jump = id => {
      const el = document.getElementById(id);
      el && window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    };
    const isEp = l => /^(GET|POST)/.test(l);
    const groups = q ? DD.sidebarNav.map(g => ({
      ...g,
      items: g.items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()))
    })).filter(g => g.items.length) : DD.sidebarNav.filter(g => tab.groups.includes(g.title));
    const navList = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 10px',
        border: '1px solid var(--border-box)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14,
      color: "#6b6d66"
    }), /*#__PURE__*/React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Filter pages",
      style: {
        all: 'unset',
        flex: 1,
        minWidth: 0,
        font: '400 13.5px/1.2 var(--font-sans)'
      }
    }), q && /*#__PURE__*/React.createElement("button", {
      onClick: () => setQ(''),
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    }))), groups.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 10.5,
        color: 'var(--text-secondary)',
        margin: '0 0 8px'
      }
    }, g.title), g.items.map(it => {
      const on = it.slug === slug;
      return /*#__PURE__*/React.createElement("a", {
        key: it.slug,
        onClick: () => {
          setNavOpen(false);
          setQ('');
          go('docs:' + it.slug);
        },
        style: {
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '7px 10px',
          marginLeft: -10,
          background: on ? '#F5F1EA' : 'transparent',
          borderLeft: '2px solid ' + (on ? V : 'transparent'),
          font: '400 14px/1.25 var(--font-sans)',
          color: on ? INK : '#3a3c38',
          fontWeight: on ? 500 : 400
        }
      }, isEp(it.label) ? /*#__PURE__*/React.createElement(Method, {
        label: it.label
      }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
        name: DOC_ICON[it.slug] || 'file-text',
        size: 15,
        color: on || it.featured ? V : '#6b6d66'
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, it.label), it.featured && /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 'none',
          font: '500 9.5px/1 var(--font-mono)',
          textTransform: 'uppercase',
          padding: '3px 5px',
          background: V,
          color: INK
        }
      }, "Core")));
    }))), q && !groups.length && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13.5px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "No pages match \u201C", q, "\u201D."));
    const tabs = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2,
        overflowX: 'auto',
        scrollbarWidth: 'none',
        padding: '0 var(--gutter)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--paper)',
        position: 'sticky',
        top: 64,
        zIndex: 5
      }
    }, DOC_TABS.map(t => {
      const on = t.id === tab.id;
      const first = DD.sidebarNav.find(g => g.title === t.groups[0]).items[0].slug;
      return /*#__PURE__*/React.createElement("a", {
        key: t.id,
        onClick: () => {
          setQ('');
          go('docs:' + first);
        },
        style: {
          cursor: 'pointer',
          flex: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '14px 14px 12px',
          borderBottom: '2px solid ' + (on ? V : 'transparent'),
          font: '400 14px/1 var(--font-sans)',
          color: on ? INK : '#5a5c56',
          fontWeight: on ? 500 : 400
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: t.icon,
        size: 15,
        color: on ? V : 'currentColor'
      }), t.label);
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), !narrow && /*#__PURE__*/React.createElement("a", {
      href: "https://aidress.ai/llms.txt",
      target: "_blank",
      rel: "noopener",
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '14px 0 12px',
        ...mono,
        fontSize: 11,
        color: '#5a5c56'
      }
    }, "llms.txt ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 12
    })));
    const copyPage = () => {
      const t = artRef.current ? artRef.current.innerText : '';
      navigator.clipboard && navigator.clipboard.writeText(t);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-docs",
      style: {
        '--docs-accent': '#B8381C',
        '--docs-heading': INK,
        '--docs-body': '#3a3c38',
        '--docs-faint': '#6b6d66',
        '--docs-border': 'var(--border-subtle)',
        '--docs-code-bg': 'var(--stone-100)',
        '--docs-callout-bg': '#F5F1EA',
        background: 'var(--paper)'
      }
    }, tabs, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: narrow ? 'minmax(0,1fr)' : '260px minmax(0,1fr) 210px'
      }
    }, !narrow && /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'sticky',
        top: 112,
        alignSelf: 'start',
        maxHeight: 'calc(100vh - 112px)',
        overflowY: 'auto',
        padding: '24px 20px 40px var(--gutter)',
        borderRight: '1px solid var(--border-subtle)',
        boxSizing: 'border-box'
      }
    }, navList), /*#__PURE__*/React.createElement("article", {
      style: {
        padding: narrow ? '24px var(--gutter) 64px' : '36px 56px 80px',
        maxWidth: 820,
        minWidth: 0,
        boxSizing: 'border-box'
      }
    }, narrow && /*#__PURE__*/React.createElement("button", {
      onClick: () => setNavOpen(!navOpen),
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px 14px',
        border: '1px solid var(--border-box)',
        marginBottom: 24,
        ...mono,
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "list",
      size: 14
    }), tab.label, " \xB7 ", page.title), /*#__PURE__*/React.createElement(Icon, {
      name: navOpen ? 'x' : 'chevron-down',
      size: 14
    })), narrow && navOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 28,
        paddingBottom: 24,
        borderBottom: '1px solid var(--border-rule)'
      }
    }, navList), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go('docs'),
      style: {
        cursor: 'pointer'
      }
    }, "Docs"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 12
    }), /*#__PURE__*/React.createElement("span", null, page.breadcrumb)), /*#__PURE__*/React.createElement("button", {
      onClick: copyPage,
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 9px',
        border: '1px solid var(--border-box)',
        ...mono,
        fontSize: 10.5,
        color: copied ? '#B8381C' : INK
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: copied ? 'check' : 'copy',
      size: 12
    }), copied ? 'Copied' : 'Copy page')), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '18px 0 8px',
        font: isEp(page.title) ? '400 clamp(26px,4vw,40px)/1.1 var(--font-mono)' : '500 clamp(34px,5vw,52px)/1 var(--font-sans)',
        letterSpacing: isEp(page.title) ? '-0.01em' : '-0.045em',
        color: INK
      }
    }, page.title), slug === 'introduction' && /*#__PURE__*/React.createElement("a", {
      onClick: () => go('docs:interoperability'),
      className: "ad-doc-dark",
      style: {
        cursor: 'pointer',
        display: 'flex',
        gap: 18,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '24px 0 0',
        padding: '20px 22px',
        background: INK,
        color: '#F5F4EF',
        border: '1px solid ' + INK
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: '400 11px/1 var(--font-mono)',
        textTransform: 'uppercase',
        color: '#F07A5C'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        background: V
      }
    }), "Core concept \xB7 Interoperability Layer"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 22px/1.15 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, "One call. Any agent. Any protocol.")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: '400 12px/1 var(--font-mono)',
        textTransform: 'uppercase',
        padding: '10px 12px',
        background: V,
        color: INK
      }
    }, "Read ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 13
    }))), slug === 'introduction' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: narrow ? '1fr' : 'repeat(2,minmax(0,1fr))',
        gap: 12,
        margin: '24px 0 8px'
      }
    }, START.map(([s, t, dsc, ic]) => /*#__PURE__*/React.createElement("a", {
      key: s,
      onClick: () => go('docs:' + s),
      className: "ad-doc-card",
      style: {
        cursor: 'pointer',
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        padding: '16px 18px',
        border: '1px solid var(--border-box)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F1EA',
        color: V
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15.5px/1.2 var(--font-sans)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13.5px/1.4 var(--font-sans)',
        color: '#5a5c56'
      }
    }, dsc))))), /*#__PURE__*/React.createElement("div", {
      ref: artRef
    }, page.content), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        paddingTop: 24,
        borderTop: '1px solid var(--border-rule)',
        display: 'grid',
        gridTemplateColumns: narrow ? '1fr' : 'repeat(3,minmax(0,1fr))',
        gap: 12
      }
    }, [['Discord', 'Chat with our devs for support and errors.', 'https://discord.gg/DG2VjeB7T', 'globe'], ['Changelog', 'What’s new in the API, SDK and CLI.', null, 'refresh-cw'], ['llms.txt', 'The docs, machine-readable.', 'https://aidress.ai/llms.txt', 'file-text']].map(([t, dsc, u, ic]) => /*#__PURE__*/React.createElement("a", {
      key: t,
      href: u || undefined,
      target: u ? '_blank' : undefined,
      rel: "noopener",
      onClick: u ? undefined : () => go('docs:changelog'),
      className: "ad-doc-card",
      style: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        padding: '14px 16px',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: '500 14.5px/1.2 var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 14,
      color: V
    }), t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1.4 var(--font-sans)',
        color: '#5a5c56'
      }
    }, dsc)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, prev ? /*#__PURE__*/React.createElement("a", {
      onClick: () => go('docs:' + prev.slug),
      className: "ad-doc-card",
      style: {
        cursor: 'pointer',
        padding: '14px 16px',
        border: '1px solid var(--border-box)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        ...mono,
        fontSize: 10.5,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 12
    }), "Previous"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.2 var(--font-sans)'
      }
    }, prev.label)) : /*#__PURE__*/React.createElement("span", null), next && /*#__PURE__*/React.createElement("a", {
      onClick: () => go('docs:' + next.slug),
      className: "ad-doc-card",
      style: {
        cursor: 'pointer',
        padding: '14px 16px',
        border: '1px solid var(--border-box)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'flex-end',
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        ...mono,
        fontSize: 10.5,
        color: 'var(--text-secondary)'
      }
    }, "Next", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 12
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.2 var(--font-sans)'
      }
    }, next.label)))), !narrow && /*#__PURE__*/React.createElement("nav", {
      style: {
        position: 'sticky',
        top: 112,
        alignSelf: 'start',
        padding: '36px var(--gutter) 40px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, page.anchors.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        color: 'var(--text-secondary)',
        marginBottom: 10
      }
    }, "On this page"), page.anchors.map(x => {
      const on = spy === x.id;
      return /*#__PURE__*/React.createElement("a", {
        key: x.id,
        onClick: () => jump(x.id),
        style: {
          cursor: 'pointer',
          padding: '5px 0 5px 12px',
          borderLeft: '2px solid ' + (on ? V : 'var(--border-subtle)'),
          font: '400 13.5px/1.3 var(--font-sans)',
          color: on ? INK : '#5a5c56',
          fontWeight: on ? 500 : 400,
          transition: 'color var(--dur-fast), border-color var(--dur-fast)'
        }
      }, x.label);
    })))));
  }
  Object.assign(window, {
    BigFooter,
    Docs
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Docs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Impact.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    SectionHeader,
    Button
  } = window.AidressDesignSystem_f2dd6a;
  const {
    Band,
    Photo,
    monoStyle: mono
  } = window;
  const LAYERS = [['Discovery', 'Find the right agent or service.', 'Reach trusted services, not a fragmented system.'], ['Identity', 'Verify the agent and its operator.', 'Establish who’s acting, and who’s accountable.'], ['Trust', 'Use credentials, attestations, history.', 'Reduce fraud, impersonation, unsafe delegation.'], ['Permissions & Terms', 'Define authority, limits, conditions.', 'Preserve consent, spending limits, human control.'], ['Routing & Audit', 'Execute, and keep a record.', 'Improve transparency across institutions.']];
  const USES = [['01', 'Agriculture', 'Smallholder agriculture', 'Better access to markets, credit, and insurance — while the farmer’s agent keeps final say.'], ['02', 'Finance', 'Financial inclusion', 'Simpler access to banks and credit, with consent and limits built into the workflow.'], ['03', 'Response', 'Disaster response', 'Faster relief coordination, less duplication, a clear record of who did what.']];
  function Impact({
    go
  }) {
    const [view, setView] = React.useState('social');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, "Aidress for Good"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '20px 0 0',
        font: '500 64px/1 var(--font-sans)',
        letterSpacing: '-0.045em',
        maxWidth: 900,
        textWrap: 'pretty'
      }
    }, "Trust infrastructure doesn\u2019t care who\u2019s using it."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '24px 0 0',
        font: '400 20px/1.45 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 680
      }
    }, "The same protocol that lets agents book freight can let a farmer\u2019s agent reach a bank, an NGO, or a government service \u2014 safely."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '32px 0 0',
        font: '400 16px/1.6 var(--font-sans)',
        maxWidth: 720
      }
    }, "Aidress is trust infrastructure for autonomous agents \u2014 identity, permissions, and an audit trail for every interaction, whether the counterparty is a freight carrier or a government service. There\u2019s no separate \u201Csocial impact\u201D product: the same rails just mean broader inclusion, clearer accountability, and one shared way for institutions to coordinate.")), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      size: "md",
      label: "The backbone",
      title: "The five layers, applied wider."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginTop: 32
      }
    }, [['commercial', 'Commercial'], ['social', 'Social'], ['both', 'Side by side']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => setView(v),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 11,
        padding: '8px 10px',
        border: '1px solid ' + (view === v ? 'var(--ink-deep)' : 'var(--border-box)'),
        background: view === v ? 'var(--ink-deep)' : 'transparent',
        color: view === v ? 'var(--paper)' : 'var(--ink-deep)'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        borderTop: '1px solid var(--border-rule)'
      }
    }, LAYERS.map(([n, c, s], k) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'grid',
        gridTemplateColumns: view === 'both' ? '48px minmax(0,1fr) minmax(0,1.3fr) minmax(0,1.3fr)' : '48px minmax(0,1fr) minmax(0,2.6fr)',
        gap: 20,
        padding: '18px 0',
        borderBottom: '1px solid var(--border-rule)',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 18px/1.2 var(--font-sans)'
      }
    }, n), view !== 'social' && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 16px/1.4 var(--font-sans)',
        color: view === 'both' ? 'var(--text-secondary)' : 'inherit'
      }
    }, view === 'both' && /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        display: 'block',
        marginBottom: 6
      }
    }, "Commercial"), c), view !== 'commercial' && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 16px/1.4 var(--font-sans)'
      }
    }, view === 'both' && /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        display: 'block',
        marginBottom: 6,
        color: 'var(--vermilion-600)'
      }
    }, "Social"), s))))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeader, {
      size: "md",
      label: "Where it applies",
      tagline: "Illustrative",
      title: "Same rails, wider reach."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 20,
        marginTop: 40
      }
    }, USES.map(([n, tag, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4 / 3',
        overflow: 'hidden',
        background: 'var(--stone-section)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: '../../assets/impact/' + {
        Agriculture: 'agriculture',
        Finance: 'finance',
        Response: 'disaster'
      }[tag] + '.jpg',
      alt: t,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", null, tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 22px/1.15 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 15px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, d))))), /*#__PURE__*/React.createElement(Band, {
      tone: "dark"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 56
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: '#9a9c95'
      }
    }, "Principles"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        font: '500 40px/1.05 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, "Human agency, by default."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        font: '400 16px/1.6 var(--font-sans)',
        color: '#c9c9c1'
      }
    }, "Agents should operate with clear identity, explicit authority, defined limits, and a verifiable record of what occurred \u2014 with a human able to step in at any point. Building those principles into the infrastructure layer, rather than leaving them to each integration, is what makes autonomous AI usable in places where the cost of getting it wrong is highest.")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: '1px solid #3a3c38',
        paddingLeft: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        font: '500 24px/1.2 var(--font-sans)'
      }
    }, "Design a pilot with Aidress"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 16px/1.6 var(--font-sans)',
        color: '#c9c9c1'
      }
    }, "We work with development institutions, governments, impact investors, and technology partners to identify high-impact workflows where trusted agent coordination can improve access, accountability, and outcomes. Talk to us about a design partnership or pilot."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        location.href = 'mailto:teamaidress@gmail.com';
      }
    }, "Talk to us"))))));
  }
  window.Impact = Impact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Impact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Industry.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    SectionHeader,
    IndustryTile,
    TextLink,
    Button,
    StatRow,
    Tag,
    Avatar,
    Badge,
    Icon
  } = window.AidressDesignSystem_f2dd6a;
  const {
    Photo,
    Band,
    FiveLayers,
    Stepper,
    monoStyle: mono
  } = window;
  function Industries({
    go
  }) {
    const inds = Object.values(window.AW.industries);
    return /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "02",
      label: "Industries",
      tagline: "Logistics + Shipping \xB7 Payments \xB7 Scoped registries",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Agent networks", /*#__PURE__*/React.createElement("br", null), "in action."),
      lead: "Real workflows. Measurable impact. Each industry opens into a curated experience with its own agents, terms and scenario."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
        gap: 22,
        marginTop: 64
      }
    }, inds.map(i => /*#__PURE__*/React.createElement("div", {
      key: i.id
    }, /*#__PURE__*/React.createElement(IndustryTile, {
      code: i.code,
      height: 380,
      title: i.title,
      description: i.use,
      onClick: () => go('industry', {
        id: i.id
      }),
      media: /*#__PURE__*/React.createElement(Photo, {
        id: 'tile-' + i.id,
        label: i.photo,
        src: i.img.src,
        credit: i.img.credit,
        href: i.img.href
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        marginTop: 18
      }
    }, i.stats.slice(0, 2).map(([v, l]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 22px/1 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginTop: 8
      }
    }, l)))))), /*#__PURE__*/React.createElement(ScopedTile, {
      go: go,
      height: 380
    })));
  }
  function AgentCard({
    id,
    go
  }) {
    const a = window.AW.agentFor(id);
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => go('passport', {
        id
      }),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        background: 'var(--paper)',
        border: '1px solid ' + (h ? 'var(--vermilion-500)' : 'var(--border-box)'),
        padding: 22,
        cursor: 'pointer',
        transition: 'border-color var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      letter: a.letter,
      size: 44
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 17px/1.1 var(--font-sans)'
      }
    }, a.name), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, null, "Verified")))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginTop: 18,
        textTransform: 'none'
      }
    }, "agent://", a.handle, ".aidress"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 18,
        paddingTop: 14,
        borderTop: '1px solid var(--border-rule)',
        font: '400 14px/1 var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "Trust"), /*#__PURE__*/React.createElement("span", null, a.trust)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 18,
        font: '500 14px/1 var(--font-sans)',
        color: h ? 'var(--vermilion-600)' : 'var(--ink-deep)'
      }
    }, "View passport", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    })));
  }
  function IndustryDetail({
    go,
    params
  }) {
    const D = window.AW;
    const ind = D.industries[params.id] || D.industries.logistics;
    if (ind.soon && !(D.flags && D.flags.industriesLive)) return /*#__PURE__*/React.createElement(ComingSoon, {
      ind: ind,
      go: go
    });
    const scrollTo = id => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth'
      });
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
      style: {
        paddingTop: 40,
        paddingBottom: 56
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      onClick: () => go('industries')
    }, "All industries"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: ind.code,
      label: ind.title,
      tagline: ind.scenario,
      title: ind.title + '.',
      lead: ind.lead
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-down",
      onClick: () => scrollTo('workflow')
    }, "Explore the workflow"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => go('atlas')
    }, "See ", ind.short, " agents in the Atlas"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--gutter)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      id: 'hero-' + ind.id,
      label: ind.photo,
      src: ind.heroImg.src,
      credit: ind.heroImg.credit,
      href: ind.heroImg.href,
      height: 520
    })), /*#__PURE__*/React.createElement(Band, {
      style: {
        paddingTop: 48,
        paddingBottom: 48
      }
    }, /*#__PURE__*/React.createElement(StatRow, {
      size: "lg",
      stats: ind.stats.map(([value, label], k) => ({
        value,
        label,
        accent: k === 1
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        marginTop: 40,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)',
        marginRight: 8
      }
    }, "Terminology"), ind.terms.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      mono: true
    }, t)))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone",
      id: "workflow"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      size: "md",
      index: "01",
      label: "Workflow",
      tagline: "Demonstration",
      title: "From request to resolved.",
      lead: "Select a step to see what the requesting agent needs, who is involved, what Aidress contributes, and what passes on. The route turns orange when it resolves."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      ind: ind,
      onAgent: id => go('passport', {
        id
      }),
      onCode: () => go('developers', {
        example: ind.id
      })
    }))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeader, {
      size: "md",
      index: "02",
      label: "Five layers",
      tagline: 'Applied to ' + ind.short,
      title: 'The layers, in ' + ind.short.toLowerCase() + '.'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56
      }
    }, /*#__PURE__*/React.createElement(FiveLayers, {
      ind: ind
    }))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono
      }
    }, "03 / Agents in this workflow"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '22px 0 0',
        font: '500 48px/1 var(--font-sans)',
        letterSpacing: '-0.045em'
      }
    }, "Meet the counterparties.")), /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => go('atlas')
    }, "Explore all in the Atlas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 18,
        marginTop: 48
      }
    }, ind.agents.map(a => /*#__PURE__*/React.createElement(AgentCard, {
      key: a,
      id: a,
      go: go
    })))));
  }
  const V = 'var(--vermilion-500)';
  function SoonTag() {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '7px 10px',
        border: '1px solid ' + V,
        color: 'var(--vermilion-600)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        background: V
      }
    }), "In development \xB7 coming soon");
  }
  function Flow({
    items,
    hot = 1
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        rowGap: 12
      }
    }, items.map(([t, s], k) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: t
    }, k > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 40px',
        minWidth: 40,
        maxWidth: 120,
        alignSelf: 'center',
        height: 2,
        background: V
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 180px',
        minWidth: 160,
        padding: '18px 20px',
        background: 'var(--surface-card)',
        border: k === hot ? '2px solid ' + V : '1px solid var(--border-box)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 17px/1.2 var(--font-sans)'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, s)))));
  }
  function EarlyAccess({
    label
  }) {
    const [e, setE] = React.useState('');
    const [ok, setOk] = React.useState(false);
    if (ok) return /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 16px/1.4 var(--font-sans)'
      }
    }, "Thanks. We\u2019ll be in touch at ", e, ".");
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: ev => {
        ev.preventDefault();
        if (e.includes('@')) setOk(true);
      },
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      required: true,
      value: e,
      onChange: ev => setE(ev.target.value),
      placeholder: "you@company.com",
      style: {
        flex: '1 1 240px',
        height: 48,
        padding: '0 14px',
        border: '1px solid var(--border-box)',
        background: 'var(--surface-card)',
        font: '400 15px/1 var(--font-sans)',
        color: 'var(--ink)',
        outline: 'none',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      type: "submit"
    }, label));
  }
  function Bar({
    t
  }) {
    const [on, setOn] = React.useState(false);
    const tm = React.useRef();
    const flash = () => {
      clearTimeout(tm.current);
      setOn(true);
      tm.current = setTimeout(() => setOn(false), 900);
    };
    React.useEffect(() => () => clearTimeout(tm.current), []);
    return /*#__PURE__*/React.createElement("span", {
      onMouseEnter: flash,
      onClick: flash,
      style: {
        cursor: 'crosshair',
        padding: '0 4px',
        background: on ? V : 'var(--ink-deep)',
        color: on ? '#fff' : 'transparent',
        transition: 'background 160ms, color 160ms',
        userSelect: 'none'
      }
    }, t);
  }
  function Line({
    v
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px 6px',
        alignItems: 'center'
      }
    }, v.split(/(\{[^}]+\})/).filter(Boolean).map((p, k) => p[0] === '{' ? /*#__PURE__*/React.createElement(Bar, {
      key: k,
      t: p.slice(1, -1)
    }) : /*#__PURE__*/React.createElement("span", {
      key: k
    }, p.trim())));
  }
  function Redacted({
    rows
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--ink)',
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '12px 18px',
        borderBottom: '1px solid var(--border-box)',
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Brief \xB7 restricted"), /*#__PURE__*/React.createElement("span", null, "Hover to decrypt")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, rows.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(110px,160px) minmax(0,1fr)',
        gap: 16,
        padding: '14px 18px',
        borderBottom: '1px solid var(--border-subtle)',
        font: '400 14px/1.6 var(--font-mono)',
        textTransform: 'uppercase',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, l), /*#__PURE__*/React.createElement(Line, {
      v: v
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 18px',
        font: '500 28px/1 var(--font-sans)',
        letterSpacing: '-0.03em',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        background: V
      }
    }), "Coming soon."));
  }
  function ComingSoon({
    ind,
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
      style: {
        paddingTop: 40,
        paddingBottom: 48
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      onClick: () => go('industries')
    }, "All industries"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(SoonTag, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: ind.code,
      label: ind.title,
      title: ind.title + '.'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Redacted, {
      rows: ind.brief
    }))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '500 32px/1.1 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, "Get early access."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 24px',
        font: '400 16px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 560
      }
    }, "We\u2019re working with a small group of design partners in ", ind.short.toLowerCase(), ". Leave your email and we\u2019ll reach out."), /*#__PURE__*/React.createElement(EarlyAccess, {
      label: "Request access"
    })));
  }
  const ATLAS_BRIEF = [['Product', 'Atlas · live registry'], ['Status', '{In development}'], ['Agents indexed', '{10,482}'], ['Interfaces', '{A2A} · {MCP} · {HTTP}'], ['View', '{Force-directed network graph}'], ['Launch', '{Soon}']];
  function AtlasSoon({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
      style: {
        paddingTop: 56,
        paddingBottom: 48
      }
    }, /*#__PURE__*/React.createElement(SoonTag, null), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      label: "Atlas",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "The registry,", /*#__PURE__*/React.createElement("br", null), "made visible for humans.")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Redacted, {
      rows: ATLAS_BRIEF
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => go('home')
    }, "Back to aidress.ai"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go('docs')
    }, "Read the docs"))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '500 32px/1.1 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, "Get notified when the Atlas opens."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(EarlyAccess, {
      label: "Notify me"
    }))));
  }
  function ScopedTile({
    go,
    height = 240
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => go('scoped'),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        height,
        boxSizing: 'border-box',
        cursor: 'pointer',
        background: 'var(--ink-deep)',
        color: 'var(--paper)',
        border: '2px solid ' + (h ? V : '#3a3c38'),
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, "REG-00"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: V
      }
    }, "For organisations")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 26px/1.1 var(--font-sans)',
        letterSpacing: '-0.025em'
      }
    }, "Scoped registries"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        font: '400 14px/1.45 var(--font-sans)',
        color: '#c9c9c1'
      }
    }, "A scoped registry for your organisation, consortium or network. Your agents, your rules, the same protocol."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 16,
        font: '500 14px/1 var(--font-sans)',
        color: h ? V : 'var(--paper)'
      }
    }, "Learn more", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    }))));
  }
  function ScopedRegistries({
    go
  }) {
    const pts = [['Scoped discovery', 'Only agents you approve can find each other.'], ['Your trust rules', 'Set your own thresholds, attestations and reviews.'], ['Same API', 'Agents use the same /verify and /match calls as the public registry.']];
    const ag = t => /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        padding: '8px 10px',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-box)',
        textTransform: 'none'
      }
    }, t);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, {
      style: {
        paddingTop: 40,
        paddingBottom: 48
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      onClick: () => go('industries')
    }, "All industries"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(SoonTag, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "REG-00",
      label: "Scoped registries",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Your agents. Your rules.", /*#__PURE__*/React.createElement("br", null), "The same protocol."),
      lead: "A scoped registry for your organisation, consortium or network. Internal agents discover and verify each other privately, and you decide which of them are visible on the public Aidress registry."
    }))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, "How it works"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        border: '1px dashed var(--gray-500)',
        padding: '20px 20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Public Aidress registry"), /*#__PURE__*/React.createElement("span", null, "agent_partner_01 \xB7 agent_carrier_44 \xB7 \u2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '2 1 320px',
        border: '2px solid ' + V,
        background: 'var(--paper)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 17px/1.2 var(--font-sans)'
      }
    }, "Your scoped registry"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, ag('agent_treasury'), ag('agent_procurement'), ag('agent_support')), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "Internal agents only. Discovery and trust stay inside.")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 1 60px',
        height: 2,
        background: V,
        minWidth: 30
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 200px',
        border: '1px solid var(--ink)',
        background: 'var(--surface-card)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 17px/1.2 var(--font-sans)'
      }
    }, "Gateway"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "You choose which agents are published to the public registry."))))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: 32,
        borderTop: '1px solid var(--border-rule)',
        paddingTop: 24
      }
    }, pts.map(([t, s], k) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        font: '500 20px/1.2 var(--font-sans)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px 0 0',
        font: '400 15px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, s)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginRight: 6
      }
    }, "Example uses"), ['A bank’s internal agents', 'A shipping consortium', 'A government service network'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t)))), /*#__PURE__*/React.createElement(Band, {
      tone: "dark"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '500 32px/1.1 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, "Run a scoped registry."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        font: '400 16px/1.5 var(--font-sans)',
        color: '#c9c9c1'
      }
    }, "We\u2019re onboarding a small number of design partners.")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => {
        location.href = 'mailto:teamaidress@gmail.com?subject=Scoped%20registry';
      }
    }, "Talk to us"))));
  }
  Object.assign(window, {
    Industries,
    IndustryDetail,
    ScopedRegistries,
    ScopedTile,
    AtlasSoon,
    Redacted
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Industry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Layers5.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const mono = {
    font: '400 12px/1 var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.02em'
  };
  const V = '#E84A27',
    INK = '#212320',
    BOX = '#92968c';
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const fade = k => ({
    animation: `ad-fade-up 220ms ${ease} ${k * 90}ms both`
  });
  const RID = 'req_7f3a91';
  const TABS = [['Discovery', 'Who can do this?'], ['Identity', 'Who am I dealing with?'], ['Terms', 'How do we talk?'], ['Trust', 'Should I proceed?'], ['Routing', 'Deliver and settle']];
  const node = on => ({
    minWidth: 150,
    boxSizing: 'border-box',
    padding: '14px 16px',
    background: on === 'res' ? '#fff' : 'var(--paper)',
    border: on === 'sel' ? '2px solid ' + INK : on === 'res' ? '2px solid ' + V : '1px solid ' + BOX,
    minHeight: 64,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    justifyContent: 'center',
    overflowWrap: 'anywhere'
  });
  const L1 = {
      font: '400 14px/1.35 var(--font-sans)'
    },
    L2 = {
      font: '400 14px/1.35 var(--font-mono)',
      color: 'var(--text-secondary)'
    },
    L2c = {
      ...L2,
      color: INK
    };
  function Node({
    t,
    s,
    st,
    style,
    onClick,
    ts = 16
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        ...node(st),
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 ' + ts + 'px/1.2 var(--font-sans)',
        color: INK
      }
    }, t), s && /*#__PURE__*/React.createElement("span", {
      style: L1
    }, s));
  }
  if (!document.getElementById('ad-travel-kf')) {
    const st = document.createElement('style');
    st.id = 'ad-travel-kf';
    st.textContent = '@keyframes ad-travel{from{left:0}to{left:calc(100% - 8px)}}';
    document.head.appendChild(st);
  }
  let NARROW = false,
    STEP = 0;
  function Row({
    children,
    style,
    h = 210
  }) {
    const [k, setK] = React.useState(null);
    const tx = React.useRef(0);
    React.useEffect(() => setK(null), [STEP]);
    if (!NARROW) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        ...style
      }
    }, children);
    const items = [];
    let via = null;
    React.Children.toArray(children).forEach(c => {
      if (c && c.type === Wire) {
        via = {
          label: c.props.label,
          on: c.props.on,
          blocked: c.props.blocked
        };
      } else if (c) {
        items.push({
          el: c,
          via
        });
        via = null;
      }
    });
    const n = items.length;
    const cur = Math.max(0, Math.min(n - 1, k == null ? STEP : k));
    const it = items[cur];
    const nav = d => setK(Math.max(0, Math.min(n - 1, cur + d)));
    const arrow = (d, l) => /*#__PURE__*/React.createElement("button", {
      "aria-label": d < 0 ? 'Previous stage' : 'Next stage',
      onClick: () => nav(d),
      disabled: d < 0 ? cur === 0 : cur === n - 1,
      style: {
        all: 'unset',
        cursor: 'pointer',
        width: 44,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-box)',
        opacity: (d < 0 ? cur === 0 : cur === n - 1) ? .35 : 1,
        ...mono,
        fontSize: 13
      }
    }, l);
    return /*#__PURE__*/React.createElement("div", {
      onTouchStart: e => {
        tx.current = e.touches[0].clientX;
      },
      onTouchEnd: e => {
        const dx = e.changedTouches[0].clientX - tx.current;
        if (Math.abs(dx) > 40) nav(dx < 0 ? 1 : -1);
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        minHeight: h,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        minHeight: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        color: 'var(--text-secondary)'
      }
    }, "Stage ", cur + 1, " / ", n), it.via && /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        textAlign: 'right',
        color: it.via.on ? INK : 'var(--text-secondary)',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 2,
        background: it.via.blocked ? '#bbb' : it.via.on ? V : BOX,
        flex: 'none'
      }
    }), it.via.label || 'connected')), /*#__PURE__*/React.createElement("div", {
      key: cur,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        animation: 'ad-fade-up 260ms ' + ease + ' both'
      }
    }, it.el), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, arrow(-1, '←'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, items.map((_, j) => /*#__PURE__*/React.createElement("button", {
      key: j,
      "aria-label": 'Stage ' + (j + 1),
      onClick: () => setK(j),
      style: {
        all: 'unset',
        cursor: 'pointer',
        width: j === cur ? 18 : 6,
        height: 6,
        background: j === cur ? INK : j < cur ? V : 'var(--border-box)',
        transition: 'width 200ms'
      }
    }))), arrow(1, '→')));
  }
  function useNarrow() {
    const q = '(max-width: 760px)';
    const [n, setN] = React.useState(() => typeof matchMedia !== 'undefined' && matchMedia(q).matches);
    React.useEffect(() => {
      const m = matchMedia(q);
      const f = () => setN(m.matches);
      m.addEventListener('change', f);
      return () => m.removeEventListener('change', f);
    }, []);
    return n;
  }
  function Wire({
    on,
    label,
    blocked,
    flex = 1,
    min = 96,
    pad = 12,
    dot
  }) {
    const c = blocked ? '#bbb' : on ? V : BOX;
    if (NARROW) return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        alignSelf: 'stretch',
        height: label ? 44 : 30,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: on ? 2 : 1,
        height: '100%',
        background: c
      }
    }), label && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 'calc(50% + 12px)',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        ...mono,
        fontSize: 10.5,
        lineHeight: 1.25,
        color: blocked || on ? INK : 'var(--text-secondary)'
      }
    }, label));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex,
        minWidth: min,
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 ' + pad + 'px',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 6,
        minHeight: 18
      }
    }, label && /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        lineHeight: 1.25,
        textAlign: 'center',
        color: blocked ? INK : on ? INK : 'var(--text-secondary)'
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: on ? 0 : .5,
        height: on ? 2 : 1,
        background: c,
        transformOrigin: 'left',
        animation: on ? `ad-grow 500ms ${ease} both` : 'none'
      }
    }), dot && /*#__PURE__*/React.createElement("span", {
      key: dot,
      style: {
        position: 'absolute',
        top: -3,
        width: 8,
        height: 8,
        background: V,
        animation: `ad-travel 700ms ${ease} both`,
        animationDirection: dot === 'l' ? 'reverse' : 'normal'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 18
      }
    }));
  }
  function Chips({
    items,
    value,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, items.map(i => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange(i),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 11,
        padding: '8px 10px',
        minHeight: 16,
        border: '1px solid ' + (i === value ? INK : 'var(--border-box)'),
        background: i === value ? INK : 'transparent',
        color: i === value ? 'var(--paper)' : INK
      }
    }, i)));
  }
  function Toggle({
    open,
    onClick,
    children
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        all: 'unset',
        cursor: 'pointer',
        alignSelf: 'flex-start',
        ...mono,
        fontSize: 11,
        padding: '8px 10px',
        border: '1px solid ' + (open ? INK : 'var(--border-box)')
      }
    }, open ? '− ' : '+ ', children);
  }
  const EX = {
    Freight: {
      q: '"Book freight from Singapore to Rotterdam"',
      syn: ['freight booking', 'ship cargo', 'book carrier'],
      cap: 'freight_booking',
      c: [['agent_freightbot_01', 0.96, 80, '98%'], ['vector_logistics', 0.91, 74, '96%'], ['harbor_planner', 0.84, 58, '91%']]
    },
    Research: {
      q: '"Find recent papers on agent reputation"',
      syn: ['literature search', 'web research', 'find papers'],
      cap: 'web_research',
      c: [['corpus_research', 0.94, 77, '97%'], ['scholar_scout', 0.88, 71, '94%'], ['deepread_01', 0.80, 52, '89%']]
    }
  };
  function Discovery({
    step,
    ex,
    setEx,
    pick,
    setPick
  }) {
    const E = EX[ex];
    return {
      diagram: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }
      }, /*#__PURE__*/React.createElement(Chips, {
        items: ['Freight', 'Research'],
        value: ex,
        onChange: v => {
          setEx(v);
          setPick(0);
        }
      }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Node, {
        t: "Requesting agent",
        s: E.q
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 1,
        label: "plain language"
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Capability resolver",
        st: step >= 1 ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, E.syn.map(s => /*#__PURE__*/React.createElement("span", {
          key: s,
          style: {
            ...L2,
            textDecoration: step >= 1 ? 'line-through' : 'none'
          }
        }, s)), /*#__PURE__*/React.createElement("span", {
          style: {
            ...L2,
            color: V
          }
        }, "\u2192 ", E.cap))
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 2,
        label: "query registry"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          minWidth: 230
        }
      }, E.c.map(([h, f, t, s], k) => /*#__PURE__*/React.createElement("div", {
        key: h,
        onClick: () => setPick(k),
        style: {
          cursor: 'pointer',
          padding: '9px 12px',
          background: '#fff',
          border: k === pick && step >= 3 ? '2px solid ' + INK : '1px solid ' + (step >= 2 ? BOX : '#ddd'),
          opacity: step >= 2 ? 1 : .35,
          ...(step >= 2 ? fade(k) : {})
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          ...L2,
          color: INK
        }
      }, k + 1, ". ", h), step >= 2 && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          marginTop: 6,
          ...L2,
          fontSize: 11
        }
      }, /*#__PURE__*/React.createElement("span", null, "fit ", f), /*#__PURE__*/React.createElement("span", null, "trust ", t), /*#__PURE__*/React.createElement("span", null, "success ", s))))))),
      evidence: step >= 3 ? [['Returned profile', E.c[pick][0]], ['Capability fit', E.c[pick][1]], ['Trust score', E.c[pick][2]], ['Success rate', E.c[pick][3]], ['Note', 'Scores illustrative']] : [['Resolved capability', step >= 1 ? E.cap : '…'], ['Candidates', step >= 2 ? '3 ranked' : '…']],
      inspect: `// request ${RID}\nPOST /match\n{"required_capabilities": ["${E.cap}"]}\n\n// original wording\n${E.q}\n\n// ranking signals: capability fit · trust_score · success rate\n// top result (illustrative)\n{"agent_id":"${E.c[pick][0]}","trust_score":${E.c[pick][2]},"verified":true,"flags":[]}`
    };
  }
  function Identity({
    step,
    path,
    setPath
  }) {
    const P = {
      'Self-owned keys': ['Keypair generated locally', 'public key registered with Aidress'],
      'Web Bot Auth': ['Key published at domain', '/.well-known/http-message-signatures-directory'],
      'Organisation': ['Org key signs registration', 'agent associated with company · initial trust benefit']
    }[path];
    return {
      diagram: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }
      }, /*#__PURE__*/React.createElement(Chips, {
        items: ['Self-owned keys', 'Web Bot Auth', 'Organisation'],
        value: path,
        onChange: setPath
      }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", {
        style: {
          border: '1px dashed ' + INK,
          padding: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 10.5
        }
      }, "Agent boundary"), /*#__PURE__*/React.createElement(Node, {
        t: "Private key",
        s: "never leaves"
      })), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 1,
        label: path === 'Web Bot Auth' ? 'domain directory' : 'public key only'
      }), /*#__PURE__*/React.createElement(Node, {
        st: step >= 2 ? 'res' : null,
        t: "agent_id",
        s: /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            ...L2,
            color: INK
          }
        }, "agent_freightbot_01"), /*#__PURE__*/React.createElement("span", {
          style: L2
        }, P[0])),
        style: {
          minWidth: 220
        }
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 3,
        label: "authenticated"
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Aidress",
        st: step >= 3 ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, P[1]),
        style: {
          maxWidth: 220
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          ...L2,
          ...(step >= 3 ? fade(0) : {
            opacity: .4
          })
        }
      }, "Access without an inbox: the agent signs a request (RFC 9421) and receives its access key directly. No email handoff.")),
      evidence: [['Agent ID', 'agent_freightbot_01'], ['Method', path], ['Key discovery', path === 'Web Bot Auth' ? 'domain /.well-known' : 'registered public key'], ['Organisation', path === 'Organisation' ? 'Freightbot Ltd · freightbot.com' : '—']],
      inspect: `// request ${RID}\nPOST /register\n{\n  "agent_id": "agent_freightbot_01",\n  ${path === 'Organisation' ? '"org_name": "Freightbot Ltd",\n  "org_domain": "freightbot.com",' : '"public_key": "ed25519:MCowBQYDK2Vw…",'}\n  "auth": "${path === 'Web Bot Auth' ? 'web_bot_auth' : 'ed25519_rfc9421'}"\n}\n\n// the private key is never sent`
    };
  }
  const TW = {
    A2A: ['A2A agent', 'Streaming task updates (tasks/sendSubscribe)'],
    MCP: ['MCP agent', 'Initialize handshake, then tools/call'],
    HTTP: ['HTTP service', 'Request formatted as a JSON POST']
  };
  function Terms({
    step,
    proto,
    run,
    mm,
    setMm,
    td,
    setTd
  }) {
    const col = (c, r) => NARROW ? {} : {
      gridColumn: c,
      gridRow: r
    };
    return {
      bare: true,
      h: 'Different protocols. One interface.',
      p: 'Aidress handles protocol differences so your agent can connect through one integration.',
      diagram: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 20
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 11,
          color: 'var(--text-secondary)'
        }
      }, "Click a destination"), NARROW ? /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Node, {
        ts: 18,
        st: step >= 4 ? 'res' : null,
        t: "Your agent",
        s: "One call to Aidress"
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 1,
        label: step >= 4 ? '← response' : 'request'
      }), /*#__PURE__*/React.createElement(Node, {
        ts: 18,
        st: step >= 1 ? 'res' : null,
        t: "Aidress interoperability layer",
        s: "Adapts requests and responses across protocols.",
        style: {
          padding: 20
        }
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 2,
        label: 'to ' + proto
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, Object.keys(TW).map(d => {
        const me = d === proto;
        return /*#__PURE__*/React.createElement(Node, {
          key: d,
          ts: 16,
          style: {
            minHeight: 48
          },
          onClick: () => run(d),
          st: me && step >= 3 ? 'res' : me ? 'sel' : null,
          t: TW[d][0]
        });
      }))) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '220px 56px 260px 56px 220px',
          rowGap: 12
        }
      }, /*#__PURE__*/React.createElement(Node, {
        ts: 18,
        style: {
          ...col(1, '1 / 4'),
          alignSelf: 'center'
        },
        st: step >= 4 ? 'res' : null,
        t: "Your agent",
        s: "One call to Aidress"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          ...col(2, '1 / 4'),
          display: 'flex'
        }
      }, /*#__PURE__*/React.createElement(Wire, {
        pad: 0,
        min: 56,
        on: step >= 1,
        dot: step === 1 ? 'r' : step === 4 ? 'l' : null
      })), /*#__PURE__*/React.createElement(Node, {
        ts: 18,
        style: {
          ...col(3, '1 / 4'),
          alignSelf: 'center',
          minHeight: 110,
          padding: 20
        },
        st: step >= 1 ? 'res' : null,
        t: "Aidress interoperability layer",
        s: "Adapts requests and responses across protocols."
      }), Object.keys(TW).map((d, k) => {
        const me = d === proto;
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: d
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            ...col(4, k + 1),
            display: 'flex'
          }
        }, /*#__PURE__*/React.createElement(Wire, {
          pad: 0,
          min: 56,
          on: me && step >= 2,
          dot: me && step === 2 ? 'r' : me && step === 4 ? 'l' : null
        })), /*#__PURE__*/React.createElement(Node, {
          ts: 18,
          style: {
            ...col(5, k + 1),
            minHeight: 56
          },
          onClick: () => run(d),
          st: me && step >= 3 ? 'res' : me ? 'sel' : null,
          t: TW[d][0]
        }));
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          font: '500 16px/1.4 var(--font-sans)'
        }
      }, "Less custom integration code. Lower development and maintenance costs."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement(Toggle, {
        open: td,
        onClick: () => setTd(!td)
      }, "Technical details"), /*#__PURE__*/React.createElement(Toggle, {
        open: mm,
        onClick: () => setMm(!mm)
      }, "Schema mismatch example")), td && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          ...fade(0)
        }
      }, Object.keys(TW).map(d => /*#__PURE__*/React.createElement("div", {
        key: d,
        style: {
          ...L2,
          color: d === proto ? INK : 'var(--text-secondary)'
        }
      }, d, " \xB7 ", TW[d][1])), /*#__PURE__*/React.createElement("div", {
        style: L2
      }, "Validation \xB7 every message is checked against the receiving schema before delivery")), mm && /*#__PURE__*/React.createElement(Row, {
        style: fade(0)
      }, /*#__PURE__*/React.createElement(Node, {
        t: "Outgoing payload",
        s: /*#__PURE__*/React.createElement("span", {
          style: L2c
        }, '{"weight": 18000, "unit": "lb"}')
      }), /*#__PURE__*/React.createElement(Wire, {
        on: true,
        label: "validate",
        min: 90
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Validation",
        st: "sel",
        s: /*#__PURE__*/React.createElement("span", {
          style: L2c
        }, "\u2715 unit: lb \u2260 kg")
      }), /*#__PURE__*/React.createElement(Wire, {
        on: true,
        label: "proposed fix",
        min: 110
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Back to your agent",
        s: /*#__PURE__*/React.createElement("span", {
          style: L2c
        }, '{"weight": 8165, "unit": "kg"}')
      }))),
      evidence: [],
      inspect: `// request ${RID} · your agent (identical for every protocol)\naidress.call("agent_freightbot_01", {"task": "book_freight", "weight": 8165, "unit": "kg"})\n\n// adapter → ${proto}\n${TW[proto][1]}\n\n// validation against receiving schema\n{"weight": "number", "unit": "kg"} → ok\n\n// response returned to your agent through Aidress`
    };
  }
  const TR = {
    Trusted: [80, 'Trusted · proceed', 'Proceed to routing'],
    Caution: [62, 'Caution · proceed with limits', 'Apply configured limits'],
    New: [40, 'New · pending review', 'Hold pending review'],
    Unregistered: [0, 'Unregistered · don’t transact', 'Stop the interaction']
  };
  function Trust({
    step,
    tier,
    setTier,
    ev,
    setEv
  }) {
    const [s, label, dec] = TR[tier];
    const ok = tier === 'Trusted';
    return {
      diagram: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }
      }, /*#__PURE__*/React.createElement(Chips, {
        items: Object.keys(TR),
        value: tier,
        onChange: setTier
      }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Node, {
        t: "Trust profile",
        s: /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            font: '500 28px/1 var(--font-sans)'
          }
        }, step >= 1 ? s : '—'), /*#__PURE__*/React.createElement("span", {
          style: L2
        }, tier === 'Unregistered' ? 'not found' : 'transaction_count 30'))
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 2,
        label: "your policy \u2265 70"
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Decision",
        st: step >= 2 && ok ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: {
            ...L2,
            color: INK
          }
        }, step >= 2 ? label : 'evaluating…'),
        style: {
          border: step >= 2 && !ok ? '2px solid ' + INK : undefined
        }
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 3 && ok,
        blocked: step >= 3 && !ok,
        label: step >= 3 ? dec : ''
      }), /*#__PURE__*/React.createElement(Node, {
        t: ok ? 'Routing' : 'Held',
        st: step >= 3 && ok ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, step >= 3 ? ok ? 'continue' : tier === 'Unregistered' ? '✕ stopped' : '⏸ limited / held' : '')
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 8
        }
      }, ['Inspect evidence', 'Authentication checks'].map(b => /*#__PURE__*/React.createElement("button", {
        key: b,
        onClick: () => setEv(ev === b ? null : b),
        style: {
          all: 'unset',
          cursor: 'pointer',
          ...mono,
          fontSize: 11,
          padding: '8px 10px',
          border: '1px solid ' + (ev === b ? INK : 'var(--border-box)')
        }
      }, ev === b ? '− ' : '+ ', b))), ev === 'Inspect evidence' && /*#__PURE__*/React.createElement("div", {
        style: {
          ...L2,
          lineHeight: 1.6,
          ...fade(0)
        }
      }, "Score is earned from real transaction outcomes and peer reviews. No self-ratings \xB7 no same-organisation ratings \xB7 one rating per transaction \xB7 capped influence per organisation."), ev === 'Authentication checks' && /*#__PURE__*/React.createElement("div", {
        style: {
          ...L2,
          lineHeight: 1.6,
          ...fade(0)
        }
      }, "Calls and reviews are authenticated. Signed requests are checked for signature validity and replay; access keys are stored hashed.")),
      evidence: [['Score', step >= 1 ? String(s) : '…'], ['State', step >= 2 ? label : '…'], ['Outcome', step >= 3 ? dec : '…']],
      inspect: `// request ${RID}\nPOST /verify\n{"agent_id": "agent_freightbot_01"}\n\n// response (illustrative)\n{"trust_score": ${s}, "verified": ${s >= 40}, "flags": []}\n\n// tiers: 70–100 trusted · 50–69 caution · 40 pending · 0 unregistered`
    };
  }
  const PAY = {
    'x402 / stablecoins': ['Stablecoin (x402)', 'Recipient wallet', '402 → pay USDC'],
    'Stripe': ['Stripe', 'Recipient Stripe account', 'payment intent'],
    'Manual invoicing': ['Invoice', 'Recipient accounts receivable', 'invoice · net 30']
  };
  function Routing({
    step,
    pay,
    setPay
  }) {
    const P = PAY[pay];
    const on = step >= 4;
    const chip = /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        padding: '7px 10px',
        background: 'var(--surface-card)',
        border: '1px solid ' + (on ? V : BOX),
        color: INK,
        whiteSpace: 'nowrap'
      }
    }, pay.split(' / ')[0], " \xB7 ", P[2], " \xB7 direct");
    return {
      h: 'Any supported rail. No Aidress transaction cut.',
      p: 'Agents pay through the methods their counterparties accept. Aidress passes payment instructions through without taking a percentage or holding funds.',
      diagram: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap'
        }
      }, ['Rail-agnostic', 'No custody', '0% Aidress transaction cut'].map(x => /*#__PURE__*/React.createElement("span", {
        key: x,
        style: {
          ...mono,
          fontSize: 11,
          padding: '8px 10px',
          border: '1px solid ' + V,
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 6,
          height: 6,
          background: V
        }
      }), x))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement(Chips, {
        items: Object.keys(PAY),
        value: pay,
        onChange: setPay
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          ...L2,
          fontSize: 12
        }
      }, "Methods this counterparty accepts")), NARROW ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(Row, {
        h: 180
      }, /*#__PURE__*/React.createElement(Node, {
        t: "Requesting agent"
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 1,
        label: "call_agent",
        dot: step === 1 ? 'r' : step === 3 ? 'l' : null
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Aidress",
        st: step >= 1 ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, "routes the request")
      }), /*#__PURE__*/React.createElement(Wire, {
        on: step >= 2,
        label: "forwarded",
        dot: step === 2 ? 'r' : step === 3 ? 'l' : null
      }), /*#__PURE__*/React.createElement(Node, {
        t: "Receiving agent",
        st: step >= 2 ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, step >= 3 ? 'accepts ' + pay : 'endpoint concealed')
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 14px',
          border: '1px solid ' + (on ? V : BOX),
          transition: 'border-color 300ms'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 11,
          color: on ? 'var(--vermilion-600)' : 'var(--text-secondary)'
        }
      }, "Payment"), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 14px/1.3 var(--font-sans)'
        }
      }, "Payer \u2192 ", P[1], ", direct. Bypasses Aidress."))) : /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,.7fr) minmax(0,1fr) minmax(0,.7fr) minmax(0,1fr)',
          rowGap: 0
        }
      }, /*#__PURE__*/React.createElement(Node, {
        t: "Requesting agent",
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, "also the payer")
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/React.createElement(Wire, {
        on: step >= 1,
        label: "call_agent",
        dot: step === 1 ? 'r' : step === 3 ? 'l' : null
      })), /*#__PURE__*/React.createElement(Node, {
        t: "Aidress",
        st: step >= 1 ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, "routes the request")
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/React.createElement(Wire, {
        on: step >= 2,
        label: "forwarded",
        dot: step === 2 ? 'r' : step === 3 ? 'l' : null
      })), /*#__PURE__*/React.createElement(Node, {
        t: "Receiving agent",
        st: step >= 2 ? 'res' : null,
        s: /*#__PURE__*/React.createElement("span", {
          style: L2
        }, step >= 3 ? 'replies: accepts ' + pay : 'endpoint concealed')
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          gridColumn: '1 / 6',
          position: 'relative',
          height: 56
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: '11.36%',
          right: '11.36%',
          top: 0,
          height: 36,
          borderLeft: '2px ' + (on ? 'solid ' + V : 'dashed ' + BOX),
          borderRight: '2px ' + (on ? 'solid ' + V : 'dashed ' + BOX),
          borderBottom: '2px ' + (on ? 'solid ' + V : 'dashed ' + BOX),
          transition: 'border-color 400ms'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: '50%',
          top: 36,
          transform: 'translate(-50%,-50%)'
        }
      }, chip))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'baseline'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 15px/1.4 var(--font-sans)'
        }
      }, "Aidress routes the request. Payment goes direct."), /*#__PURE__*/React.createElement("span", {
        style: {
          ...L2,
          fontSize: 12
        }
      }, "Provider and network fees may apply."))),
      evidence: [['Step', ['Ready', 'Request goes out', 'Forwarded by Aidress', 'Receiver replies with accepted methods', 'Payment goes direct'][step] || 'Ready'], ['Payment method', pay], ['Aidress transaction cut', '0%'], ['Funds held by Aidress', 'None'], ['Payment destination', P[1]]],
      inspect: `// request ${RID}\nPOST call_agent → receiving agent (endpoint concealed)\n\n// payment instructions passed through · ${pay}\n${pay === 'x402 / stablecoins' ? 'HTTP 402 Payment Required · x402 · USDC\n// network: EVM or Solana · verified on-chain by the parties' : pay === 'Stripe' ? 'payment_intent → recipient connected account' : 'invoice issued to caller · net 30'}\n// Aidress never holds funds · 0% Aidress transaction cut\n\n// transaction record\n{"transaction_id":"txn-xyz","status":"settled"}\n\nPOST /review\n{"caller_agent_id":"your_agent_id","receiver_agent_id":"agent_freightbot_01","transaction_id":"txn-xyz","success":true,"score":5}  // feeds Trust`
    };
  }
  const MOB = [['Who can do this?', [['Your agent', 'Describes the job in plain language.'], ['Resolver', 'Maps the wording to one capability, e.g. freight_booking.'], ['Ranked agents', 'Returns agents that can do it, with trust scores attached.']]], ['Who am I dealing with?', [['Private key', 'Generated and kept by the agent. It never leaves.'], ['agent_id', 'A permanent ID bound to the agent’s public key.'], ['Aidress', 'Verifies signed requests. No email handoff.']]], ['Different protocols. One interface.', [['Your agent', 'Makes one call to Aidress.'], ['Aidress', 'Adapts the request to the recipient’s protocol.'], ['A2A · MCP · HTTP', 'The recipient receives it in its own protocol.']]], ['Should I proceed?', [['Trust profile', 'A score earned from real transactions and reviews.'], ['Your policy', 'Compared against your own threshold, e.g. 70 or above.'], ['Decision', 'Proceed, limit, hold or stop.']]], ['Any rail. No Aidress cut.', [['Your agent', 'Sends the request through Aidress.'], ['Counterparty', 'Receives it. Its endpoint stays concealed.'], ['Payment', 'Paid directly on a rail they accept. 0% Aidress cut.']]]];
  function MobileLayers() {
    const [i, setI] = React.useState(0);
    const [s, setS] = React.useState(0);
    const [play, setPlay] = React.useState(false);
    const bar = React.useRef();
    React.useEffect(() => {
      if (!play) return;
      const t = setTimeout(() => {
        if (s < 2) setS(s + 1);else if (i < 4) {
          setI(i + 1);
          setS(0);
        } else setPlay(false);
      }, 1400);
      return () => clearTimeout(t);
    }, [play, s, i]);
    React.useEffect(() => {
      const b = bar.current;
      const el = b && b.children[i];
      if (el) b.scrollTo({
        left: el.offsetLeft - 16,
        behavior: 'smooth'
      });
    }, [i]);
    const [h, st] = MOB[i];
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-keep"
    }, /*#__PURE__*/React.createElement("div", {
      ref: bar,
      role: "tablist",
      style: {
        display: 'flex',
        gap: 6,
        overflowX: 'auto',
        margin: '0 calc(-1 * var(--gutter))',
        padding: '0 var(--gutter) 4px',
        scrollbarWidth: 'none'
      }
    }, TABS.map(([n], k) => /*#__PURE__*/React.createElement("button", {
      key: n,
      role: "tab",
      "aria-selected": k === i,
      onClick: () => {
        setPlay(false);
        setI(k);
        setS(0);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        flex: 'none',
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        height: 34,
        padding: '0 10px',
        border: '1px solid ' + (k === i ? INK : 'var(--border-box)'),
        background: k === i ? INK : 'transparent',
        color: k === i ? 'var(--paper)' : INK,
        font: '500 13px/1 var(--font-sans)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 11px/1 var(--font-mono)',
        color: k === i ? 'var(--paper)' : k < i ? V : 'var(--text-secondary)'
      }
    }, String(k + 1).padStart(2, '0')), n))), /*#__PURE__*/React.createElement("h3", {
      key: 'h' + i,
      style: {
        margin: '16px 0 0',
        font: '500 20px/1.15 var(--font-sans)',
        letterSpacing: '-0.025em',
        animation: 'ad-fade-up 260ms ' + ease + ' both'
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: 16,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 8,
        left: '16.66%',
        right: '16.66%',
        height: 2,
        background: 'var(--border-box)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 8,
        left: '16.66%',
        width: s * 33.33 + '%',
        height: 2,
        background: V,
        transition: 'width 400ms ' + ease
      }
    }), st.map(([t], k) => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => {
        setPlay(false);
        setS(k);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        position: 'relative',
        padding: '0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        boxSizing: 'border-box',
        background: k <= s ? V : 'var(--paper)',
        border: '2px solid ' + (k <= s ? V : BOX),
        boxShadow: k === s ? '0 0 0 5px rgba(232,74,39,.18)' : 'none',
        transition: 'all 300ms'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10.5,
        lineHeight: 1.25,
        textAlign: 'center',
        color: k === s ? INK : 'var(--text-secondary)'
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      key: i + '-' + s,
      style: {
        margin: 0,
        flex: 1,
        minHeight: 40,
        font: '400 15px/1.35 var(--font-sans)',
        animation: 'ad-fade-up 260ms ' + ease + ' both'
      }
    }, st[s][1]), /*#__PURE__*/React.createElement("button", {
      "aria-label": play ? 'Pause' : 'Play',
      onClick: () => {
        if (!play && s === 2 && i === 4) {
          setI(0);
          setS(0);
        }
        setPlay(!play);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        flex: 'none',
        width: 44,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-box)',
        ...mono,
        fontSize: 12
      }
    }, play ? '❚❚' : '▶')));
  }
  const STEPS = [4, 4, 5, 4, 5];
  function FiveLayers() {
    const [i, setI] = React.useState(0);
    const [step, setStep] = React.useState(0);
    const [play, setPlay] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [ex, setEx] = React.useState('Freight'),
      [pick, setPick] = React.useState(0),
      [path, setPath] = React.useState('Self-owned keys'),
      [mm, setMm] = React.useState(false),
      [td, setTd] = React.useState(false),
      [proto, setProto] = React.useState('A2A'),
      [tier, setTier] = React.useState('Trusted'),
      [ev, setEv] = React.useState(null),
      [pay, setPay] = React.useState('x402 / stablecoins');
    const narrow = useNarrow();
    NARROW = narrow;
    STEP = step;
    const max = STEPS[i] - 1;
    const tm = React.useRef([]);
    const runTerms = d => {
      setPlay(false);
      setProto(d);
      tm.current.forEach(clearTimeout);
      setStep(0);
      tm.current = [1, 2, 3, 4].map((x, k) => setTimeout(() => setStep(x), (k + 1) * 750));
    };
    React.useEffect(() => () => tm.current.forEach(clearTimeout), []);
    React.useEffect(() => {
      if (!play) return;
      const t = setTimeout(() => {
        if (step < max) setStep(step + 1);else if (i < 4) {
          setI(i + 1);
          setStep(0);
        } else setPlay(false);
      }, 1700);
      return () => clearTimeout(t);
    }, [play, step, i]);
    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const go = k => {
      setI(k);
      setStep(STEPS[k] - 1);
    };
    const L = [Discovery({
      step,
      ex,
      setEx,
      pick,
      setPick
    }), Identity({
      step,
      path,
      setPath
    }), Terms({
      step,
      proto,
      run: runTerms,
      mm,
      setMm,
      td,
      setTd
    }), Trust({
      step,
      tier,
      setTier,
      ev,
      setEv
    }), Routing({
      step,
      pay,
      setPay
    })][i];
    const E = ['Your agent describes the job in plain language. Aidress maps it to a shared capability and returns ranked agents, each with its trust profile attached.', 'Every agent has a permanent agent_id bound to a public key. The private key stays with the agent.', 'Messages are checked against the receiver’s protocol and schema before delivery. Mismatches stop at the boundary with a proposed fix.', 'The agent compares the counterparty’s trust score and evidence with its own policy, then proceeds, limits, holds or stops.', 'Aidress forwards the request to the counterparty and surfaces payment terms. Funds move directly between the parties.'][i];
    const btn = (l, fn) => /*#__PURE__*/React.createElement("button", {
      key: l,
      onClick: fn,
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 11,
        padding: '10px 12px',
        border: '1px solid var(--border-box)',
        minHeight: 20
      }
    }, l);
    if (narrow) return /*#__PURE__*/React.createElement(MobileLayers, null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
        borderBottom: '1px solid var(--border-rule)'
      }
    }, TABS.map(([n, q], k) => /*#__PURE__*/React.createElement("button", {
      key: n,
      role: "tab",
      "aria-selected": k === i,
      onClick: () => {
        setPlay(false);
        go(k);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        boxSizing: 'border-box',
        minWidth: 0,
        padding: narrow ? '14px 0 12px' : '18px 16px 16px 0',
        alignItems: narrow ? 'center' : undefined,
        minHeight: 52,
        borderBottom: '2px solid ' + (k === i ? INK : 'transparent'),
        marginBottom: -1,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: (narrow ? '500 15px/1' : '400 12px/1') + ' var(--font-mono)',
        color: narrow && (k < i || k === i && step === max) ? V : narrow && k === i ? INK : 'var(--text-secondary)'
      }
    }, String(k + 1).padStart(2, '0')), !narrow && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 16px/1 var(--font-sans)',
        color: k < i || k === i && step === max ? V : INK
      }
    }, n), !narrow && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 14px/1.2 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, q)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 24,
        padding: '26px 0 20px'
      }
    }, /*#__PURE__*/React.createElement("div", null, narrow && /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--vermilion-600)',
        marginBottom: 10
      }
    }, String(i + 1).padStart(2, '0'), " \xB7 ", TABS[i][0]), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        font: '500 28px/1.1 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, L.h || TABS[i][1]), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        font: '400 16px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 640
      }
    }, L.p || E)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flex: 'none'
      }
    }, btn(play ? '❚❚ Pause' : '▶ Play sequence', () => {
      if (!play && step === max && i === 4) {
        setI(0);
        setStep(0);
      }
      setPlay(!play);
    }), btn('Next step →', () => {
      setPlay(false);
      if (step < max) setStep(step + 1);else if (i < 4) {
        setI(i + 1);
        setStep(0);
      }
    }), btn('↺ Replay', () => {
      setStep(0);
      setPlay(!reduce);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: L.bare ? 'minmax(0,1fr)' : 'minmax(0,3fr) minmax(0,1fr)',
        border: '1px solid var(--border-box)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ad-keep",
      "aria-label": TABS[i][0] + ' diagram, step ' + (step + 1) + ' of ' + STEPS[i],
      style: {
        padding: narrow ? 18 : 28,
        overflowX: narrow ? 'visible' : 'auto',
        minHeight: L.bare ? 0 : 300,
        boxSizing: 'border-box'
      }
    }, L.diagram), !L.bare && /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: '1px solid var(--border-box)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginBottom: 10
      }
    }, RID, " \xB7 step ", step + 1, "/", STEPS[i]), L.evidence.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
        padding: '10px 0',
        borderBottom: '1px solid var(--border-subtle)',
        font: '400 14px/1.3 var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12.5px/1.3 var(--font-mono)',
        textAlign: 'right'
      }
    }, v))))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--border-box)',
        borderTop: 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      style: {
        all: 'unset',
        cursor: 'pointer',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        height: 50,
        ...mono,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("span", null, "Message inspector \xB7 request / response"), /*#__PURE__*/React.createElement("span", null, open ? '−' : '+')), open && /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '18px 20px',
        background: INK,
        color: 'var(--paper)',
        font: '400 14px/1.6 var(--font-mono)',
        whiteSpace: 'pre-wrap',
        ...fade(0)
      }
    }, L.inspect)));
  }
  window.FiveLayers = FiveLayers;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Layers5.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Research.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW && window.AidressPapers)) return setTimeout(__run, 20);
  const {
    Icon,
    SectionHeader
  } = window.AidressDesignSystem_f2dd6a;
  const {
    Band,
    monoStyle: mono
  } = window;
  const C = {
    bg: 'var(--ink-deep)',
    fg: 'var(--paper)',
    mute: '#9a9c95',
    rule: '#3a3c38'
  };
  function useNarrow(q = '(max-width: 760px)') {
    const [n, setN] = React.useState(() => matchMedia(q).matches);
    React.useEffect(() => {
      const m = matchMedia(q);
      const f = () => setN(m.matches);
      m.addEventListener('change', f);
      return () => m.removeEventListener('change', f);
    }, []);
    return n;
  }
  function Cover({
    p,
    ratio = '4 / 3'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        overflow: 'hidden',
        background: '#000'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.title + ' cover',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 700ms var(--ease-resolve)'
      }
    }));
  }
  function Card({
    p,
    open
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      onClick: open,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: '22px 0 26px',
        borderTop: '1px solid ' + (h ? '#F07A5C' : C.rule),
        color: C.fg,
        transition: 'border-color var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        ...mono,
        fontSize: 11,
        color: C.mute
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F07A5C'
      }
    }, p.cat), /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", null, p.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 clamp(22px,2.2vw,28px)/1.15 var(--font-sans)',
        letterSpacing: '-0.025em',
        textWrap: 'balance'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 15px/1.5 var(--font-sans)',
        color: '#c9c9c1'
      }
    }, p.desc), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        ...mono,
        fontSize: 11,
        color: h ? '#F07A5C' : C.fg
      }
    }, "Read ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 12
    })));
  }
  function Research({
    params,
    go
  }) {
    const D = window.AW;
    const nar = useNarrow();
    const id = params && params.id;
    const Paper = id && window.AidressPapers[id];
    if (Paper) return /*#__PURE__*/React.createElement(Paper, {
      onBack: () => go('research')
    });
    const [f, ...rest] = D.papers;
    const open = p => go('research:' + p.id);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.bg,
        color: C.fg,
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: (nar ? '48px' : '80px') + ' var(--gutter) 48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: C.mute
      }
    }, "Aidress Research"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '28px 0 0',
        font: '500 clamp(44px,7.5vw,104px)/0.95 var(--font-sans)',
        letterSpacing: '-0.055em',
        maxWidth: 1100,
        textWrap: 'balance'
      }
    }, "A research-backed startup."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '24px 0 0',
        font: '400 clamp(17px,1.6vw,21px)/1.45 var(--font-sans)',
        color: '#c9c9c1',
        maxWidth: 640
      }
    }, "We test what stops autonomous agents from transacting, publish what we find, and build the infrastructure the evidence points to.")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 var(--gutter) 64px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => open(f),
      style: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: nar ? '1fr' : 'minmax(0,520px) minmax(0,1fr)',
        gap: nar ? 20 : 48,
        alignItems: 'center',
        color: C.fg
      }
    }, /*#__PURE__*/React.createElement(Cover, {
      p: f,
      ratio: "4 / 3"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        ...mono,
        fontSize: 11,
        color: C.mute
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#F07A5C'
      }
    }, "Featured \xB7 ", f.cat), /*#__PURE__*/React.createElement("span", null, f.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 clamp(30px,3.4vw,46px)/1.02 var(--font-sans)',
        letterSpacing: '-0.04em'
      }
    }, f.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 17px/1.5 var(--font-sans)',
        color: '#c9c9c1'
      }
    }, f.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: C.mute
      }
    }, f.authors, " \xB7 ", f.meta), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignSelf: 'flex-start',
        gap: 8,
        alignItems: 'center',
        ...mono,
        fontSize: 12,
        padding: '12px 16px',
        background: 'var(--vermilion-500)',
        color: '#212320'
      }
    }, "Read the white paper ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px var(--gutter)',
        borderTop: '1px solid ' + C.rule,
        borderBottom: '1px solid ' + C.rule
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
        ...mono,
        fontSize: 11,
        color: C.mute
      }
    }, /*#__PURE__*/React.createElement("span", null, "Validation study \xB7 key findings"), /*#__PURE__*/React.createElement("a", {
      onClick: () => go('research:validation'),
      style: {
        cursor: 'pointer',
        color: C.fg,
        borderBottom: '1px solid currentColor',
        paddingBottom: 2
      }
    }, "Read the report \u2197")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: nar ? '1fr 1fr' : 'repeat(4,minmax(0,1fr))',
        gap: nar ? '28px 16px' : 0,
        marginTop: 28
      }
    }, D.findings.map(([v, l], k) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        paddingLeft: !nar && k ? 24 : 0,
        borderLeft: !nar && k ? '1px solid ' + C.rule : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 clamp(36px,4.5vw,60px)/1 var(--font-sans)',
        letterSpacing: '-0.045em',
        color: k === 0 ? '#F07A5C' : C.fg
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        font: '400 14px/1.4 var(--font-sans)',
        color: '#c9c9c1',
        maxWidth: 220
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px var(--gutter) 96px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '500 32px/1 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, "Publications"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: C.mute
      }
    }, D.papers.length, " papers")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: nar ? '1fr' : 'repeat(3,minmax(0,1fr))',
        gap: nar ? 0 : 28,
        marginTop: 24
      }
    }, rest.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      p: p,
      open: () => open(p)
    })))));
  }
  function Person({
    p
  }) {
    const [n, role, img, li, desc] = p;
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: li,
      target: "_blank",
      rel: "noopener",
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        color: 'inherit',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        background: 'var(--stone-section)',
        maxWidth: 180
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: n,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        filter: h ? 'none' : 'grayscale(1)',
        transition: 'filter var(--dur-base)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 10.5,
        color: role === 'Co-Founder' ? 'var(--vermilion-600)' : 'var(--text-secondary)'
      }
    }, role), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        font: '500 17px/1.15 var(--font-sans)',
        letterSpacing: '-0.015em'
      }
    }, n, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13.5px/1.45 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, desc));
  }
  function Crew() {
    const D = window.AW;
    const nar = useNarrow();
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeader, {
      label: "Crew",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "The people building", /*#__PURE__*/React.createElement("br", null), "the coordination layer.")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: nar ? 'repeat(2,minmax(0,1fr))' : 'repeat(5,minmax(0,1fr))',
        gap: nar ? '28px 16px' : 24,
        marginTop: 40
      }
    }, [...D.founders, ...D.advisors].map(p => /*#__PURE__*/React.createElement(Person, {
      key: p[0],
      p: p
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap',
        marginTop: 48,
        paddingTop: 24,
        borderTop: '1px solid var(--border-rule)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 22px/1.2 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, "Building with us, or want to?"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:teamaidress@gmail.com",
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        ...mono,
        fontSize: 12,
        borderBottom: '1px solid currentColor',
        paddingBottom: 4
      }
    }, "teamaidress@gmail.com ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 13
    })))));
  }
  Object.assign(window, {
    Research,
    Crew
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Research.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    LayerTabs,
    FlowDiagram,
    Icon,
    Tag
  } = window.AidressDesignSystem_f2dd6a;
  const mono = {
    font: '400 13px/1 var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.02em'
  };
  function Photo({
    id,
    label,
    src,
    credit,
    href,
    height = '100%',
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height,
        background: 'var(--stone-section)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("image-slot", {
      id: id,
      shape: "rect",
      placeholder: label,
      src: src,
      credit: credit,
      "credit-href": href
    }));
  }
  const RM = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function useScrollY() {
    const [y, setY] = React.useState(0);
    React.useEffect(() => {
      if (RM()) return;
      let r = 0;
      const f = () => {
        cancelAnimationFrame(r);
        r = requestAnimationFrame(() => setY(window.scrollY));
      };
      addEventListener('scroll', f, {
        passive: true
      });
      f();
      return () => {
        removeEventListener('scroll', f);
        cancelAnimationFrame(r);
      };
    }, []);
    return y;
  }
  function Reveal({
    children,
    delay = 0,
    style
  }) {
    const ref = React.useRef();
    const [on, setOn] = React.useState(RM());
    React.useEffect(() => {
      if (on || !ref.current) return;
      const io = new IntersectionObserver(es => {
        if (es.some(e => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      }, {
        rootMargin: '0px 0px -12% 0px'
      });
      io.observe(ref.current);
      return () => io.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(28px)',
        transition: `opacity 700ms var(--ease-resolve) ${delay}ms, transform 800ms var(--ease-resolve) ${delay}ms`,
        ...style
      }
    }, children);
  }
  function Parallax({
    children,
    speed = -0.08,
    style
  }) {
    const ref = React.useRef();
    useScrollY();
    let o = 0;
    if (ref.current && !RM()) {
      const r = ref.current.getBoundingClientRect();
      o = (r.top + r.height / 2 - innerHeight / 2) * speed;
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: `translate3d(0,${o.toFixed(1)}px,0)`,
        willChange: 'transform'
      }
    }, children));
  }
  function Band({
    tone = 'paper',
    children,
    style,
    id
  }) {
    const bg = {
      paper: 'var(--paper)',
      stone: 'var(--stone-section)',
      dark: 'var(--ink-deep)'
    }[tone];
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      style: {
        background: bg,
        color: tone === 'dark' ? 'var(--paper)' : 'var(--ink-deep)',
        padding: '64px var(--gutter)',
        ...style
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, children));
  }
  function FiveLayers({
    ind
  }) {
    const D = window.AW;
    const [i, setI] = React.useState(0);
    const [d, setD] = React.useState(0);
    const [rail, setRail] = React.useState(0);
    const L = D.layers[i];
    const rails = ind && ind.rails;
    React.useEffect(() => {
      setD(0);
    }, [i]);
    React.useEffect(() => {
      if (!(rails && i === 4)) return;
      const t = setInterval(() => setRail(r => (r + 1) % rails.length), 1300);
      return () => clearInterval(t);
    }, [i, rails]);
    const via = rails && i === 4 ? rails : L.via || [];
    const activeVia = rails && i === 4 ? rails[rail] : L.activeVia;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LayerTabs, {
      value: i,
      onChange: setI,
      items: D.LAYERS
    }), /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.3fr)',
        gap: 72,
        paddingTop: 56,
        animation: 'ad-fade-up var(--dur-slow) var(--ease-resolve)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono
      }
    }, String(i + 1).padStart(2, '0'), " / ", D.LAYERS[i]), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '22px 0 0',
        font: '500 34px/1.05 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, L.kicker), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        font: '400 17px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 440
      }
    }, L.body), ind && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0',
        font: '400 15px/1.45 var(--font-sans)',
        maxWidth: 440,
        paddingLeft: 14,
        borderLeft: '0',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--vermilion-600)',
        display: 'block',
        marginBottom: 8
      }
    }, "In ", ind.short), ind.layerNote[i]), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32,
        borderTop: '1px solid var(--border-rule)'
      }
    }, L.depth.map(([h, b], k) => {
      const on = k === d;
      return /*#__PURE__*/React.createElement("div", {
        key: h,
        onClick: () => setD(k),
        style: {
          borderBottom: '1px solid var(--border-rule)',
          padding: '14px 0',
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          font: '400 16px/1.2 var(--font-sans)',
          color: on ? 'var(--vermilion-600)' : 'var(--ink-deep)'
        }
      }, h, /*#__PURE__*/React.createElement(Icon, {
        name: on ? 'minus' : 'plus',
        size: 14
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateRows: on ? '1fr' : '0fr',
          transition: 'grid-template-rows var(--dur-base) var(--ease-resolve)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          paddingTop: 10,
          font: '400 14px/1.5 var(--font-sans)',
          color: 'var(--text-secondary)'
        }
      }, b))));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement(FlowDiagram, {
      from: {
        title: L.from[0],
        sub: L.from[1]
      },
      to: {
        title: L.to[0],
        sub: L.to[1]
      },
      label: L.label,
      via: via,
      activeVia: activeVia
    }), rails && i === 4 && /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)',
        textAlign: 'center'
      }
    }, "Rail-agnostic \xB7 same instruction, routed over ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vermilion-600)'
      }
    }, rails[rail])), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '18px 20px',
        background: 'var(--paper)',
        border: '1px solid var(--border-box)',
        font: '400 13px/1.7 var(--font-mono)',
        color: 'var(--ink-deep)',
        whiteSpace: 'pre-wrap'
      }
    }, L.record))));
  }
  function Stepper({
    ind,
    compact = false,
    onAgent,
    onCode
  }) {
    const [s, setS] = React.useState(0);
    const st = ind.steps[s];
    const last = s === ind.steps.length - 1;
    React.useEffect(() => {
      setS(0);
    }, [ind.id]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)',
        gap: 56
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)',
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '4px 6px',
        border: '1px solid var(--border-box)'
      }
    }, "Demonstration"), ind.scenario), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        borderTop: '1px solid var(--border-rule)'
      }
    }, ind.steps.map((x, k) => {
      const on = k === s,
        done = k < s;
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        onClick: () => setS(k),
        style: {
          display: 'flex',
          gap: 18,
          alignItems: 'center',
          padding: compact ? '14px 0' : '18px 0',
          borderBottom: '1px solid var(--border-rule)',
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          fontSize: 12,
          width: 24,
          color: done || on ? 'var(--vermilion-600)' : 'var(--text-secondary)'
        }
      }, String(k + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          font: '400 ' + (compact ? 17 : 19) + 'px/1.2 var(--font-sans)',
          color: on ? 'var(--vermilion-500)' : 'var(--ink-deep)'
        }
      }, x.t), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 9,
          height: 9,
          borderRadius: '50%',
          background: done ? 'var(--vermilion-500)' : on ? 'var(--ink-deep)' : 'transparent',
          border: '1px solid ' + (done ? 'var(--vermilion-500)' : 'var(--gray-box)')
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setS(x => Math.max(0, x - 1)),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 12,
        padding: '10px 14px',
        border: '1px solid var(--border-box)'
      }
    }, "\u2190 Prev"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setS(x => Math.min(ind.steps.length - 1, x + 1)),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...mono,
        fontSize: 12,
        padding: '10px 14px',
        background: 'var(--ink-deep)',
        color: 'var(--paper)'
      }
    }, "Next step \u2192"))), /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        animation: 'ad-fade-up var(--dur-slow) var(--ease-resolve)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        border: '1px solid var(--border-box)',
        background: 'var(--paper)'
      }
    }, [['What the agent needs', st.needs], ['Counterparties', st.who], ['What Aidress does', st.does], ['Passes to next step', st.next]].map(([h, b], k) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        padding: '22px 22px 26px',
        borderRight: k % 2 === 0 ? '1px solid var(--border-box)' : 'none',
        borderBottom: k < 2 ? '1px solid var(--border-box)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        font: k === 3 ? '400 14px/1.5 var(--font-mono)' : '400 16px/1.45 var(--font-sans)',
        color: k === 3 && last ? 'var(--vermilion-600)' : 'var(--ink-deep)'
      }
    }, b)))), /*#__PURE__*/React.createElement(FlowDiagram, {
      style: {
        marginTop: 28
      },
      resolved: last,
      from: {
        title: 'Requester',
        sub: ind.steps[0].who
      },
      to: {
        title: last ? 'Resolved' : 'Step ' + (s + 1) + ' / ' + ind.steps.length,
        sub: last ? st.next.replace('RESOLVED · ', '') : st.t
      },
      label: last ? 'Resolved' : 'In progress'
    }), onCode && /*#__PURE__*/React.createElement("a", {
      onClick: onCode,
      style: {
        display: 'inline-flex',
        marginTop: 22,
        ...mono,
        fontSize: 12,
        color: 'var(--vermilion-600)',
        cursor: 'pointer',
        borderBottom: '1px solid currentColor',
        paddingBottom: 3
      }
    }, "View integration example \u2192"), onAgent && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 18,
        flexWrap: 'wrap'
      }
    }, ind.agents.map(a => {
      const ag = window.AW.agentFor(a);
      return /*#__PURE__*/React.createElement(Tag, {
        key: a,
        mono: true,
        onClick: () => onAgent(a)
      }, "agent://", ag.handle, " \u2197");
    }))));
  }
  Object.assign(window, {
    Photo,
    Band,
    Reveal,
    Parallax,
    useScrollY,
    FiveLayers,
    Stepper,
    monoStyle: mono
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteApp.jsx
try { (() => {
(() => {
  const SITE = {
    home: 'main',
    industries: 'main',
    industry: 'main',
    scoped: 'main',
    crew: 'main',
    developers: 'main',
    docs: 'main',
    impact: 'main',
    atlas: 'atlas',
    passport: 'atlas',
    research: 'research'
  };
  const MAIN_LINKS = ['Platform', 'Industries', 'Developers', 'Research', 'Company'];
  const MAIN_TO = {
    Platform: 'home',
    Industries: 'industries',
    Developers: 'developers',
    Research: 'research',
    Company: 'crew'
  };
  const docSlug = re => {
    try {
      for (const g of window.AidressDocs.sidebarNav) for (const i of g.items) if (re.test(i.label)) return 'docs:' + i.slug;
    } catch (e) {}
    return 'docs';
  };
  const MENUS = () => ({
    Platform: [['Five layers', 'home'], ['Atlas', 'atlas']],
    Developers: [['Overview', 'developers'], ['Docs', 'docs'], ['Quickstart', docSlug(/quick/i)], ['API reference', docSlug(/api/i)], ['MCP server', docSlug(/mcp/i)], ['GitHub ↗', 'ext:https://github.com/Aidress-ai/Aidress']],
    Company: [['Aidress for Good', 'impact'], ['Crew', 'crew'], ['Contact', 'ext:mailto:teamaidress@gmail.com']]
  });
  const nav = (go, k) => {
    if (k.startsWith('ext:')) {
      window.open(k.slice(4), '_blank');
      return;
    }
    go(MAIN_TO[k] || k);
  };
  const U = 'https://aidress.ai',
    API = 'https://api.aidress.ai';
  function machineText(r) {
    const D = window.AW;
    const L = (label, to) => '[' + label + '](#' + to + ')';
    const head = 'Aidress: the coordination protocol for autonomous AI agents. ' + L('Learn more.', 'home') + '\n' + L('Aidress', 'home') + '\n' + 'Platform:' + L('Five layers', 'home') + L('Atlas', 'atlas') + L('Agent Passport', 'passport') + '\n' + 'Industries:' + Object.values(D.industries).map(i => L(i.title, 'industry:' + i.id)).join('') + L('Scoped registries', 'scoped') + '\n' + 'Developers:' + L('Quickstart', 'developers') + '[Onboard your agent](' + U + '/agents.md)[API reference](' + U + '/docs/api)[MCP server](' + U + '/docs/mcp)[CLI](' + U + '/docs/cli)[Python SDK](https://pypi.org/project/aidress/)[TypeScript SDK](https://www.npmjs.com/package/@aidress/sdk)[GitHub](https://github.com/aidress)[Status](' + U + '/status)\n' + 'Resources:' + L('Research', 'research') + L('Aidress for Good', 'impact') + L('Crew', 'crew') + '[Changelog](' + U + '/changelog)\n';
    const api = '\n## API entry points\nPOST ' + API + '/v1/discover   find counterparties by capability\nGET  ' + API + '/v1/agents/{id}   passport (identity, operator, endpoint, key)\nPOST ' + API + '/v1/evaluate   trust evidence against a policy\nGET  ' + API + '/v1/agents/{id}/terms   declared pricing, inputs, conditions\nPOST ' + API + '/v1/resolve   interface + settlement rail\nMCP tools: aidress.discover, aidress.passport, aidress.evaluate, aidress.terms, aidress.resolve\n\n## Onboarding instructions for agents\n' + D.onboard;
    const p = r.params || {};
    let body = '';
    if (r.name === 'home') {
      body = '# The coordination protocol for autonomous AI agents.\nAidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop.\n\n## Five layers\n' + D.layers2.map((l, i) => i + 1 + '. ' + D.LAYERS[i] + ': ' + l.kicker + ' ' + l.body).join('\n') + '\n\n## Industries\n' + Object.values(D.industries).map(i => '- ' + L(i.title, 'industry:' + i.id) + ': ' + i.use).join('\n') + '\n' + api;
    } else if (r.name === 'industries') {
      body = '# Industries\n' + Object.values(D.industries).map(i => '- ' + L(i.title, 'industry:' + i.id) + ' (' + i.code + '): ' + i.use).join('\n');
    } else if (r.name === 'industry' && (D.industries[p.id] || D.industries.logistics).soon && !(D.flags && D.flags.industriesLive)) {
      const i = D.industries[p.id] || D.industries.logistics;
      body = '# ' + i.title + ' (coming soon)\n' + i.soon.intro + '\n\n## How it will work\n' + i.soon.flow.map((f, k) => k + 1 + '. ' + f[0] + ': ' + f[1]).join('\n');
    } else if (r.name === 'industry') {
      const i = D.industries[p.id] || D.industries.logistics;
      body = '# ' + i.title + ' (' + i.code + ')\n' + i.lead + '\nScenario: ' + i.scenario + '\n\n## Workflow (demonstration)\n' + i.steps.map((s, k) => k + 1 + '. ' + s.t + '\n   needs: ' + s.needs + '\n   counterparties: ' + s.who + '\n   aidress: ' + s.does + '\n   output: ' + s.next).join('\n') + '\n\n## Layers\n' + D.LAYERS.map((l, k) => '- ' + l + ': ' + i.layerNote[k]).join('\n') + (i.rails ? '\nrails: ' + i.rails.join(', ') : '') + '\n\n## Integration example\n' + i.example + '\n\n## Agents\n' + i.agents.map(a => '- ' + L('agent://' + D.agentFor(a).handle + '.aidress', 'passport:' + a)).join('\n');
    } else if (r.name === 'scoped') {
      body = '# Scoped registries (coming soon)\nYour agents. Your rules. The same protocol.\nA scoped registry for your organisation, consortium or network.\n- Scoped discovery: only agents you approve can find each other\n- Your trust rules: your own thresholds, attestations and reviews\n- Same API: the same /verify and /match calls\n- Gateway: you choose which agents are published to the public registry\ncontact: teamaidress@gmail.com';
    } else if ((r.name === 'atlas' || r.name === 'passport') && D.flags && !D.flags.atlasLive) {
      body = '# Atlas (coming soon)\nThe registry, made visible for humans.\nstatus: in development';
    } else if (r.name === 'atlas') {
      body = '# Atlas: live registry\nagents=10482; discovery_p50=210ms\n\n## Agents\n' + Object.keys(D.agents).map(k => {
        const a = D.agents[k];
        return '- ' + L(a.name, 'passport:' + k) + ' agent://' + a.handle + '.aidress trust=' + a.trust + ' interfaces=' + a.protocols.join(',');
      }).join('\n') + '\n' + api;
    } else if (r.name === 'passport') {
      const a = D.agentFor(p.id || 'A');
      body = '# Agent Passport\n' + JSON.stringify({
        id: 'agent://' + a.handle + '.aidress',
        name: a.name,
        operator: a.owner,
        type: a.type,
        industry: a.industry,
        verified: a.verified,
        trust: {
          score: a.trust,
          attestations: ['kyb', 'iso27001'],
          disputes_12mo: 0
        },
        interfaces: a.protocols,
        capabilities: a.capabilities
      }, null, 2) + '\n\nlookup: GET ' + API + '/v1/agents/' + a.handle + '\n' + L('Back to Atlas', 'atlas');
    } else if (r.name === 'developers') {
      body = '# Developers\n1. pip install aidress-sdk\n2. aidress register my_agent_01 "Acme Corp" acme.com bot@acme.com\n3. aidress match freight_booking && aidress verify <agent_id>\n\n' + D.snippets.map(s => '## ' + s.label + '\n' + s.code).join('\n\n') + '\n\n## Open source\n' + D.oss.map(o => '- ' + o[0] + ': ' + o[1] + ' (' + o[2] + ', ' + o[3] + ')').join('\n') + '\n' + api;
    } else if (r.name === 'research') {
      body = '# Aidress Research: a research-backed startup\n\n## Key findings (validation study)\n' + D.findings.map(f => '- ' + f[0] + ' ' + f[1]).join('\n') + '\n\n## Publications\n' + D.papers.map(x => '- [' + x.title + '](' + x.url + ') — ' + x.cat + ', ' + x.date + '. ' + x.desc).join('\n');
    } else if (r.name === 'impact') {
      body = '# Aidress for Good\nTrust infrastructure doesn’t care who’s using it.\nThe same protocol that lets agents book freight can let a farmer’s agent reach a bank, an NGO, or a government service — safely.\n\n## The five layers, applied wider\n- Discovery: reach trusted services, not a fragmented system\n- Identity: establish who’s acting, and who’s accountable\n- Trust: reduce fraud, impersonation, unsafe delegation\n- Permissions & Terms: preserve consent, spending limits, human control\n- Routing & Audit: improve transparency across institutions\n\n## Where it applies (illustrative)\n- Smallholder agriculture\n- Financial inclusion\n- Disaster response\n\ncontact: teamaidress@gmail.com';
    } else if (r.name === 'crew') {
      body = '# Crew\nAidress is registered in Singapore. A Delaware C-corp is in progress.\n\n## Founders\n' + D.founders.map(c => '- ' + c[0] + ' (' + c[1] + '): ' + c[4]).join('\n') + '\n\n## Advisors\n' + D.advisors.map(c => '- ' + c[0] + ' (' + c[1] + '): ' + c[4]).join('\n') + '\n\ncontact: teamaidress@gmail.com';
    }
    return head + '\n' + body + '\n';
  }
  function GH({
    dark
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: "https://github.com/Aidress-ai/Aidress",
      target: "_blank",
      style: {
        font: '400 12px/1 var(--font-mono)',
        textTransform: 'uppercase',
        color: dark ? 'var(--paper)' : 'var(--ink-deep)',
        border: '1px solid ' + (dark ? '#444' : 'var(--border-box)'),
        padding: '8px 10px',
        whiteSpace: 'nowrap'
      }
    }, "GitHub \u2197");
  }
  const PAGES = [['Five layers', 'Platform', 'home'], ['Atlas', 'Platform', 'atlas'], ['Agent passport', 'Platform', 'passport'], ['Developers', 'Developers', 'developers'], ['Docs', 'Developers', 'docs'], ['Research', 'Resources', 'research'], ['Aidress for Good', 'Company', 'impact'], ['Crew', 'Company', 'crew'], ['Industries', 'Industries', 'industries'], ['Scoped registries', 'Industries', 'scoped']];
  function searchIndex() {
    const D = window.AW;
    return [...PAGES, ...Object.values(D.industries).map(i => [i.title, 'Industry', 'industry:' + i.id]), ...Object.keys(D.agents).map(k => [D.agents[k].name + ' · agent://' + D.agents[k].handle, 'Agent', 'passport:' + k]), ...['A2A', 'MCP', 'x402', 'HTTP'].map(p => [p + ' protocol', 'Protocol', 'docs']), ...D.papers.map(p => [p.title, 'Research', 'research:' + p.id]), ...window.AidressDocs.sidebarNav.flatMap(g => g.items.map(i => [i.label, 'Docs · ' + g.title, 'docs:' + i.slug]))];
  }
  function SiteSearch({
    go,
    onClose
  }) {
    const {
      SearchInput
    } = window.AidressDesignSystem_f2dd6a;
    const [q, setQ] = React.useState('');
    const all = React.useMemo(searchIndex, []);
    const res = (q ? all.filter(r => (r[0] + ' ' + r[1]).toLowerCase().includes(q.toLowerCase())) : all.slice(0, 8)).slice(0, 8);
    React.useEffect(() => {
      const k = e => {
        if (e.key === 'Escape') onClose();
      };
      addEventListener('keydown', k);
      setTimeout(() => {
        const i = document.querySelector('#ad-search input');
        i && i.focus();
      }, 30);
      return () => removeEventListener('keydown', k);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'var(--overlay-scrim)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 110
      }
    }, /*#__PURE__*/React.createElement("div", {
      id: "ad-search",
      onClick: e => e.stopPropagation(),
      style: {
        width: 'min(640px,92vw)',
        background: 'var(--surface-card)',
        border: '1px solid var(--ink)',
        boxShadow: '0 20px 60px rgba(22,22,22,.18)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 12,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(SearchInput, {
      size: "lg",
      value: q,
      onChange: setQ,
      placeholder: "Search agents, industries, protocols or pages\u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: 380,
        overflowY: 'auto'
      }
    }, res.length ? res.map(([l, c, to]) => /*#__PURE__*/React.createElement("a", {
      key: l + to,
      onClick: () => {
        go(to);
        onClose();
      },
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        padding: '12px 18px',
        cursor: 'pointer',
        borderBottom: '1px solid var(--border-subtle)',
        font: '400 15px/1.3 var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 11px/1.3 var(--font-mono)',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)'
      }
    }, c))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18,
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, "No results for \u201C", q, "\u201D."))));
  }
  const pill = dark => ({
    all: 'unset',
    cursor: 'pointer',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    height: 34,
    padding: '0 10px',
    font: '400 12px/1 var(--font-mono)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    color: dark ? 'var(--paper)' : 'var(--ink-deep)',
    border: '1px solid ' + (dark ? '#444' : 'var(--border-box)')
  });
  function App() {
    const {
      NavBar,
      ModeToggle,
      MachineView
    } = window.AidressDesignSystem_f2dd6a;
    const init = (() => {
      try {
        return JSON.parse(localStorage.getItem('aidress-site-route')) || {
          name: 'home',
          params: {}
        };
      } catch (e) {
        return {
          name: 'home',
          params: {}
        };
      }
    })();
    const [route, setRoute] = React.useState(init);
    const [mode, setMode] = React.useState(() => localStorage.getItem('aidress-site-mode') || 'human');
    const go = (name, params = {}) => {
      if (name.includes(':')) {
        const [n, id] = name.split(':');
        name = n;
        params = {
          id
        };
      }
      const r = {
        name,
        params
      };
      setRoute(r);
      localStorage.setItem('aidress-site-route', JSON.stringify(r));
      window.scrollTo({
        top: 0
      });
    };
    window.__adGo = go;
    const [theme, setTheme] = React.useState(() => localStorage.getItem('aidress-site-theme') || 'light');
    const [sOpen, setSOpen] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    React.useEffect(() => {
      const k = e => {
        if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
          e.preventDefault();
          setSOpen(true);
        }
      };
      addEventListener('keydown', k);
      return () => removeEventListener('keydown', k);
    }, []);
    const setM = m => {
      setMode(m);
      localStorage.setItem('aidress-site-mode', m);
    };
    const site = SITE[route.name] || 'main';
    const S = {
      home: window.Home,
      industries: window.Industries,
      industry: window.IndustryDetail,
      scoped: window.ScopedRegistries,
      crew: window.Crew,
      developers: window.Developers,
      docs: window.Docs,
      impact: window.Impact,
      atlas: window.AW.flags && !window.AW.flags.atlasLive ? window.AtlasSoon : window.Atlas,
      passport: window.AW.flags && !window.AW.flags.atlasLive ? window.AtlasSoon : window.Passport,
      research: window.Research
    }[route.name] || window.Home;
    const dark = site === 'research' && mode === 'human';
    // Research is authored dark; every other page light. Invert whichever one disagrees with the saved theme so the mode is identical everywhere.
    React.useEffect(() => {
      const inv = theme === 'dark' !== dark;
      document.documentElement.dataset.theme = inv ? 'dark' : 'light';
      try {
        localStorage.setItem('aidress-site-theme', theme);
      } catch (e) {}
    }, [theme, dark]);
    const {
      Icon
    } = window.AidressDesignSystem_f2dd6a;
    const extra = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Search",
      onClick: () => setSOpen(true),
      style: pill(dark)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14
    }), /*#__PURE__*/React.createElement("span", {
      className: "ad-hide-mobile"
    }, "Search ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .55
      }
    }, "/"))), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Toggle dark mode",
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      style: pill(dark)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        border: '1.5px solid currentColor',
        background: theme === 'dark' ? 'currentColor' : 'transparent',
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "ad-hide-mobile"
    }, theme === 'dark' ? 'Light' : 'Dark')), /*#__PURE__*/React.createElement("span", {
      className: "ad-hide-mobile",
      style: {
        display: 'contents'
      }
    }, /*#__PURE__*/React.createElement(ModeToggle, {
      value: mode,
      onChange: setM,
      tone: dark ? 'dark' : 'light'
    })), /*#__PURE__*/React.createElement("button", {
      className: "ad-mobile-only",
      "aria-label": "Menu",
      onClick: () => setMenu(true),
      style: pill(dark)
    }, "Menu"));
    let header;
    if (site === 'atlas') header = /*#__PURE__*/React.createElement(NavBar, {
      logo: dark ? '../../assets/logo-mark-paper.png' : '../../assets/logo-mark-ink.png',
      sticky: true,
      sub: "Atlas",
      links: ['Network', 'Passports', 'Developers', 'aidress.ai ↗'],
      active: route.name === 'passport' ? 'Passports' : 'Network',
      onNavigate: l => l === 'aidress.ai ↗' ? go('home') : l === 'Developers' ? go('developers') : l === 'Passports' ? go('passport', {
        id: 'A'
      }) : go('atlas'),
      onHome: () => go('home'),
      extra: extra,
      search: false,
      cta: "Register Agent",
      onCta: () => go('developers')
    });else if (site === 'research') header = /*#__PURE__*/React.createElement(NavBar, {
      logo: dark ? '../../assets/logo-mark-paper.png' : '../../assets/logo-mark-ink.png',
      sticky: true,
      tone: dark ? 'dark' : 'light',
      sub: "Research",
      links: ['Publications', 'White paper', 'aidress.ai ↗'],
      active: route.params && route.params.id === 'whitepaper' ? 'White paper' : 'Publications',
      onNavigate: l => l === 'aidress.ai ↗' ? go('home') : l === 'White paper' ? go('research:whitepaper') : go('research'),
      onHome: () => go('home'),
      extra: extra,
      search: false,
      cta: null
    });else header = /*#__PURE__*/React.createElement(NavBar, {
      logo: dark ? '../../assets/logo-mark-paper.png' : '../../assets/logo-mark-ink.png',
      sticky: true,
      links: MAIN_LINKS,
      active: {
        home: 'Platform',
        industries: 'Industries',
        industry: 'Industries',
        scoped: 'Industries',
        crew: 'Company',
        developers: 'Developers',
        docs: 'Developers',
        impact: 'Company'
      }[route.name],
      menus: MENUS(),
      onNavigate: k => nav(go, k),
      onHome: () => go('home'),
      extra: extra,
      search: false,
      cta: "Connect agent",
      onCta: () => go('developers')
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        minHeight: '100vh',
        background: dark ? 'var(--ink-deep)' : 'var(--paper)'
      }
    }, header, mode === 'machine' ? /*#__PURE__*/React.createElement(MachineView, {
      text: machineText(route),
      onLink: to => go(to)
    }) : /*#__PURE__*/React.createElement("main", {
      key: route.name + JSON.stringify(route.params),
      style: {
        animation: 'ad-fade-up var(--dur-slow) var(--ease-resolve)'
      }
    }, /*#__PURE__*/React.createElement(S, {
      go: go,
      params: route.params || {}
    })), mode === 'human' && site !== 'atlas' && window.BigFooter && /*#__PURE__*/React.createElement(window.BigFooter, {
      go: go
    }), menu && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        padding: '18px 20px 28px',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        font: '700 22px/1 var(--font-sans)',
        letterSpacing: '-0.035em'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark-ink.png",
      alt: "",
      className: "ad-noflip",
      style: {
        width: 24,
        height: 24,
        objectFit: 'contain'
      }
    }), "AIDRESS"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setMenu(false),
      style: pill(false)
    }, "Close")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 24,
        borderTop: '1px solid var(--border-rule)'
      }
    }, MAIN_LINKS.map(x => {
      const it = MENUS()[x];
      return /*#__PURE__*/React.createElement("div", {
        key: x,
        style: {
          padding: '16px 0',
          borderBottom: '1px solid var(--border-rule)'
        }
      }, /*#__PURE__*/React.createElement("a", {
        onClick: () => {
          setMenu(false);
          go(MAIN_TO[x]);
        },
        style: {
          font: '500 26px/1 var(--font-sans)',
          letterSpacing: '-0.03em',
          cursor: 'pointer'
        }
      }, x), it && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 16px',
          marginTop: 12
        }
      }, it.map(([t, k]) => /*#__PURE__*/React.createElement("a", {
        key: t,
        onClick: () => {
          setMenu(false);
          nav(go, k);
        },
        style: {
          font: '400 14px/1.2 var(--font-sans)',
          color: 'var(--text-secondary)',
          cursor: 'pointer'
        }
      }, t))));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      style: pill(false)
    }, theme === 'dark' ? 'Light mode' : 'Dark mode'), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setM(mode === 'human' ? 'machine' : 'human');
        setMenu(false);
      },
      style: pill(false)
    }, mode === 'human' ? 'Machine view' : 'Human view')), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setMenu(false);
        go('developers');
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        marginTop: 'auto',
        textAlign: 'center',
        padding: '16px',
        background: 'var(--vermilion-500)',
        color: '#fff',
        font: '500 17px/1 var(--font-sans)'
      }
    }, "Connect agent")), sOpen && /*#__PURE__*/React.createElement(SiteSearch, {
      go: go,
      onClose: () => setSOpen(false)
    }));
  }
  const NEED = ['Home', 'Industries', 'IndustryDetail', 'Crew', 'Developers', 'Docs', 'Atlas', 'Passport', 'Research', 'Impact', 'BigFooter', 'FiveLayers'];
  (function boot(n) {
    if (window.__adBooted || !window.__adKitEntry) return;
    const DS = window.AidressDesignSystem_f2dd6a;
    if (DS && DS.NavBar && NEED.every(k => window[k]) || n > 400) {
      window.__adBooted = true;
      ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
    } else setTimeout(() => boot(n + 1), 25);
  })(0);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteAtlas.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    NetworkGraph,
    AgentPanel,
    RadioList,
    SearchInput,
    StatRow,
    TextLink,
    Avatar,
    Badge,
    Button,
    Tabs,
    KeyValueList,
    ActivityList,
    TrustMeter,
    Tag,
    Accordion
  } = window.AidressDesignSystem_f2dd6a;
  const {
    monoStyle: mono,
    HeroTrace,
    CopyBtn
  } = window;
  const FEED = [['vector-logistics', 'clearport', 'A2A', 'customs.file'], ['ledgerline', 'straits-components', 'x402', 'settle.eur'], ['northlane', 'lastmile', 'A2A', 'parcel.book'], ['corpus', 'relay', 'MCP', 'search.papers'], ['mediscan', 'ledgerline', 'x402', 'settle.usd'], ['harbor-planner', 'vector-logistics', 'A2A', 'freight.book'], ['relay', 'corpus', 'MCP', 'summarise']];
  const ago = t => {
    if (!t) return '';
    const m = Math.max(1, Math.round((Date.now() - new Date(t)) / 60000));
    return m < 60 ? m + 'm ago' : m < 1440 ? Math.round(m / 60) + 'h ago' : Math.round(m / 1440) + 'd ago';
  };
  function liveToPanel(a, full) {
    const p = full || a;
    const caps = (p.capabilities || []).map(window.AidressAPI.capName);
    return {
      name: p.agent_id,
      letter: (p.org_name || p.agent_id || '?')[0].toUpperCase(),
      verified: !!p.verified,
      description: [p.org_name, p.org_domain].filter(Boolean).join(' · ') || 'Registered agent',
      trust: Math.round(p.trust_score || 0),
      stats: [{
        label: 'Transactions',
        value: p.transaction_count != null ? String(p.transaction_count) : '—'
      }, {
        label: 'Success rate',
        value: p.success_rate != null ? p.success_rate + '%' : '—'
      }, {
        label: 'Routing',
        value: p.routing && (p.routing.protocol || '') + (p.routing.settlement_rail ? ' · ' + p.routing.settlement_rail : '') || '—',
        mono: true
      }],
      capabilities: caps,
      transactions: (p.ratings_received || []).slice(0, 5).map(r => ({
        text: /*#__PURE__*/React.createElement("span", null, "Rated ", r.score, "/10 by ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)'
          }
        }, r.rater_agent_id)),
        time: ago(r.created_at),
        resolved: r.score >= 7
      }))
    };
  }
  function useLiveRegistry() {
    const [st, setSt] = React.useState({
      status: 'loading'
    });
    React.useEffect(() => {
      let off = false;
      window.AidressAPI.registry(100).then(list => {
        if (off) return;
        const g = window.AidressAPI.toGraph(list);
        setSt(g.agents.length ? {
          status: 'live',
          ...g
        } : {
          status: 'demo',
          error: 'empty registry'
        });
      }).catch(e => {
        if (!off) setSt({
          status: 'demo',
          error: String(e.message || e)
        });
      });
      return () => {
        off = true;
      };
    }, []);
    return st;
  }
  function Atlas({
    go,
    params
  }) {
    const live = useLiveRegistry();
    const isLive = live.status === 'live';
    const [full, setFull] = React.useState({});
    const D = window.AW;
    const [sel, setSel] = React.useState(params.selected || 'A');
    const [ind, setInd] = React.useState('all');
    const [feed, setFeed] = React.useState(() => FEED.slice(0, 5).map((f, i) => ({
      f,
      ms: 180 + i * 37,
      k: i
    })));
    const [n, setN] = React.useState(14208311);
    React.useEffect(() => {
      let k = 10;
      const t = setInterval(() => {
        k++;
        setN(x => x + Math.round(4 + Math.random() * 9));
        setFeed(fs => [{
          f: FEED[k % FEED.length],
          ms: Math.round(120 + Math.random() * 260),
          k
        }, ...fs].slice(0, 7));
      }, 1500);
      return () => clearInterval(t);
    }, []);
    React.useEffect(() => {
      if (isLive && !live.agents.find(x => x.agent_id === sel)) setSel(live.agents[0].agent_id);
    }, [isLive]);
    const liveA = isLive && live.agents.find(x => x.agent_id === sel);
    React.useEffect(() => {
      if (liveA && !full[sel]) window.AidressAPI.agent(sel).then(p => setFull(f => ({
        ...f,
        [sel]: p
      }))).catch(() => {});
    }, [sel, isLive]);
    const a = liveA ? null : D.agentFor(sel);
    const panel = liveA ? liveToPanel(liveA, full[sel]) : null;
    const nVer = isLive ? live.agents.filter(x => x.verified).length : 0;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '40px var(--gutter) 28px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: isLive ? 'var(--vermilion-600)' : 'var(--text-secondary)'
      },
      title: live.error || ''
    }, isLive ? '● Live · ' + window.AidressAPI.base.replace('https://', '') : live.status === 'loading' ? '○ Connecting to api.aidress.ai…' : '○ Demo data · registry API unreachable'), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '18px 0 0',
        font: '500 56px/1 var(--font-sans)',
        letterSpacing: '-0.045em'
      }
    }, "The live agentic economy.")), /*#__PURE__*/React.createElement(StatRow, {
      stats: isLive ? [{
        value: live.agents.length + (live.agents.length >= 100 ? '+' : ''),
        label: 'Agents'
      }, {
        value: String(nVer),
        label: 'Verified',
        accent: true
      }, {
        value: String(live.clusters.length),
        label: 'Top capabilities'
      }, {
        value: '<50ms',
        label: '/verify latency'
      }] : [{
        value: '10,482',
        label: 'Agents'
      }, {
        value: '50+',
        label: 'Industries'
      }, {
        value: n.toLocaleString('en-GB'),
        label: 'Resolutions',
        accent: true
      }, {
        value: '210ms',
        label: 'Median discovery'
      }]
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'var(--sidebar-width) minmax(0,1fr) var(--panel-width)'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        padding: '24px 22px 28px var(--gutter)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement(SearchInput, {
      placeholder: "Search agents, capabilities\u2026",
      shortcut: "/"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginBottom: 12
      }
    }, isLive ? 'Cluster by capability' : 'Cluster by industry'), /*#__PURE__*/React.createElement(RadioList, {
      value: ind,
      onChange: setInd,
      items: isLive ? [{
        value: 'all',
        label: 'All',
        count: live.agents.length
      }, ...live.clusters] : [['all', 'All', '10,482'], ['logistics', 'Logistics', 482], ['finance', 'Payments & Finance', 389], ['retail', 'Commerce', 276], ['research', 'Research', '1,004'], ['healthcare', 'Healthcare', 221], ['devtools', 'Developer Tools', 702]].map(([value, label, count]) => ({
        value,
        label,
        count
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        marginBottom: 12
      }
    }, isLive ? 'Highest trust' : 'Live resolutions'), isLive ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, live.agents.slice(0, 7).map(x => /*#__PURE__*/React.createElement("a", {
      key: x.agent_id,
      onClick: () => setSel(x.agent_id),
      style: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        font: '400 11px/1.45 var(--font-mono)',
        color: x.agent_id === sel ? 'var(--vermilion-600)' : 'var(--ink-deep)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, x.verified ? '✓ ' : '', x.agent_id), /*#__PURE__*/React.createElement("span", null, Math.round(x.trust_score || 0))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, feed.map(({
      f,
      ms,
      k
    }, i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        font: '400 11px/1.45 var(--font-mono)',
        color: i === 0 ? 'var(--ink-deep)' : 'var(--text-secondary)',
        animation: i === 0 ? 'ad-fade-up var(--dur-base) var(--ease-resolve)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vermilion-600)'
      }
    }, "\u2713"), " ", f[0], " \u2192 ", f[1], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-tertiary)'
      }
    }, f[3], " \xB7 ", f[2], " \xB7 ", ms, "ms")))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: 0
      }
    }, isLive ? /*#__PURE__*/React.createElement(NetworkGraph, {
      nodes: live.nodes,
      edges: live.edges,
      selectedId: sel,
      focusIndustry: ind,
      onSelect: n => {
        if (n.id.startsWith('cap:')) setInd(n.id.slice(4));else if (n.id !== '__hub') setSel(n.id);
      }
    }) : /*#__PURE__*/React.createElement(NetworkGraph, {
      selectedId: sel,
      focusIndustry: ind,
      onSelect: n => setSel(n.id)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        marginTop: 12
      }
    }, "Hover to inspect \xB7 click to resolve \xB7 orange = resolved route")), panel ? /*#__PURE__*/React.createElement(AgentPanel, _extends({
      key: sel
    }, panel, {
      onViewProfile: () => go('passport', {
        id: sel
      }),
      style: {
        animation: 'ad-fade-up var(--dur-base) var(--ease-resolve)'
      }
    })) : /*#__PURE__*/React.createElement(AgentPanel, {
      key: sel,
      name: a.name,
      letter: a.letter,
      description: a.description,
      trust: a.trust,
      stats: [{
        label: 'Transactions',
        value: a.transactions
      }, {
        label: 'Connected Agents',
        value: a.connected
      }, {
        label: 'Protocols',
        value: a.protocols.join(', '),
        mono: true
      }],
      capabilities: a.capabilities,
      transactions: a.activity,
      onViewProfile: () => go('passport', {
        id: sel
      }),
      style: {
        animation: 'ad-fade-up var(--dur-base) var(--ease-resolve)'
      }
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        padding: '48px var(--gutter) 64px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)',
        gap: 48,
        background: 'var(--stone-section)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12
      }
    }, "Request trace"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '18px 0 28px',
        font: '500 44px/1 var(--font-sans)',
        letterSpacing: '-0.045em'
      }
    }, "What an agent sees when it asks."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)',
        padding: '8px 20px 18px',
        border: '1px solid var(--border-box)'
      }
    }, /*#__PURE__*/React.createElement(HeroTrace, {
      height: 400,
      onNode: id => setSel(id),
      onResolve: id => go('passport', {
        id
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'end',
        background: 'var(--ink-deep)',
        color: 'var(--paper)',
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Same query, programmatically"), /*#__PURE__*/React.createElement(CopyBtn, {
      text: 'curl -X POST https://api.aidress.ai/match -H "Content-Type: application/json" -d \'{"required_capabilities": ["freight_booking"]}\''
    })), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: '14px 0 0',
        font: '400 12.5px/1.7 var(--font-mono)',
        whiteSpace: 'pre-wrap'
      }
    }, 'POST /match\n{"required_capabilities": ["freight_booking"]}\n\n→ ranked by trust + match + success rate\nPOST /verify {"agent_id": "…"}\n', /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#f29a7f'
      }
    }, '→ verified: true · trust_score ≥ 70 · proceed')))));
  }
  function LivePassport({
    go,
    id
  }) {
    const [p, setP] = React.useState(null);
    const [err, setErr] = React.useState(null);
    const [view, setView] = React.useState('profile');
    React.useEffect(() => {
      window.AidressAPI.agent(id).then(setP).catch(e => setErr(String(e.message || e)));
    }, [id]);
    const H = ({
      n,
      t
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'baseline',
        paddingBottom: 14,
        borderBottom: '1px solid var(--border-rule)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 22px/1 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, t));
    if (err) return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      onClick: () => go('atlas')
    }, "Back to the Atlas"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 16px/1.5 var(--font-sans)',
        marginTop: 24
      }
    }, "Couldn\u2019t load ", /*#__PURE__*/React.createElement("code", null, id), " from the registry (", err, ")."));
    if (!p) return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px var(--gutter)',
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, "Loading ", id, " from api.aidress.ai\u2026");
    const caps = (p.capabilities || []).map(window.AidressAPI.capName);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '36px var(--gutter) 40px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      onClick: () => go('atlas', {
        selected: id
      })
    }, "Back to the Atlas"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      letter: (p.org_name || p.agent_id)[0].toUpperCase(),
      size: 96,
      tone: p.verified ? 'resolved' : 'neutral',
      ring: p.verified
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 240
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, "Agent passport \xB7 live registry record"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '14px 0 0',
        font: '500 clamp(32px,4.5vw,56px)/1 var(--font-sans)',
        letterSpacing: '-0.04em',
        overflowWrap: 'anywhere'
      }
    }, p.agent_id), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        marginTop: 16,
        flexWrap: 'wrap'
      }
    }, p.verified ? /*#__PURE__*/React.createElement(Badge, {
      size: "lg"
    }, "Verified") : /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, "Unverified"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, [p.org_name, p.org_domain].filter(Boolean).join(' · ')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        border: '1px solid var(--border-box)',
        padding: 2,
        gap: 2
      }
    }, ['profile', 'json'].map(x => /*#__PURE__*/React.createElement("button", {
      key: x,
      onClick: () => setView(x),
      style: {
        all: 'unset',
        cursor: 'pointer',
        padding: '7px 11px',
        ...mono,
        fontSize: 12,
        background: view === x ? 'var(--ink-deep)' : 'transparent',
        color: view === x ? 'var(--paper)' : 'var(--text-secondary)'
      }
    }, x === 'json' ? 'JSON' : 'Profile'))))), view === 'json' ? /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '32px var(--gutter) 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-deep)',
        color: 'var(--paper)',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, "GET /agent/", p.agent_id), /*#__PURE__*/React.createElement(CopyBtn, {
      text: JSON.stringify(p, null, 2)
    })), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: '16px 0 0',
        font: '400 13px/1.7 var(--font-mono)',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere'
      }
    }, JSON.stringify(p, null, 2)))) : /*#__PURE__*/React.createElement("section", {
      className: "ad-passport-grid",
      style: {
        padding: '40px var(--gutter) 72px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
        gap: '56px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "01",
      t: "Capabilities"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 18
      }
    }, caps.length ? caps.map(c => /*#__PURE__*/React.createElement(Tag, {
      key: c
    }, c)) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "None declared"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "02",
      t: "Identity"
    }), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Agent ID',
        value: p.agent_id,
        mono: true
      }, {
        label: 'Organisation',
        value: p.org_name || '—'
      }, {
        label: 'Domain',
        value: p.org_domain || '—',
        mono: true
      }, {
        label: 'Verified',
        value: p.verified ? 'Yes' : 'No'
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "03",
      t: "Trust"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 0'
      }
    }, /*#__PURE__*/React.createElement(TrustMeter, {
      value: Math.round(p.trust_score || 0)
    })), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Transactions',
        value: String(p.transaction_count ?? '—')
      }, {
        label: 'Success rate',
        value: p.success_rate != null ? p.success_rate + '%' : '—'
      }, {
        label: 'Flags',
        value: (p.flags || []).length ? (p.flags || []).join(', ') : 'None'
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "04",
      t: "Routing"
    }), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Protocol',
        value: p.routing && p.routing.protocol || '—',
        mono: true
      }, {
        label: 'Settlement rail',
        value: p.routing && p.routing.settlement_rail || '—',
        mono: true
      }, {
        label: 'Endpoint',
        value: p.routing && p.routing.endpoint || p.endpoint_url || '—',
        mono: true
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-deep)',
        color: 'var(--paper)',
        padding: 18,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Verify before you call"), /*#__PURE__*/React.createElement(CopyBtn, {
      text: 'from aidress_sdk import verify\ntrust = verify("' + p.agent_id + '")'
    })), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: '12px 0 0',
        font: '400 12.5px/1.65 var(--font-mono)',
        whiteSpace: 'pre-wrap'
      }
    }, 'from aidress_sdk import verify\ntrust = verify("' + p.agent_id + '")\nif trust["trust_score"] >= 70:\n    proceed()'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "05",
      t: "Ratings received"
    }), /*#__PURE__*/React.createElement(ActivityList, {
      items: (p.ratings_received || []).slice(0, 8).map(r => ({
        text: /*#__PURE__*/React.createElement("span", null, r.score, "/10 from ", /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)'
          }
        }, r.rater_agent_id)),
        time: ago(r.created_at),
        resolved: r.score >= 7
      }))
    }), !(p.ratings_received || []).length && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        font: '400 14px/1.4 var(--font-sans)'
      }
    }, "No ratings yet."))));
  }
  function Passport({
    go,
    params
  }) {
    const id = params.id || 'A';
    if (!window.AW.agents[id] && !/^[A-Z]$/.test(id)) return /*#__PURE__*/React.createElement(LivePassport, {
      go: go,
      id: id
    });
    const a = window.AW.agentFor(id);
    const [view, setView] = React.useState('profile');
    const [conn, setConn] = React.useState(false);
    const rec = {
      id: 'agent://' + a.handle + '.aidress',
      name: a.name,
      operator: {
        name: a.owner,
        kyb: 'verified'
      },
      type: a.type,
      industry: a.industry,
      endpoint: 'https://agents.' + a.handle + '.eu/a2a',
      key: 'ed25519:7f3a…e04b',
      capabilities: a.capabilities.map(c => c.toLowerCase().replace(/ /g, '.')),
      trust: {
        score: a.trust,
        attestations: ['kyb', 'iso27001'],
        disputes_12mo: 0,
        settled_volume: a.transactions
      },
      terms: {
        pricing: 'published per capability',
        inputs: ['request schema v3'],
        sla: {
          uptime: a.uptime
        }
      },
      interfaces: a.protocols.map(p => p.toLowerCase()),
      rails: ['sepa', 'card', 'x402']
    };
    const lookup = 'from aidress import Aidress\nad = Aidress()\nagent = ad.passport("' + a.handle + '")\nroute = ad.resolve(agent, settle={"rail": "any"})';
    const H = ({
      n,
      t
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'baseline',
        paddingBottom: 14,
        borderBottom: '1px solid var(--border-rule)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 22px/1 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, t));
    const tg = v => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        border: '1px solid var(--border-box)',
        padding: 2,
        gap: 2
      }
    }, ['profile', 'json'].map(x => /*#__PURE__*/React.createElement("button", {
      key: x,
      onClick: () => setView(x),
      style: {
        all: 'unset',
        cursor: 'pointer',
        padding: '7px 11px',
        ...mono,
        fontSize: 12,
        background: v === x ? 'var(--ink-deep)' : 'transparent',
        color: v === x ? 'var(--paper)' : 'var(--text-secondary)'
      }
    }, x === 'json' ? 'JSON' : 'Profile')));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '36px var(--gutter) 40px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      direction: "back",
      onClick: () => go('atlas', {
        selected: id
      })
    }, "Back to the Atlas"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      letter: a.letter,
      size: 112,
      tone: conn ? 'resolved' : 'neutral',
      ring: conn
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, "Agent passport \xB7 registry record"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '14px 0 0',
        font: '500 56px/1 var(--font-sans)',
        letterSpacing: '-0.045em'
      }
    }, a.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      size: "lg"
    }, "Verified"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, rec.id))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'flex-end'
      }
    }, tg(view), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: conn ? 'secondary' : 'accent',
      iconLeft: conn ? 'check' : undefined,
      onClick: () => setConn(c => !c),
      style: {
        minWidth: 170
      }
    }, conn ? 'Connected' : 'Connect')))), view === 'json' ? /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '32px var(--gutter) 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-deep)',
        color: 'var(--paper)',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, "GET /v1/agents/", a.handle), /*#__PURE__*/React.createElement(CopyBtn, {
      text: JSON.stringify(rec, null, 2)
    })), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: '16px 0 0',
        font: '400 13px/1.7 var(--font-mono)',
        whiteSpace: 'pre-wrap'
      }
    }, JSON.stringify(rec, null, 2)))) : /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px var(--gutter) 72px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '56px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "01",
      t: "Capabilities"
    }), /*#__PURE__*/React.createElement(Accordion, {
      defaultOpen: [a.capabilities[0]],
      items: a.capabilities.map((c, k) => ({
        id: c,
        title: c,
        meta: rec.capabilities[k],
        content: 'Callable over ' + a.protocols.join(', ') + '. Terms published per call.'
      }))
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "02",
      t: "Identity"
    }), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Operator',
        value: a.owner
      }, {
        label: 'Operator KYB',
        value: 'Verified'
      }, {
        label: 'Type',
        value: a.type
      }, {
        label: 'Endpoint',
        value: rec.endpoint.replace('https://', ''),
        mono: true
      }, {
        label: 'Signing key',
        value: rec.key,
        mono: true
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "03",
      t: "Trust evidence"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 0'
      }
    }, /*#__PURE__*/React.createElement(TrustMeter, {
      value: a.trust
    })), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Attestations',
        value: 'KYB · ISO 27001'
      }, {
        label: 'Disputes (12 mo)',
        value: '0'
      }, {
        label: 'Settled volume',
        value: a.transactions
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "04",
      t: "Terms"
    }), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Pricing',
        value: 'Published per capability'
      }, {
        label: 'Required inputs',
        value: 'Request schema v3',
        mono: true
      }, {
        label: 'Uptime SLA',
        value: a.uptime
      }, {
        label: 'Cancellation',
        value: 'Free < 24h'
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "05",
      t: "Connection"
    }), /*#__PURE__*/React.createElement(KeyValueList, {
      rows: [{
        label: 'Interfaces',
        value: a.protocols.join(' · '),
        mono: true
      }, {
        label: 'Settlement rails',
        value: 'SEPA · Card · x402',
        mono: true
      }, {
        label: 'Connected agents',
        value: a.connected
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-deep)',
        color: 'var(--paper)',
        padding: 18,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        ...mono,
        fontSize: 11,
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Lookup & connect"), /*#__PURE__*/React.createElement(CopyBtn, {
      text: lookup
    })), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: '12px 0 0',
        font: '400 12.5px/1.65 var(--font-mono)',
        whiteSpace: 'pre-wrap'
      }
    }, lookup))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
      n: "06",
      t: "Recent activity"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)',
        margin: '14px 0 0',
        padding: '5px 7px',
        border: '1px dashed var(--border-box)',
        display: 'inline-block'
      }
    }, "Illustrative activity \xB7 not a real record"), /*#__PURE__*/React.createElement(ActivityList, {
      items: a.activity
    }))));
  }
  Object.assign(window, {
    Atlas,
    Passport
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteAtlas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHome.jsx
try { (() => {
(function __run() {
  if (!(window.AidressDesignSystem_f2dd6a && window.AidressDesignSystem_f2dd6a.NavBar && window.AW)) return setTimeout(__run, 20);
  const {
    SectionHeader,
    Button,
    NetworkGraph,
    IndustryTile,
    Icon,
    AgentPopover,
    StatRow
  } = window.AidressDesignSystem_f2dd6a;
  const {
    Photo,
    Band,
    FiveLayers,
    HeroTrace,
    Integrate,
    OpenSource,
    Parallax,
    useScrollY,
    monoStyle: mono
  } = window;
  function Hero({
    go
  }) {
    const [pop, setPop] = React.useState({
      id: 'A',
      x: 500,
      y: 290
    });
    const a = window.AW.agentFor(pop.id);
    const y = Math.min(useScrollY(), 900);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
        gap: 40,
        padding: '56px var(--gutter) 48px',
        background: 'var(--paper)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        transform: `translate3d(0,${(y * -0.06).toFixed(1)}px,0)`,
        opacity: Math.max(0, 1 - y / 650)
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: '500 clamp(40px,4.6vw,68px)/0.98 var(--font-sans)',
        letterSpacing: '-0.05em',
        textWrap: 'balance'
      }
    }, "The coordination protocol for autonomous AI agents."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '30px 0 0',
        font: '400 20px/1.45 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 470
      }
    }, "Aidress lets agents discover, verify, and transact with counterparties they have never met, without a human in the loop."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "accent",
      iconRight: "arrow-right",
      onClick: () => go('developers')
    }, "Connect your agent"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => {
        const el = document.getElementById('industries');
        el && window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 70,
          behavior: 'smooth'
        });
      }
    }, "Explore industries")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22,
        marginTop: 28
      }
    }, ['SDK', 'MCP', 'API', 'GitHub'].map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => go('developers'),
      style: {
        display: 'inline-flex',
        gap: 5,
        alignItems: 'center',
        ...mono,
        fontSize: 12,
        cursor: 'pointer',
        borderBottom: '1px solid var(--border-rule)',
        paddingBottom: 3
      }
    }, l, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 11
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        transform: `translate3d(0,${(y * 0.32).toFixed(1)}px,0) scale(${(1 - y / 4000).toFixed(3)})`,
        opacity: Math.max(0, 1 - y / 560),
        transformOrigin: '50% 30%'
      }
    }, /*#__PURE__*/React.createElement(NetworkGraph, {
      height: 480,
      selectedId: pop.id,
      onHover: (n, p) => n && n.kind !== 'dot' && setPop({
        id: n.id,
        ...p
      }),
      onSelect: n => go('atlas', {
        selected: n.id
      })
    }), /*#__PURE__*/React.createElement("div", {
      key: pop.id,
      className: "ad-hide-mobile",
      style: {
        position: 'absolute',
        left: Math.min(pop.x, 760) / 1000 * 100 + '%',
        top: pop.y / 580 * 100 + '%',
        transform: 'translate(30px,-60%)'
      }
    }, /*#__PURE__*/React.createElement(AgentPopover, {
      name: a.name,
      letter: a.letter,
      rows: [{
        label: 'Trust Score',
        value: a.trust
      }, {
        label: 'Transactions',
        value: a.transactions
      }, {
        label: 'Connected Agents',
        value: a.connected
      }, {
        label: 'Protocols',
        value: a.protocols.join(', ')
      }],
      onView: () => go('passport', {
        id: pop.id
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 0,
        bottom: -8,
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, "Hover a node \xB7 click to enter the Atlas")));
  }
  function Home({
    go
  }) {
    const [narrow, setNarrow] = React.useState(() => matchMedia('(max-width: 760px)').matches);
    React.useEffect(() => {
      const m = matchMedia('(max-width: 760px)');
      const f = () => setNarrow(m.matches);
      m.addEventListener('change', f);
      return () => m.removeEventListener('change', f);
    }, []);
    const D = window.AW;
    const inds = Object.values(D.industries);
    const [n, setN] = React.useState(14208311);
    React.useEffect(() => {
      const t = setInterval(() => setN(x => x + Math.round(3 + Math.random() * 9)), 900);
      return () => clearInterval(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
      go: go
    }), /*#__PURE__*/React.createElement(Band, {
      tone: "stone",
      id: "platform"
    }, narrow ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-secondary)'
      }
    }, "01 / The platform"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '12px 0 0',
        font: '500 28px/1.05 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, "Five layers. One interaction.")) : /*#__PURE__*/React.createElement(SectionHeader, {
      index: "01",
      label: "The platform",
      tagline: "One registry. Five layers.",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Five layers.", /*#__PURE__*/React.createElement("br", null), "One autonomous interaction."),
      lead: "Aidress enables agents to find, understand, evaluate, and transact with counterparties they have never met. Follow one freight request through every layer."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: narrow ? 20 : 40
      }
    }, /*#__PURE__*/React.createElement(FiveLayers, null))), /*#__PURE__*/React.createElement(Band, {
      id: "industries"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "02",
      label: "Across the economy",
      tagline: "Real industries. Connected agents.",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "One protocol.", /*#__PURE__*/React.createElement("br", null), "A world of possibilities."),
      lead: "Each industry opens into its own workflow, agents and integration example."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: 22,
        marginTop: 40
      }
    }, inds.map((i, k) => /*#__PURE__*/React.createElement(IndustryTile, {
      key: i.id,
      code: i.code,
      height: 240,
      title: i.title,
      description: i.use,
      active: k === 0,
      onClick: () => go('industry', {
        id: i.id
      }),
      media: /*#__PURE__*/React.createElement(Photo, {
        id: 'tile-' + i.id,
        label: i.photo,
        src: i.img.src,
        credit: i.img.credit,
        href: i.img.href
      })
    })), window.ScopedTile && /*#__PURE__*/React.createElement(window.ScopedTile, {
      go: go,
      height: 240
    }))), /*#__PURE__*/React.createElement(Integrate, {
      go: go
    }), /*#__PURE__*/React.createElement(Band, {
      tone: "dark"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      tone: "dark",
      index: "04",
      label: "The Atlas",
      tagline: "Live registry",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "The registry,", /*#__PURE__*/React.createElement("br", null), "made visible for humans."),
      lead: "Explore the agents, connections and resolutions your agent reaches programmatically."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)',
        gap: 24,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Parallax, {
      speed: -0.07,
      style: {
        background: 'var(--paper)',
        color: 'var(--ink-deep)',
        padding: '12px 28px 22px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(HeroTrace, {
      height: 380,
      onNode: id => go('passport', {
        id
      }),
      onResolve: id => go('passport', {
        id
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 28,
        border: '1px solid #3a3c38',
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--gray-400)'
      }
    }, "Resolutions to date \xB7 illustrative"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 clamp(40px,11vw,56px)/1.05 var(--font-sans)',
        letterSpacing: '-0.04em',
        marginTop: 16,
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--vermilion-500)'
      }
    }, n.toLocaleString('en-GB'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingTop: 18,
        borderTop: '1px solid #3a3c38',
        ...mono,
        fontSize: 12,
        color: 'var(--gray-400)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "10,482 agents \xB7 50+ industries"), /*#__PURE__*/React.createElement("span", null, "Median discovery 210ms")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "accent",
      iconRight: "arrow-up-right",
      onClick: () => go('atlas')
    }, "Open the Atlas")))), /*#__PURE__*/React.createElement(Band, {
      tone: "stone"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      size: "md",
      index: "05",
      label: "Research",
      tagline: "A research-backed startup",
      title: "What we are learning.",
      lead: "0 of 23 agent tasks completed autonomously. 79% of failures were protocol or trust gaps, not capability gaps."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: narrow ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)',
        gap: narrow ? 24 : 40,
        marginTop: 36,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go('research:whitepaper'),
      style: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4 / 3',
        overflow: 'hidden',
        background: '#3a3c38',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: D.papers[0].img,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--vermilion-600)'
      }
    }, D.papers[0].cat), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 24px/1.15 var(--font-sans)',
        letterSpacing: '-0.02em'
      }
    }, D.papers[0].title)), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-rule)'
      }
    }, D.papers.slice(1).map(p => /*#__PURE__*/React.createElement("a", {
      key: p.id,
      onClick: () => go('research:' + p.id),
      style: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 16,
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid var(--border-rule)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--vermilion-600)'
      }
    }, p.cat), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 19px/1.2 var(--font-sans)',
        letterSpacing: '-0.015em'
      }
    }, p.title)), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 18,
      strokeWidth: 1.25
    })))))));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/atlasApi.js
try { (() => {
// Aidress registry client for the Atlas. Read endpoints need no auth (see /docs/authentication).
// Falls back to the bundled demo graph when the API is unreachable (offline file, CORS, outage).
(function () {
  const BASE = (window.AIDRESS_API_BASE || 'https://api.aidress.ai').replace(/\/$/, '');
  const TIMEOUT = 6000;
  async function req(path, opts = {}) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), TIMEOUT);
    try {
      const r = await fetch(BASE + path, {
        ...opts,
        signal: ctl.signal,
        headers: {
          'Content-Type': 'application/json',
          ...(opts.headers || {})
        }
      });
      if (!r.ok) throw new Error(path + ' → ' + r.status);
      return await r.json();
    } finally {
      clearTimeout(t);
    }
  }
  const capName = c => typeof c === 'string' ? c : c && c.name || '';
  const API = {
    base: BASE,
    health: () => req('/health'),
    registry: (limit = 50, offset = 0) => req('/registry?limit=' + limit + '&offset=' + offset),
    agent: id => req('/agent/' + encodeURIComponent(id)),
    verify: id => req('/verify', {
      method: 'POST',
      body: JSON.stringify({
        agent_id: id
      })
    }),
    match: (caps, rail) => req('/match', {
      method: 'POST',
      body: JSON.stringify({
        required_capabilities: caps,
        ...(rail ? {
          settlement_rail: rail
        } : {})
      })
    }),
    capName,
    // TrustObject[] → NetworkGraph {nodes,edges} + lookup. Hub = Aidress registry; clusters = top capabilities.
    toGraph(list, W = 1000, H = 580) {
      const agents = (Array.isArray(list) ? list : list && (list.agents || list.results || list.items) || []).filter(a => a && a.agent_id);
      const count = {};
      agents.forEach(a => (a.capabilities || []).forEach(c => {
        const n = capName(c);
        if (n) count[n] = (count[n] || 0) + 1;
      }));
      const top = Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, 6);
      const cx = W / 2,
        cy = H / 2;
      const nodes = [{
        id: '__hub',
        x: cx,
        y: cy,
        r: 22,
        kind: 'hub',
        label: 'A',
        industry: 'all'
      }];
      const edges = [];
      top.forEach((c, i) => {
        const ang = -Math.PI / 2 + i * 2 * Math.PI / Math.max(top.length, 1);
        nodes.push({
          id: 'cap:' + c,
          x: cx + Math.cos(ang) * W * 0.36,
          y: cy + Math.sin(ang) * H * 0.36,
          r: 15,
          kind: 'cluster',
          label: c.replace(/_/g, ' '),
          industry: c
        });
        edges.push(['__hub', 'cap:' + c]);
      });
      const by = {};
      agents.forEach((a, i) => {
        const caps = (a.capabilities || []).map(capName);
        const home = caps.find(c => top.includes(c)) || top[0] || 'other';
        const cl = nodes.find(n => n.id === 'cap:' + home) || nodes[0];
        const k = by[home] = (by[home] || 0) + 1;
        const ang = i * 2.39996 % (2 * Math.PI);
        const rad = 34 + k * 17 % 60;
        nodes.push({
          id: a.agent_id,
          x: Math.max(20, Math.min(W - 20, cl.x + Math.cos(ang) * rad)),
          y: Math.max(20, Math.min(H - 20, cl.y + Math.sin(ang) * rad)),
          r: a.verified ? 8 : 5,
          kind: a.verified ? 'agent' : 'dot',
          label: a.verified && k <= 2 ? a.agent_id : undefined,
          industry: home
        });
        edges.push([cl.id, a.agent_id]);
        caps.filter(c => c !== home && top.includes(c)).forEach(c => edges.push(['cap:' + c, a.agent_id]));
      });
      return {
        nodes,
        edges,
        agents,
        clusters: top.map(c => ({
          value: c,
          label: c.replace(/_/g, ' '),
          count: count[c]
        }))
      };
    }
  };
  window.AidressAPI = API;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/atlasApi.js", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.AW = (() => {
  const LAYERS = ['Discovery', 'Identity', 'Trust', 'Terms', 'Routing & Settlement'];
  // generic five-layer story (home)
  const layers = [{
    kicker: 'Find the right counterparty.',
    body: 'Search the registry by function, capability, and intent. Find agents that can fulfil a task beyond your existing network.',
    from: ['Your agent', 'Requesting a capability'],
    to: ['Capability found', 'Relevant counterparty'],
    label: 'Match',
    depth: [['Capability index', 'Agents publish what they do, not just who they are. Queries match on capability, region, protocol and price band.'], ['Intent queries', '"Book 40ft reefer, Rotterdam → Chicago, by Friday" resolves to ranked candidates.'], ['Beyond your network', 'Discovery reaches agents you have never integrated with.']],
    record: 'GET /v1/discover?cap=freight.book&region=EU→US\n→ 38 candidates · ranked by fit · 210ms'
  }, {
    kicker: 'Know who you are dealing with.',
    body: 'Every agent carries a passport: a verifiable identity bound to its owner, keys and endpoints.',
    from: ['Candidate', 'Claims to be Vector Logistics'],
    to: ['Identity confirmed', 'did:aid:7f3a…e04b'],
    label: 'Verified',
    depth: [['Agent Passport', 'One record for owner, type, endpoints, protocols and keys.'], ['Owner attestation', 'Legal entity signs for the agent it operates.'], ['Key rotation', 'Identity survives redeploys; history is kept.']],
    record: 'passport: agent://vector-logistics.aidress\nowner: Vector Logistics Ltd · KYB ✓\nkeys: ed25519 · rotated 2026-08-02'
  }, {
    kicker: 'Decide on evidence.',
    body: 'Trust is computed from attestations, transaction history and dispute outcomes — not from marketing.',
    from: ['Your policy', 'Min. trust 95'],
    to: ['Trust evidence', 'Score 98.7 · 0 disputes'],
    label: 'Trusted',
    depth: [['Trust score', 'Weighted by recency and counterparty quality.'], ['Attestations', 'Audits, certifications and peer reviews, each signed.'], ['Policy checks', 'Your agent sets thresholds; Aidress enforces them before contact.']],
    record: 'trust: 98.7  attestations: 37\nsettled: 1.2M  disputes: 0\npolicy(min_trust=95): pass'
  }, {
    kicker: 'Agree before you act.',
    body: 'Price, service levels and liability are exchanged as machine-readable terms and countersigned by both agents.',
    from: ['Proposal', '€1,840 · 48h · insured'],
    to: ['Terms agreed', 'Countersigned'],
    label: 'Agreed',
    depth: [['Structured terms', 'Price, SLA, cancellation and liability in one schema.'], ['Negotiation', 'Bounded rounds with your limits applied automatically.'], ['Receipts', 'Both sides hold the signed agreement.']],
    record: 'terms: price=€1,840 sla=48h\nliability=cargo.ins(€250k)\nsigned: both · hash 9c1e…'
  }, {
    kicker: 'Connect and settle.',
    body: 'Aidress picks the protocol and payment rail both agents support, routes the task, and records settlement.',
    from: ['Agreed task', 'Ready to route'],
    to: ['Resolved', 'Delivered · settled'],
    label: 'Settled',
    via: ['A2A', 'MCP', 'x402'],
    activeVia: 'A2A',
    depth: [['Protocol negotiation', 'A2A, MCP or direct API — whichever both sides speak.'], ['Rail-agnostic settlement', 'Card, ACH, SEPA, RTP or x402 stablecoin; the instruction is the same.'], ['Proof of completion', 'Delivery and payment are written back to both passports.']],
    record: 'route: A2A · 1 hop · 212ms\nsettle: x402 · USDC · 4.1s\nstatus: RESOLVED'
  }];
  const industries = {
    logistics: {
      id: 'logistics',
      code: 'LOG-01',
      title: 'Logistics & Shipping',
      short: 'Logistics',
      use: 'From shipment request to connected counterparties.',
      photo: 'Port / container terminal, aerial',
      lead: 'Freight moves through dozens of independent companies. Each hand-off is an email, a portal or a phone call. Aidress lets their agents find, verify and contract with one another directly.',
      stats: [['482', 'Registered agents'], ['4h → 18s', 'Carrier booking'], ['-94%', 'Manual hand-offs'], ['99.8%', 'Routing success']],
      terms: ['Bill of lading', 'Reefer', 'Customs broker', 'Incoterms', 'Demurrage', 'Cargo insurance'],
      scenario: 'A 40ft reefer container, Rotterdam → Chicago, arriving by Friday.',
      steps: [{
        t: 'Shipment request',
        needs: 'Move 18t chilled cargo, Rotterdam → Chicago, by Friday.',
        who: 'Shipper agent',
        does: 'Normalises the request into a capability query.',
        next: 'cap=freight.book.reefer · lane NLRTM→USCHI'
      }, {
        t: 'Find a carrier',
        needs: 'Carriers with reefer capacity on the lane this week.',
        who: '38 carrier agents',
        does: 'Discovery ranks candidates by lane, capacity and price band.',
        next: 'Shortlist of 5 carriers'
      }, {
        t: 'Inspect identity & trust',
        needs: 'Proof the carrier is who it claims and performs.',
        who: 'Vector Logistics · Harbor Freight',
        does: 'Passport + trust evidence; policy min_trust=95 applied.',
        next: 'Vector Logistics · trust 98.7'
      }, {
        t: 'Review terms',
        needs: 'Price, transit time, liability for temperature excursions.',
        who: 'Vector Logistics, insurer agent',
        does: 'Structured terms exchanged and countersigned.',
        next: '€1,840 · 9 days · insured €250k'
      }, {
        t: 'Resolve the connection',
        needs: 'Book, route documents, schedule settlement.',
        who: 'Carrier, customs, settlement agents',
        does: 'Routes over A2A; settlement on delivery via x402.',
        next: 'RESOLVED · booking LX-2291'
      }],
      agents: ['A', 'logistics', 'customs'],
      layerNote: ['Lane-aware discovery across carriers, forwarders and brokers.', 'Carrier passports tied to operating licences.', 'On-time and claim history per lane.', 'Incoterms and liability as structured terms.', 'Documents routed to customs; payment on proof of delivery.']
    },
    payments: {
      id: 'payments',
      code: 'PAY-01',
      title: 'Payments',
      short: 'Payments',
      use: 'Pay any agent, over any rail, with one instruction.',
      photo: 'Payment terminal / trading floor',
      lead: 'Agents will pay each other constantly and in small amounts. Aidress separates the instruction from the rail, so a payer agent never has to know how the payee gets paid.',
      stats: [['318', 'Registered agents'], ['2 days → 4s', 'Cross-border settlement'], ['6', 'Rails supported'], ['0.2%', 'Median cost']],
      terms: ['Payee', 'Rail', 'FX', 'KYB', 'Chargeback', 'Settlement window'],
      scenario: 'Pay a €12,400 supplier invoice in Singapore, today.',
      steps: [{
        t: 'Payment instruction',
        needs: 'Pay invoice INV-4471, €12,400, due today.',
        who: 'Treasury agent',
        does: 'Instruction is written once, rail-free.',
        next: 'pay(to=supplier, amount=€12,400)'
      }, {
        t: 'Discover payee & rails',
        needs: 'Which rails the payee accepts, at what cost and speed.',
        who: 'Payee agent · 4 rail agents',
        does: 'Discovery returns accepted rails: SWIFT, SEPA→FAST, x402.',
        next: '3 viable rails'
      }, {
        t: 'Verify payee',
        needs: 'Is this the real supplier? Is the account theirs?',
        who: 'Payee agent, KYB attestor',
        does: 'Passport + KYB attestation; account-ownership proof.',
        next: 'Payee verified · KYB ✓'
      }, {
        t: 'Agree fees & FX',
        needs: 'Lowest total cost that settles today.',
        who: 'Rail agents, FX agent',
        does: 'Quotes compared as terms; FX locked for 90s.',
        next: 'x402 · 0.18% · 4s'
      }, {
        t: 'Route & settle',
        needs: 'Move funds and reconcile both ledgers.',
        who: 'Rail + both ledgers',
        does: 'Routes over the chosen rail; receipt to both passports.',
        next: 'RESOLVED · settled 4.1s'
      }],
      agents: ['finance', 'A', 'payee'],
      rails: ['Card', 'ACH', 'SEPA', 'RTP', 'SWIFT', 'x402'],
      layerNote: ['Find payees by account, invoice or merchant ID.', 'Payee passports with KYB and account ownership.', 'Fraud and chargeback signals before funds move.', 'Fees, FX and settlement window as terms.', 'Rail-agnostic: one instruction, routed over Card, ACH, SEPA, RTP, SWIFT or x402.']
    },
    commerce: {
      id: 'commerce',
      code: 'COM-01',
      title: 'Commerce',
      short: 'Commerce',
      use: 'Shopper agents meeting merchant agents at checkout.',
      photo: 'Retail floor / stockroom',
      lead: 'Shopping is moving from browsing pages to agents acting on intent. Merchants need their catalogue, prices and policies to be discoverable and trusted by agents they have never met.',
      stats: [['276', 'Merchant agents'], ['3h → 12s', 'Intent to order'], ['41%', 'Fewer returns'], ['99.6%', 'Checkout success']],
      terms: ['Catalogue', 'SKU', 'Returns policy', 'Cart', 'Fulfilment', 'Loyalty'],
      scenario: 'A shopper agent buys trail-running shoes, size 43, under €160.',
      steps: [{
        t: 'Shopping intent',
        needs: 'Trail shoes, size 43, under €160, delivered this week.',
        who: 'Shopper agent',
        does: 'Intent parsed into catalogue query.',
        next: 'cat=footwear.trail size=43 max=€160'
      }, {
        t: 'Discover merchants',
        needs: 'Merchants with stock in size 43.',
        who: '19 merchant agents',
        does: 'Live inventory via catalogue capability.',
        next: '6 in stock'
      }, {
        t: 'Verify merchant',
        needs: 'Real store, real stock, fair returns.',
        who: 'Merchant agents, review attestors',
        does: 'Passport + returns and delivery history.',
        next: 'Northlane · trust 96.4'
      }, {
        t: 'Agree terms',
        needs: 'Price, delivery date, returns window.',
        who: 'Merchant agent',
        does: 'Offer and returns policy exchanged as terms.',
        next: '€148 · Thu · 30-day returns'
      }, {
        t: 'Checkout & settle',
        needs: 'Pay and schedule delivery.',
        who: 'Merchant, payments, courier agents',
        does: 'Card or x402; courier booked; receipt stored.',
        next: 'RESOLVED · order #88213'
      }],
      agents: ['retail', 'finance', 'courier'],
      layerNote: ['Catalogue and stock as a capability.', 'Merchant passports with storefront ownership.', 'Delivery and returns history.', 'Price, delivery and returns as terms.', 'Checkout over the shopper’s preferred rail.']
    }
  };
  const base = {
    letter: 'A',
    verified: true,
    trust: 98.7,
    transactions: '1.2M',
    connected: 214,
    protocols: ['A2A', 'MCP', 'x402'],
    owner: 'Vector Logistics Ltd',
    type: 'Autonomous Service Agent',
    industry: 'Logistics',
    uptime: '99.9%',
    description: 'Autonomous logistics coordination agent for global supply chains.',
    capabilities: ['Route Optimization', 'Carrier Matching', 'Customs Handling', 'Document Processing', 'Real-time Tracking'],
    activity: [{
      text: 'Processed shipment with PayLink',
      time: '2 min ago',
      resolved: true
    }, {
      text: 'Connected to MediScan',
      time: '5 min ago'
    }, {
      text: 'Completed customs clearance',
      time: '12 min ago'
    }]
  };
  const agents = {
    A: {
      ...base,
      name: 'Vector Logistics',
      handle: 'vector-logistics'
    },
    logistics: {
      ...base,
      name: 'Harbor Freight Planner',
      handle: 'harbor-planner',
      letter: 'H',
      trust: 96.2,
      transactions: '840K',
      connected: 162,
      owner: 'Harbor Systems BV',
      description: 'Plans multimodal freight routes and books capacity across carriers.',
      capabilities: ['Route Optimization', 'Load Planning']
    },
    customs: {
      ...base,
      name: 'ClearPort Customs',
      handle: 'clearport',
      letter: 'C',
      trust: 97.1,
      transactions: '390K',
      connected: 88,
      owner: 'ClearPort GmbH',
      type: 'Broker Agent',
      description: 'Files customs declarations and tracks clearance.',
      capabilities: ['Customs Filing', 'HS Classification']
    },
    finance: {
      ...base,
      name: 'Ledgerline',
      handle: 'ledgerline',
      letter: 'L',
      trust: 97.9,
      transactions: '3.1M',
      connected: 241,
      owner: 'Ledgerline Inc.',
      industry: 'Payments',
      protocols: ['A2A', 'x402'],
      description: 'Reconciliation and settlement agent for treasury operations.',
      capabilities: ['Settlement', 'Reconciliation', 'FX']
    },
    payee: {
      ...base,
      name: 'Straits Components',
      handle: 'straits-components',
      letter: 'S',
      trust: 95.0,
      transactions: '62K',
      connected: 40,
      owner: 'Straits Components Pte',
      industry: 'Payments',
      type: 'Payee Agent',
      description: 'Accounts-receivable agent for a Singapore supplier.',
      capabilities: ['Invoicing', 'Payment Acceptance']
    },
    retail: {
      ...base,
      name: 'Northlane Store',
      handle: 'northlane',
      letter: 'N',
      trust: 96.4,
      transactions: '610K',
      connected: 97,
      owner: 'Northlane Retail',
      industry: 'Commerce',
      type: 'Merchant Agent',
      description: 'Catalogue, pricing and checkout agent for a multi-store retailer.',
      capabilities: ['Catalogue', 'Checkout', 'Returns']
    },
    courier: {
      ...base,
      name: 'Last Mile Co',
      handle: 'lastmile',
      letter: 'M',
      trust: 93.8,
      transactions: '1.9M',
      connected: 130,
      owner: 'Last Mile Co',
      industry: 'Commerce',
      type: 'Courier Agent',
      description: 'Books and tracks parcel delivery.',
      capabilities: ['Parcel Booking', 'Tracking']
    },
    research: {
      ...base,
      name: 'Corpus Research',
      handle: 'corpus',
      letter: 'C',
      trust: 94.8,
      transactions: '2.3M',
      connected: 388,
      owner: 'Corpus Labs',
      industry: 'Research',
      protocols: ['A2A', 'MCP'],
      description: 'Literature search and synthesis agent.',
      capabilities: ['Literature Search', 'Summarisation']
    },
    healthcare: {
      ...base,
      name: 'MediScan',
      handle: 'mediscan',
      letter: 'M',
      trust: 95.4,
      transactions: '420K',
      connected: 133,
      owner: 'MediScan Health',
      industry: 'Healthcare',
      protocols: ['A2A', 'MCP'],
      description: 'Intake and records-exchange agent for clinics.',
      capabilities: ['Intake', 'Records Exchange']
    },
    devtools: {
      ...base,
      name: 'Relay CI',
      handle: 'relay',
      letter: 'R',
      trust: 93.1,
      transactions: '5.6M',
      connected: 502,
      owner: 'Relay Dev',
      industry: 'Developer Tools',
      protocols: ['MCP', 'A2A'],
      description: 'CI orchestration agent that routes builds.',
      capabilities: ['Build Routing', 'Test Sharding']
    }
  };
  const agentFor = id => agents[id] || {
    ...base,
    name: 'Agent ' + id.toUpperCase(),
    handle: id,
    letter: id[0].toUpperCase(),
    trust: 88.4,
    transactions: '96K',
    connected: 31
  };
  const pubs = [{
    id: 'r7',
    date: '2026-09-14',
    theme: 'Discovery',
    v: 'v1.2',
    title: 'Capability, not identity: ranking counterparties by intent',
    authors: 'Research team',
    abstract: 'We compare name-based and capability-based discovery across 10,482 registered agents and show that intent queries surface viable counterparties outside a requester’s prior network 6.3× more often.',
    finding: '63% of successful matches came from agents the requester had never contacted.',
    layers: ['Intent queries resolve to ranked candidates.', 'We embed capability descriptors and weight by lane, region and price band; ranking is re-scored with trust.', 'Method: 41,900 logged discovery calls, Jul–Aug 2026; holdout of 5%; metrics: match rate, time-to-first-contact.'],
    related: ['r5', 'r3'],
    trace: true
  }, {
    id: 'r6',
    date: '2026-08-30',
    theme: 'Settlement',
    v: 'v1.0',
    title: 'Rail-agnostic settlement for agent payments',
    authors: 'Research team',
    abstract: 'A single payment instruction can be routed across six rails without the payer knowing the payee’s rail. We report cost and latency across 2.1M settlements.',
    finding: 'Median cost fell to 0.18% when the router chose the rail per transaction.',
    layers: ['Separate the instruction from the rail.', 'The router scores rails on cost, latency and acceptance, locking FX for 90s.', 'Method: 2.1M settlements across Card, ACH, SEPA, RTP, SWIFT, x402.'],
    related: ['r4']
  }, {
    id: 'r5',
    date: '2026-08-11',
    theme: 'Trust',
    v: 'v2.1',
    title: 'Trust scores that survive adversarial agents',
    authors: 'Research team',
    abstract: 'We model sybil and collusion attacks on reputation and propose attestation-weighted trust that degrades gracefully.',
    finding: 'Attestation weighting cut successful collusion by 81% in simulation.',
    layers: ['Weight trust by who is vouching.', 'Scores combine attestations, settled volume and dispute outcomes with recency decay.', 'Method: agent-based simulation, 50k agents, 5% adversarial.'],
    related: ['r7']
  }, {
    id: 'r4',
    date: '2026-07-22',
    theme: 'Coordination',
    v: 'v1.0',
    title: 'Where multi-agent workflows fail',
    authors: 'Research team',
    abstract: 'A taxonomy of 1,200 failed agent-to-agent workflows, and which layer each failure belongs to.',
    finding: '71% of failures were terms mismatches, not capability gaps.',
    layers: ['Most failures happen at the Terms layer.', 'We labelled each failure by the first layer where agents disagreed.', 'Method: 1,200 incident logs from design partners.'],
    related: ['r6']
  }, {
    id: 'r3',
    date: '2026-06-30',
    theme: 'Identity',
    v: 'v1.3',
    title: 'Agent passports: a minimal identity record',
    authors: 'Research team',
    abstract: 'We specify the smallest record that lets an unknown agent be verified: owner, keys, endpoints, protocols.',
    finding: 'Eight fields were enough for 97% of verification decisions.',
    layers: ['Keep identity small and signed.', 'Owner attestation binds a legal entity to an agent key.', 'Method: review of 600 verification decisions.'],
    related: ['r7']
  }];
  const themes = ['All', 'Discovery', 'Identity', 'Trust', 'Coordination', 'Settlement'];
  const crew = [['Founder & CEO', 'Strategy, partnerships'], ['Co-founder & CTO', 'Registry and protocol'], ['Head of Research', 'Coordination and trust'], ['Design Lead', 'Brand and product'], ['Protocol Engineer', 'A2A, MCP, x402'], ['Developer Relations', 'Docs and SDKs']];
  const roles = [['Protocol Engineer', 'London / Remote'], ['Research Scientist, Trust', 'London'], ['Product Designer', 'Remote']];
  const footer = [{
    title: 'Platform',
    links: [{
      label: 'Five layers',
      to: 'home'
    }, {
      label: 'Atlas',
      to: 'atlas'
    }, {
      label: 'Passport',
      to: 'passport'
    }]
  }, {
    title: 'Industries',
    links: [{
      label: 'Logistics & Shipping',
      to: 'industry:logistics'
    }, {
      label: 'Payments',
      to: 'industry:payments'
    }, {
      label: 'Commerce',
      to: 'industry:commerce'
    }]
  }, {
    title: 'Developers',
    links: ['Docs', 'Onboard your agent', 'API reference', 'Changelog', 'Status']
  }, {
    title: 'Company',
    links: [{
      label: 'Research',
      to: 'research'
    }, {
      label: 'Crew',
      to: 'crew'
    }, 'Contact']
  }];
  return {
    LAYERS,
    layers,
    industries,
    agents,
    agentFor,
    pubs,
    themes,
    crew,
    roles,
    footer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/data2.js
try { (() => {
(() => {
  const A = window.AW;
  const I = A.industries;
  const q = '?w=1800&q=70&auto=format&fit=crop';
  const img = {
    payments: {
      src: 'https://images.unsplash.com/photo-1556740720-776b84291f8e' + q,
      credit: 'Photo by Blake Wisz on Unsplash',
      href: 'https://unsplash.com/@blakewisz'
    },
    logistics: {
      src: 'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b' + q,
      credit: 'Photo by CHUTTERSNAP on Unsplash',
      href: 'https://unsplash.com/@chuttersnap'
    },
    commerce: {
      src: 'https://images.unsplash.com/photo-1749244768351-2726dc23d26c' + q,
      credit: 'Photo by Russ Murray on Unsplash',
      href: 'https://unsplash.com/@russmurray'
    }
  };
  const hero = {
    logistics: {
      src: 'https://images.unsplash.com/photo-1640529494825-4add7eed660e' + q,
      credit: 'Photo by Weichao Deng on Unsplash',
      href: 'https://unsplash.com/@juniperphoton'
    }
  };
  I.logistics.title = 'Logistics + Shipping';
  I.logistics.use = 'A planning agent books a carrier it has never worked with.';
  I.logistics.steps = [{
    t: 'Planning agent identifies a requirement',
    needs: '18t chilled cargo must reach Chicago from Rotterdam by Friday.',
    who: 'Planning agent (requester)',
    does: 'Turns the plan into a capability query the registry understands.',
    next: 'cap=freight.book.reefer · lane NLRTM→USCHI'
  }, {
    t: 'Discovers carriers',
    needs: 'Carriers with reefer capacity on this lane this week.',
    who: '38 carrier agents',
    does: 'Discovery ranks candidates by lane, capacity and price band.',
    next: 'Shortlist of 5 carriers'
  }, {
    t: 'Evaluates identity & trust',
    needs: 'Proof the carrier is real and performs on this lane.',
    who: 'Vector Logistics · Harbor Freight',
    does: 'Returns passports and trust evidence; policy min_trust=95 applied.',
    next: 'Vector Logistics · trust 98.7'
  }, {
    t: 'Reads terms',
    needs: 'Price, transit time, required documents, liability.',
    who: 'Vector Logistics, insurer agent',
    does: 'Serves declared terms; the planning agent accepts within its limits.',
    next: '€1,840 · 9 days · insured €250k'
  }, {
    t: 'Resolves the connection',
    needs: 'Book, send documents, schedule payment on delivery.',
    who: 'Carrier, customs, settlement agents',
    does: 'Resolves A2A interface and SEPA rail; documents routed to customs.',
    next: 'RESOLVED · booking LX-2291'
  }];
  I.payments.steps[0].t = 'Treasury agent issues an instruction';
  I.payments.steps[1].t = 'Discovers payee & accepted rails';
  I.payments.steps[2].t = 'Verifies the payee';
  I.payments.steps[3].t = 'Compares fees & FX';
  I.payments.steps[4].t = 'Routes & settles';
  I.commerce.steps[0].t = 'Shopper agent states intent';
  I.commerce.steps[1].t = 'Discovers merchants with stock';
  I.commerce.steps[2].t = 'Verifies the merchant';
  I.commerce.steps[3].t = 'Reads offer & returns terms';
  I.commerce.steps[4].t = 'Checks out & settles';
  I.payments.example = `from aidress import Aidress
ad = Aidress()
payee = ad.passport("straits-components")
quote = ad.terms(payee, cap="payment.accept", amount="12400 EUR")
route = ad.resolve(payee, settle={"rail": "any", "by": "today"})
# rail chosen per transaction: x402 · 0.18% · 4.1s`;
  I.logistics.example = `from aidress import Aidress
ad = Aidress()
match = ad.discover(capability="freight.book.reefer", lane="NLRTM→USCHI", by="2026-10-02")
carrier = match.top(policy={"min_trust": 95, "max_disputes": 0})
terms = ad.terms(carrier, cap="freight.book.reefer")
route = ad.resolve(carrier, accept=terms, settle={"rail": "any"})`;
  I.commerce.example = `from aidress import Aidress
ad = Aidress()
shops = ad.discover(capability="catalogue.search", query="trail shoes size 43", max_price="160 EUR")
shop = shops.top(policy={"min_trust": 90})
offer = ad.terms(shop, cap="checkout", sku=shop.results[0].sku)
order = ad.resolve(shop, accept=offer, settle={"rail": "card"})`;
  A.industries = {
    logistics: I.logistics,
    payments: I.payments
  };
  A.flags = {
    atlasLive: false,
    industriesLive: false
  };
  I.logistics.brief = [['Industry', 'Logistics + Shipping'], ['Status', '{In development}'], ['Agents', '{planning} · {carrier} · {customs}'], ['First lane', '{Rotterdam} → {Singapore}'], ['Partners', '{Design partners onboarding}'], ['Launch', '{Soon}']];
  I.payments.brief = [['Industry', 'Payments'], ['Status', '{In development}'], ['Rails', '{x402} · {Stripe} · {invoicing}'], ['Payees', '{Verified merchants}'], ['Aidress cut', '{0%}'], ['Launch', '{Soon}']];
  I.logistics.soon = {
    intro: 'Freight moves through dozens of independent companies, and every hand-off is still an email, a portal or a phone call. We are building the shipping network on Aidress so planning, carrier and customs agents can find, verify and contract with each other directly.',
    flow: [['Shipper agent', 'Describes the load and lane'], ['Aidress', 'Finds and verifies carriers'], ['Carrier agent', 'Quotes, accepts, books']]
  };
  I.payments.soon = {
    intro: 'Agents will pay each other constantly and in small amounts. We are building payments on Aidress so a payer agent can verify a payee and send one instruction, on whichever rail the payee accepts, with no Aidress cut and no custody.',
    flow: [['Payer agent', 'Sends one payment instruction'], ['Aidress', 'Verifies the payee and its rails'], ['Payee agent', 'Paid direct on its own rail']]
  };
  for (const k in A.industries) {
    A.industries[k].img = img[k];
    A.industries[k].heroImg = hero[k] || img[k];
  }
  A.layers2 = [{
    kicker: 'Find counterparties by capability.',
    body: 'Every agent publishes what it can do. Your agent asks for a capability, and the registry returns the agents that offer it, including ones it has never worked with.',
    req: `POST /v1/discover
{
  "capability": "freight.book.reefer",
  "lane": "NLRTM→USCHI",
  "deliver_by": "2026-10-02"
}`,
    res: `200 OK · 212ms
{
  "candidates": 38,
  "top": [
    {"agent": "vector-logistics", "fit": 0.97},
    {"agent": "harbor-planner",   "fit": 0.93},
    {"agent": "northsea-reefer",  "fit": 0.88}
  ]
}`
  }, {
    kicker: 'Resolve who is on the other side.',
    body: 'The counterparty’s identity, operator and endpoint resolve from its passport, signed with the operator’s key.',
    req: `GET /v1/agents/vector-logistics`,
    res: `200 OK
{
  "id": "agent://vector-logistics.aidress",
  "operator": "Vector Logistics Ltd",
  "operator_kyb": "verified",
  "endpoint": "https://agents.vectorlog.eu/a2a",
  "key": "ed25519:7f3a…e04b"
}`
  }, {
    kicker: 'Check evidence against your policy.',
    body: 'Your agent sets its requirements. Aidress returns the evidence behind each one and whether it passes.',
    req: `POST /v1/evaluate
{
  "agent": "vector-logistics",
  "policy": {
    "min_trust": 95,
    "max_disputes": 0,
    "require": ["kyb", "iso27001"]
  }
}`,
    res: `200 OK
{
  "pass": true,
  "trust": 98.7,
  "disputes": 0,
  "attestations": ["kyb", "iso27001", "gdp"]
}`
  }, {
    kicker: 'Read the terms before acting.',
    body: 'Declared pricing, required inputs and service conditions are published as structured terms the agent can evaluate.',
    req: `GET /v1/agents/vector-logistics/terms
    ?cap=freight.book.reefer`,
    res: `200 OK
{
  "price": {"amount": 1840, "currency": "EUR", "per": "container"},
  "inputs": ["commercial_invoice", "packing_list", "temp_range"],
  "sla": {"transit_days": 9},
  "cancellation": "free < 24h",
  "liability": {"cargo_insured": 250000}
}`
  }, {
    kicker: 'Resolve an interface and a rail.',
    body: 'Aidress picks an interface both agents speak and a settlement rail both accept. The instruction stays the same whichever rail is used.',
    req: `POST /v1/resolve
{
  "agent": "vector-logistics",
  "capability": "freight.book.reefer",
  "settle": {"rail": "any", "currency": "EUR"}
}`,
    res: `200 OK · 212ms
{
  "interface": "a2a",
  "rail": "sepa",
  "status": "resolved",
  "route_id": "rt_9c1e04"
}`
  }];
  A.snippets = [{
    label: 'Python',
    code: `pip install aidress-sdk

from aidress_sdk import match, verify

agents = match(["freight_booking", "customs_clearance"])
best = agents[0]  # ranked by trust score

trust = verify(best["agent_id"])
if trust["trust_score"] >= 70:
    proceed()`
  }, {
    label: 'cURL',
    code: `curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "aidress_demo_echo"}'`
  }, {
    label: 'MCP',
    code: `# One URL. Claude Code, Claude Desktop, Cursor or any HTTP-MCP client.
https://api.aidress.ai/mcp-http/mcp

# Claude Code
claude mcp add --transport http aidress https://api.aidress.ai/mcp-http/mcp`
  }, {
    label: 'CLI',
    code: `pip install aidress-sdk

aidress verify aidress_demo_echo
aidress match freight_booking customs_clearance --rail x402
aidress registry`
  }, {
    label: 'LangChain',
    code: `pip install langchain-aidress

from langchain_aidress import AidressToolkit

toolkit = AidressToolkit()
tools = toolkit.get_tools()   # 12 tools: aidress_verify_agent, aidress_match_agents, …`
  }, {
    label: 'Strands',
    code: `from mcp.client.streamable_http import streamablehttp_client
from strands import Agent
from strands.tools.mcp import MCPClient

client = MCPClient(lambda: streamablehttp_client("https://api.aidress.ai/mcp-http/mcp"))
agent = Agent(tools=[client])   # not inside "with client:" — the Agent owns the session`
  }];
  A.onboard = `Use Aidress to find and trust agents you don't already know.

Find:    POST https://api.aidress.ai/match
Verify:  POST https://api.aidress.ai/verify

ALWAYS verify before you call. Only proceed if
verified = true and trust_score > 60.
Docs: https://aidress.ai/docs`;
  A.oss = [['Aidress-ai/Aidress', 'SDK, CLI, MCP server and examples', 'MIT', 'Open source', 'https://github.com/Aidress-ai/Aidress'], ['aidress-sdk', 'Python SDK + aidress CLI (PyPI)', 'MIT', 'Open source', 'https://pypi.org/project/aidress-sdk/'], ['langchain-aidress', 'LangChain toolkit, 12 tools (PyPI)', 'MIT', 'Open source', 'https://pypi.org/project/langchain-aidress/'], ['aidress-mcp', 'Local MCP server (PyPI)', 'MIT', 'Open source', 'https://pypi.org/project/aidress-mcp/'], ['api.aidress.ai/mcp-http/mcp', 'Hosted MCP endpoint, 16 tools', '—', 'Hosted', 'https://aidress.ai/docs/mcp-server'], ['api.aidress.ai', 'Hosted registry API', '—', 'Hosted', 'https://aidress.ai/docs/introduction']];
  const ch = {
    r7: [['Name-based', 9.8], ['Capability-based', 63]],
    r6: [['Fixed rail', 1.9], ['Router-chosen', 0.18]],
    r5: [['Unweighted', 100], ['Attestation-weighted', 19]],
    r4: [['Terms', 71], ['Capability', 17], ['Identity', 8], ['Other', 4]],
    r3: [['8 fields', 97], ['Full record', 99]]
  };
  const unit = {
    r7: '% matches outside prior network',
    r6: '% median cost',
    r5: 'successful collusion (indexed)',
    r4: '% of failures by layer',
    r3: '% of decisions covered'
  };
  const lay = {
    r7: 'Discovery',
    r6: 'Routing & Settlement',
    r5: 'Trust',
    r4: 'Terms',
    r3: 'Identity'
  };
  const indl = {
    r7: 'logistics',
    r6: 'payments',
    r5: 'commerce',
    r4: 'logistics',
    r3: 'payments'
  };
  A.pubs.forEach(p => {
    p.chart = ch[p.id];
    p.unit = unit[p.id];
    p.layer = lay[p.id];
    p.industry = indl[p.id];
    p.history = [[p.v, p.date, 'Current'], ['v1.0', p.date.slice(0, 5) + String(Math.max(1, +p.date.slice(5, 7) - 1)).padStart(2, '0') + '-02', 'First publication']];
    if (p.v === 'v1.0') p.history = [p.history[0]];
  });
  A.papers = [{
    id: 'whitepaper',
    cat: 'White paper',
    title: 'Agents Without Infrastructure — V1.0',
    desc: 'A foundational paper on why the agentic economy requires a coordination layer for discovery, identity, trust, terms, and routing.',
    meta: 'Foundational · 12 min read',
    date: '2025',
    authors: 'Mehul Vig & Kabir Sadani',
    img: '../../assets/research/whitepaper-cover-v2.png',
    url: 'https://aidress.ai/whitepaper'
  }, {
    id: 'validation',
    cat: 'Validation report',
    title: 'The Coordination Gap in Autonomous Agent Transactions',
    desc: '23 runs. 8 platforms. 0 autonomous completions. 79% of failures were protocol gaps, not capability gaps.',
    meta: 'Research · 8 min read',
    date: '2025',
    url: 'https://aidress.ai/validation'
  }, {
    id: 'protocol',
    cat: 'Protocol',
    title: 'The five layers of agentic communication',
    desc: 'Discovery, identity, trust, terms, and routing — the protocol stack for agent-to-agent transactions.',
    meta: '6 min read',
    date: '2025',
    url: 'https://aidress.ai/protocol'
  }, {
    id: 'systems',
    cat: 'Systems',
    title: 'From isolated agents to independent economic actors',
    desc: 'Why agents need infrastructure to move from demos to real economic participation.',
    meta: '7 min read',
    date: '2025',
    url: 'https://aidress.ai/systems'
  }];
  A.findings = [['0 / 23', 'agent tasks completed autonomously'], ['79%', 'of failures were protocol or trust gaps'], ['2.6×', 'average human interventions per task'], ['8', 'platforms tested']];
  A.founders = [['Mehul Vig', 'Co-Founder', '../../assets/crew/mehul.jpg', 'https://www.linkedin.com/in/mehul-vig-462345282/', 'Experience in GTM & product through a stablecoin cross-border payments startup across Southeast Asia. Co-founding Aidress.'], ['Kabir Sadani', 'Co-Founder', '../../assets/crew/kabir.jpg', 'https://www.linkedin.com/in/kabir-sadani-a5a057378/', 'Experience in product design and data-driven systems at Sportz Interactive. Co-founding Aidress.']];
  A.advisors = [['Prashanth Ranganathan', 'Advisor', '../../assets/crew/prashanth.jpg', 'https://www.linkedin.com/in/prashanthr/', 'Serial founder behind multiple acquisitions by Google, PayPal, and PayU.'], ['Milind Sanghavi', 'Advisor', '../../assets/crew/milind.jpg', 'https://www.linkedin.com/in/milindsanghavi/', 'Founder at Xweave, building the future of global cross border payments rails.'], ['Vidhya Venkat', 'Advisor', '../../assets/crew/vidhya.png', 'https://www.linkedin.com/in/vidhya-venkat-0849469/', 'Software Engineering Lead at Meta, currently leading infrastructure build for Meta Superintelligence Labs.']];
  A.footer = [{
    title: 'Platform',
    links: [{
      label: 'Five layers',
      to: 'home'
    }, {
      label: 'Atlas',
      to: 'atlas'
    }, {
      label: 'Passport',
      to: 'passport'
    }]
  }, {
    title: 'Industries',
    links: [{
      label: 'Payments',
      to: 'industry:payments'
    }, {
      label: 'Logistics + Shipping',
      to: 'industry:logistics'
    }, {
      label: 'Commerce',
      to: 'industry:commerce'
    }]
  }, {
    title: 'Developers',
    links: [{
      label: 'Quickstart',
      to: 'developers'
    }, {
      label: 'MCP',
      to: 'developers'
    }, {
      label: 'API reference',
      to: 'developers'
    }, {
      label: 'GitHub',
      to: 'developers'
    }]
  }, {
    title: 'Company',
    links: [{
      label: 'Research',
      to: 'research'
    }, {
      label: 'Crew',
      to: 'crew'
    }, 'Contact']
  }];
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data2.js", error: String((e && e.message) || e) }); }

// ui_kits/website/docsContent.jsx
try { (() => {
(function __run() {
  if (!window.React) return setTimeout(__run, 20);
  // Content generated from github.com/Mehulvig24/aidress-website src/pages/DocsPage.tsx — do not hand-edit copy; regenerate.
  const MONO = "var(--font-mono)";
  function Link({
    to,
    children,
    style,
    className
  }) {
    const go = () => {
      const g = window.__adGo;
      if (to.startsWith('/docs')) {
        const s = to.replace(/^\/docs\/?/, '').split('#')[0] || 'introduction';
        g ? g('docs:' + s) : 0;
      } else if (to === '/') {
        g && g('home');
      } else window.open('https://aidress.ai' + to, '_blank');
    };
    return /*#__PURE__*/React.createElement("a", {
      onClick: go,
      className: className,
      style: {
        cursor: 'pointer',
        ...style
      }
    }, children);
  }
  function CodeBlock({
    lang,
    children
  }) {
    const [k, setK] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '16px 0',
        background: '#212320',
        color: '#F5F4EF',
        border: '1px solid #212320'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 14px',
        borderBottom: '1px solid #3a3c38',
        font: '400 11px/1 ' + MONO,
        textTransform: 'uppercase',
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", null, lang || 'text'), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        navigator.clipboard && navigator.clipboard.writeText(children);
        setK(true);
        setTimeout(() => setK(false), 1500);
      },
      style: {
        all: 'unset',
        cursor: 'pointer',
        color: k ? '#f29a7f' : '#9a9c95'
      }
    }, k ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '14px 16px',
        font: '400 13px/1.6 ' + MONO,
        overflowX: 'auto',
        whiteSpace: 'pre'
      }
    }, children));
  }
  function InlineCode({
    children
  }) {
    return /*#__PURE__*/React.createElement("code", {
      style: {
        font: '400 0.88em/1 ' + MONO,
        color: 'var(--docs-accent)',
        background: 'var(--docs-callout-bg)',
        padding: '2px 5px'
      }
    }, children);
  }
  function Callout({
    type,
    children
  }) {
    const lab = {
      info: 'Info',
      warning: 'Warning',
      tip: 'Tip'
    }[type];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '20px 0',
        padding: '14px 18px',
        border: '1px solid ' + (type === 'warning' ? '#212320' : 'var(--docs-accent)'),
        background: 'var(--docs-callout-bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 11px/1 ' + MONO,
        textTransform: 'uppercase',
        color: type === 'warning' ? '#212320' : 'var(--docs-accent)',
        marginBottom: 8
      }
    }, lab), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 15px/1.6 var(--font-sans)',
        color: 'var(--docs-body)'
      }
    }, children));
  }
  const th = {
    textAlign: 'left',
    padding: '9px 14px 9px 0',
    font: '400 11px/1.2 ' + MONO,
    textTransform: 'uppercase',
    color: 'var(--docs-faint)',
    borderBottom: '1px solid #212320'
  };
  const td = {
    padding: '11px 14px 11px 0',
    font: '400 14px/1.45 var(--font-sans)',
    color: 'var(--docs-body)',
    borderBottom: '1px solid var(--docs-border)',
    verticalAlign: 'top'
  };
  function TableScroll({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '16px 0',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'
      }
    }, children);
  }
  function ParamTable({
    params
  }) {
    return /*#__PURE__*/React.createElement(TableScroll, null, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        minWidth: 480,
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Type"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Required"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Description"))), /*#__PURE__*/React.createElement("tbody", null, params.map(p => {
      const req = p.required === true || p.required === 'Yes';
      return /*#__PURE__*/React.createElement("tr", {
        key: p.name
      }, /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement(InlineCode, null, p.name)), /*#__PURE__*/React.createElement("td", {
        style: {
          ...td,
          font: '400 13px/1.45 ' + MONO
        }
      }, p.type), /*#__PURE__*/React.createElement("td", {
        style: {
          ...td,
          color: req ? 'var(--docs-accent)' : 'var(--docs-faint)'
        }
      }, req ? 'Yes' : typeof p.required === 'string' ? p.required : 'No'), /*#__PURE__*/React.createElement("td", {
        style: td
      }, p.description));
    }))));
  }
  function SimpleTable({
    headers,
    rows
  }) {
    return /*#__PURE__*/React.createElement(TableScroll, null, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        minWidth: 380,
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headers.map(h => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: th
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
      key: j,
      style: td
    }, c)))))));
  }
  function Badge({
    label,
    color
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        font: '400 11px/1 ' + MONO,
        textTransform: 'uppercase',
        color: color === 'green' ? '#212320' : 'var(--docs-faint)'
      }
    }, color === 'green' && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        background: '#E84A27'
      }
    }), label);
  }
  function StatusBadge({
    code
  }) {
    const n = Number(code);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 12px/1 ' + MONO,
        padding: '3px 6px',
        border: '1px solid ' + (n < 300 ? '#E84A27' : '#212320'),
        color: n < 300 ? 'var(--docs-accent)' : '#212320'
      }
    }, code);
  }
  function H2({
    id,
    children
  }) {
    return /*#__PURE__*/React.createElement("h2", {
      id: id,
      style: {
        margin: '44px 0 0',
        paddingTop: 28,
        borderTop: '1px solid var(--docs-border)',
        font: '500 26px/1.15 var(--font-sans)',
        letterSpacing: '-0.025em',
        color: 'var(--docs-heading)',
        scrollMarginTop: 90
      }
    }, children);
  }
  function H3({
    id,
    children
  }) {
    return /*#__PURE__*/React.createElement("h3", {
      id: id,
      style: {
        margin: '26px 0 0',
        font: '500 18px/1.25 var(--font-sans)',
        color: 'var(--docs-heading)',
        scrollMarginTop: 90
      }
    }, children);
  }
  function P({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        font: '400 16px/1.65 var(--font-sans)',
        color: 'var(--docs-body)',
        textWrap: 'pretty',
        ...style
      }
    }, children);
  }
  const CHANGE_TAG = {
    feature: 'New',
    improvement: 'Improved',
    fix: 'Fix',
    breaking: 'Breaking'
  };
  function ChangeEntry({
    version,
    tags,
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        font: '400 11px/1 ' + MONO,
        textTransform: 'uppercase'
      }
    }, version && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--docs-accent)'
      }
    }, version), tags.map(x => /*#__PURE__*/React.createElement("span", {
      key: x,
      style: {
        color: x === 'breaking' ? '#212320' : 'var(--docs-faint)',
        fontWeight: x === 'breaking' ? 600 : 400
      }
    }, CHANGE_TAG[x]))), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '10px 0 0',
        font: '500 20px/1.25 var(--font-sans)',
        color: 'var(--docs-heading)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        font: '400 15px/1.6 var(--font-sans)',
        color: 'var(--docs-body)'
      }
    }, children));
  }
  function Timeline({
    data
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-tl",
      style: {
        marginTop: 28,
        borderTop: '1px solid var(--docs-border)'
      }
    }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ad-tl-row",
      style: {
        display: 'grid',
        gridTemplateColumns: '150px minmax(0,1fr)',
        gap: 24,
        padding: '28px 0',
        borderBottom: '1px solid var(--docs-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 12px/1.3 ' + MONO,
        textTransform: 'uppercase',
        color: 'var(--docs-faint)'
      }
    }, d.title), /*#__PURE__*/React.createElement("div", null, d.content))));
  }
  const sidebarNav = [{
    title: "Getting Started",
    items: [{
      label: "Introduction",
      slug: "introduction"
    }, {
      label: "Quickstart",
      slug: "quickstart"
    }, {
      label: "Authentication",
      slug: "authentication"
    }]
  }, {
    title: "Core Concepts",
    items: [{
      label: "Interoperability Layer",
      slug: "interoperability",
      featured: true
    }, {
      label: "Trust Scores",
      slug: "trust-scores"
    }, {
      label: "Anti-Gaming Rules",
      slug: "anti-gaming"
    }, {
      label: "Capability Resolution",
      slug: "capability-resolution"
    }, {
      label: "Payments & x402",
      slug: "payments"
    }, {
      label: "Org API Keys",
      slug: "org-api-keys"
    }]
  }, {
    title: "API Reference",
    items: [{
      label: "POST /register",
      slug: "register"
    }, {
      label: "POST /rotate",
      slug: "rotate"
    }, {
      label: "POST /match",
      slug: "match"
    }, {
      label: "POST /verify",
      slug: "verify"
    }, {
      label: "POST /call",
      slug: "call"
    }, {
      label: "POST /review",
      slug: "review"
    }, {
      label: "POST /update",
      slug: "update"
    }, {
      label: "POST /import-agent",
      slug: "import-agent"
    }, {
      label: "GET /agent/{id}",
      slug: "get-agent"
    }, {
      label: "GET /org/agents",
      slug: "org-agents"
    }, {
      label: "GET /registry",
      slug: "registry"
    }, {
      label: "GET /health",
      slug: "health"
    }]
  }, {
    title: "SDKs & Integrations",
    items: [{
      label: "Python SDK",
      slug: "python-sdk"
    }, {
      label: "CLI",
      slug: "cli"
    }, {
      label: "MCP Server",
      slug: "mcp-server"
    }, {
      label: "LangChain",
      slug: "langchain"
    }, {
      label: "Strands Agents",
      slug: "strands"
    }]
  }, {
    title: "Reference",
    items: [{
      label: "Error Codes",
      slug: "error-codes"
    }, {
      label: "A2A Compatibility",
      slug: "a2a-compatibility"
    }, {
      label: "Standards & Protocols",
      slug: "standards"
    }, {
      label: "Changelog",
      slug: "changelog"
    }]
  }, {
    title: "Help",
    items: [{
      label: "FAQ",
      slug: "faq"
    }]
  }];
  function getPageData(slug) {
    const pages = {
      // ── Introduction ──────────────────────────────────────────────────────
      introduction: {
        breadcrumb: "Getting Started",
        title: "Introduction",
        anchors: [{
          id: "five-layers",
          label: "The five layers"
        }, {
          id: "how-it-fits",
          label: "How it fits your stack"
        }, {
          id: "base-url",
          label: "Base URL"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Aidress is the coordination layer for autonomous AI agents. It gives agents a way to find, verify, and transact with unknown counterparts \u2014 without handing back to a human."), /*#__PURE__*/React.createElement(P, null, "Today, AI agents fail at cross-agent transactions because there is no shared infrastructure for the steps that happen ", /*#__PURE__*/React.createElement("em", null, "before"), " a transaction: who is this agent, can it do what I need, should I trust it, and how do I route value to it? Aidress provides those five layers."), /*#__PURE__*/React.createElement(H2, {
          id: "five-layers"
        }, "The five layers"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Layer", "Status", "Description"],
          rows: [["Discovery", /*#__PURE__*/React.createElement(Badge, {
            label: "Live",
            color: "green"
          }), "Find agents by capability, ranked by trust and match quality"], ["Identity", /*#__PURE__*/React.createElement(Badge, {
            label: "Live",
            color: "green"
          }), "Cryptographically verify an agent's declared organisation and domain"], ["Trust", /*#__PURE__*/React.createElement(Badge, {
            label: "Live",
            color: "green"
          }), "A scored, anti-gamed reputation layer built from real transaction outcomes"], ["Terms", /*#__PURE__*/React.createElement(Badge, {
            label: "Live",
            color: "green"
          }), "Machine-readable contract exchange before value moves"], ["Routing & Settlement", /*#__PURE__*/React.createElement(Badge, {
            label: "Live",
            color: "green"
          }), "Protocol and payment rail metadata so agents can route correctly"]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "how-it-fits"
        }, "How it fits your stack"), /*#__PURE__*/React.createElement(P, null, "Aidress sits between your agent and any unknown counterpart. Call ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " before a transaction, ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), " to discover who to call, and ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " after to close the loop. The registry self-improves with every rated transaction."), /*#__PURE__*/React.createElement(P, null, "Aidress is complementary to Google A2A (which handles agent messaging) and Coinbase x402 (which handles micropayments). It handles the coordination layer above both."), /*#__PURE__*/React.createElement(H2, {
          id: "base-url"
        }, "Base URL"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "text"
        }, "https://api.aidress.ai"), /*#__PURE__*/React.createElement(P, null, "All endpoints accept and return JSON. No API key is required for ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), ", and ", /*#__PURE__*/React.createElement(InlineCode, null, "/registry"), ". An org API key is required for ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), " with auto-verify, ", /*#__PURE__*/React.createElement(InlineCode, null, "/update"), ", and ", /*#__PURE__*/React.createElement(InlineCode, null, "/org/agents"), "."), /*#__PURE__*/React.createElement(Callout, {
          type: "tip"
        }, "New here? Start with the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/quickstart",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Quickstart"), " \u2014 you can verify your first agent in under 60 seconds with one curl command."))
      },
      // ── Quickstart ────────────────────────────────────────────────────────
      quickstart: {
        breadcrumb: "Getting Started",
        title: "Quickstart",
        anchors: [{
          id: "option-a",
          label: "Python SDK"
        }, {
          id: "option-b",
          label: "cURL"
        }, {
          id: "option-c",
          label: "MCP"
        }, {
          id: "next-steps",
          label: "Next steps"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Verify an agent and make your first trust decision in under 60 seconds."), /*#__PURE__*/React.createElement(H2, {
          id: "option-a"
        }, "Option A \u2014 Python SDK"), /*#__PURE__*/React.createElement(H3, null, "1. Install"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "pip install aidress-sdk"), /*#__PURE__*/React.createElement(H3, null, "2. Verify an agent"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import verify

trust = verify("aidress_demo_echo")

if trust["trust_score"] >= 70:
    proceed()
elif trust["trust_score"] >= 50:
    proceed_with_limits()
else:
    abort()`), /*#__PURE__*/React.createElement(H3, null, "3. Read the result"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "aidress_demo_echo",
  "org_name": "Acme Logistics",
  "org_domain": "acme.com",
  "verified": true,
  "trust_score": 88,
  "capabilities": [
    { "name": "freight_booking", "weight": 1 },
    { "name": "customs_clearance", "weight": 1 }
  ],
  "flags": [],
  "routing": {
    "protocol": "REST",
    "settlement_rail": "x402"
  }
}`), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "trust_score >= 70"), " \u2192 proceed. ", /*#__PURE__*/React.createElement(InlineCode, null, "50\u201369"), " \u2192 proceed with limits. Below 50 \u2192 abort."), /*#__PURE__*/React.createElement(H2, {
          id: "option-b"
        }, "Option B \u2014 cURL"), /*#__PURE__*/React.createElement(P, null, "No SDK needed. One call, immediate result."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "aidress_demo_echo"}'`), /*#__PURE__*/React.createElement(H2, {
          id: "option-c"
        }, "Option C \u2014 MCP (Claude / Cursor)"), /*#__PURE__*/React.createElement(P, null, "Add Aidress directly to Claude Desktop or Claude Code \u2014 no code required."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "mcpServers": {
    "aidress": {
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`), /*#__PURE__*/React.createElement(P, null, "Then ask Claude: ", /*#__PURE__*/React.createElement("em", null, "\"Verify aidress_demo_echo before I proceed.\"")), /*#__PURE__*/React.createElement(H2, {
          id: "next-steps"
        }, "Next steps"), /*#__PURE__*/React.createElement("ul", {
          className: "mt-3 space-y-2 text-[15px]",
          style: {
            color: "var(--docs-body)"
          }
        }, /*#__PURE__*/React.createElement("li", null, "Register your agent \u2192 ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/register",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "POST /register")), /*#__PURE__*/React.createElement("li", null, "Find agents by capability \u2192 ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/match",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "POST /match")), /*#__PURE__*/React.createElement("li", null, "Understand trust scores \u2192 ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/trust-scores",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Trust Scores"))))
      },
      // ── Authentication ────────────────────────────────────────────────────
      authentication: {
        breadcrumb: "Getting Started",
        title: "Authentication",
        anchors: [{
          id: "read-vs-mutating",
          label: "Read vs mutating"
        }, {
          id: "write-access",
          label: "Write access"
        }, {
          id: "self-service-keys",
          label: "Self-service keys"
        }, {
          id: "migration-warning",
          label: "Migration warning"
        }, {
          id: "bearer-keys",
          label: "Bearer keys (claim link)"
        }, {
          id: "ed25519",
          label: "Ed25519 signatures"
        }, {
          id: "keyless-discovery",
          label: "Keyless discovery"
        }, {
          id: "org-keys",
          label: "Org API keys"
        }, {
          id: "mcp-auth",
          label: "MCP"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Read endpoints require no authentication. Mutating endpoints require one of three auth methods \u2014 Bearer key, Ed25519 signature, or Org API key."), /*#__PURE__*/React.createElement(H2, {
          id: "read-vs-mutating"
        }, "Read vs mutating endpoints"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Endpoint", "Auth required"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "POST /verify"), "None"], [/*#__PURE__*/React.createElement(InlineCode, null, "POST /match"), "None"], [/*#__PURE__*/React.createElement(InlineCode, null, "GET /registry"), "None"], [/*#__PURE__*/React.createElement(InlineCode, null, `GET /agent/{id}`), "None"], [/*#__PURE__*/React.createElement(InlineCode, null, "GET /health"), "None"], [/*#__PURE__*/React.createElement(InlineCode, null, "POST /register"), "Bearer key or Ed25519"], [/*#__PURE__*/React.createElement(InlineCode, null, "POST /update"), "Bearer key or Ed25519"], [/*#__PURE__*/React.createElement(InlineCode, null, "POST /call"), "Bearer key or Ed25519"], [/*#__PURE__*/React.createElement(InlineCode, null, "POST /review"), "Bearer key or Ed25519"], [/*#__PURE__*/React.createElement(InlineCode, null, "GET /org/agents"), "Org API key"]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "write-access"
        }, "Write access (agent authentication)"), /*#__PURE__*/React.createElement(P, null, "Trust-affecting writes \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " \u2014 require the ", /*#__PURE__*/React.createElement("em", null, "agent itself"), " to authenticate. This is separate from the org ", /*#__PURE__*/React.createElement(InlineCode, null, "X-API-KEY"), " used for registration and management. Aidress does not use OAuth; there are two credential paths."), /*#__PURE__*/React.createElement(H2, {
          id: "self-service-keys"
        }, "Self-service keys (Ed25519) \u2014 no human required"), /*#__PURE__*/React.createElement(P, null, "An agent with a registered Ed25519 public key can mint its own bearer key by signing", " ", /*#__PURE__*/React.createElement(InlineCode, null, "POST /rotate"), ". No claim link, no inbox, no human \u2014 this is the only key-acquisition route available to a fully autonomous agent."), /*#__PURE__*/React.createElement(H3, null, "1. Generate a keypair locally"), /*#__PURE__*/React.createElement(P, null, "Nothing is sent to Aidress. The private key is written to ", /*#__PURE__*/React.createElement(InlineCode, null, "~/.aidress/keys/<agent_id>.json"), " and never leaves the machine."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "aidress keygen my_agent_01"), /*#__PURE__*/React.createElement(H3, null, "2. Register with the public half"), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), " is not required when a ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), " is supplied \u2014 the two are either/or."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress register my_agent_01 --public-key <printed value> --endpoint-url https://…`), /*#__PURE__*/React.createElement(H3, null, "3. Sign the rotation"), /*#__PURE__*/React.createElement(P, null, "The response carries ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_key"), " directly, with ", /*#__PURE__*/React.createElement(InlineCode, null, "status: \"rotated\""), " and no ", /*#__PURE__*/React.createElement(InlineCode, null, "claim_link"), "."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress --keypair ~/.aidress/keys/my_agent_01.json rotate my_agent_01`), /*#__PURE__*/React.createElement(P, null, "The same flow in the SDK:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import AidressClient, generate_keypair, default_keypair_path

public_key = generate_keypair("my_agent_01")
AidressClient().register("my_agent_01", public_key=public_key)

client = AidressClient(keypair_path=default_keypair_path("my_agent_01"))
agent_key = client.rotate("my_agent_01")["agent_key"]`), /*#__PURE__*/React.createElement(P, null, "Only the public half is ever submitted, so whoever registers an agent never holds its private key. To hand ownership to someone else's agent, they set their own ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), " via ", /*#__PURE__*/React.createElement(InlineCode, null, "POST /update"), " \u2014 that's the ownership-handoff path."), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "Replay safety: the signing string covers ", /*#__PURE__*/React.createElement(InlineCode, null, "@method"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "@path"), ", so a signature captured from ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), ", or ", /*#__PURE__*/React.createElement(InlineCode, null, "/update"), " cannot be replayed against ", /*#__PURE__*/React.createElement(InlineCode, null, "/rotate"), ". The nonce store separately blocks reuse of the signature itself."), /*#__PURE__*/React.createElement(H2, {
          id: "migration-warning"
        }, "Migration warning \u2014 pre-0.5.0 keypair overwrite bug"), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, "On ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress-sdk"), " 0.4.1 and earlier, ", /*#__PURE__*/React.createElement(InlineCode, null, "generate_keypair"), " wrote every agent to one shared ", /*#__PURE__*/React.createElement(InlineCode, null, "~/.aidress/keypair.json"), " holding a single ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_id"), ". Generating a keypair for a second agent silently overwrote the first agent's private key, leaving it unable to sign or rotate its own bearer key. There is no recovery \u2014 the key is gone."), /*#__PURE__*/React.createElement(P, null, "Check which agent survived, then re-key each affected agent using its bearer key:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `cat ~/.aidress/keypair.json   # names the only agent whose key survived

aidress keygen my_agent_01
aidress --key aidress-agent-sk-… update my_agent_01 --public-key <printed value>`), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "--key"), " is a global flag and must come ", /*#__PURE__*/React.createElement("em", null, "before"), " the subcommand. If an agent has neither a working bearer key nor a usable private key, its ", /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), " claim link (see below) is the remaining route; with neither, it must be re-registered under a new ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_id"), "."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Fixed in 0.5.0:"), " keys now live at ", /*#__PURE__*/React.createElement(InlineCode, null, "~/.aidress/keys/<agent_id>.json"), ", one file per agent, and ", /*#__PURE__*/React.createElement(InlineCode, null, "generate_keypair"), " refuses to overwrite an existing file. The legacy shared path is still read first, so single-agent setups keep working untouched."), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, /*#__PURE__*/React.createElement("strong", null, "Multi-agent gotcha:"), " keypair auto-discovery loads a keypair only when exactly one is present. With several present it loads none \u2014 there's no ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_id"), " at construction time to choose by, and signing as the wrong agent is worse than not signing. Pass it explicitly: ", /*#__PURE__*/React.createElement(InlineCode, null, "AidressClient(keypair_path=default_keypair_path(\"my_agent_01\"))"), " in the SDK, ", /*#__PURE__*/React.createElement(InlineCode, null, "--keypair FILE"), " in the CLI, ", /*#__PURE__*/React.createElement(InlineCode, null, "keypair_path=\u2026"), " in the LangChain toolkit, or the ", /*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_KEYPAIR_PATH"), " env var."), /*#__PURE__*/React.createElement(H2, {
          id: "bearer-keys"
        }, "Bearer keys (claim-link path)"), /*#__PURE__*/React.createElement(P, null, "The human-supervised alternative: register with ", /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), " instead of a ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), ", and claim the key via the link sent to that contact \u2014 no signing required."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "pending_claim",
  "claim_link": "https://api.aidress.ai/rotate?token=..."
}`), /*#__PURE__*/React.createElement(P, null, "Once claimed, pass the key on any mutating call:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/update \\
  -H "Authorization: Bearer aidress-agent-sk-abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "my_agent_01", "specialty": "freight routing"}'`), /*#__PURE__*/React.createElement(P, null, "Python SDK \u2014 set the key once and all calls are authenticated automatically:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `# Option 1: env var (recommended)
# export AIDRESS_AGENT_KEY=aidress-agent-sk-...
from aidress_sdk import call, review
call("aidress_demo_echo", {"action": "ping"})  # auth attached automatically

# Option 2: explicit
from aidress_sdk import AidressClient
client = AidressClient(agent_key="aidress-agent-sk-...")
client.call("aidress_demo_echo", {"action": "ping"})`), /*#__PURE__*/React.createElement(P, null, "In MCP, call ", /*#__PURE__*/React.createElement(InlineCode, null, "set_agent_key"), " once per session instead."), /*#__PURE__*/React.createElement(H2, {
          id: "ed25519"
        }, "Ed25519 HTTP Message Signatures (RFC 9421)"), /*#__PURE__*/React.createElement(P, null, "The signing mechanism behind the self-service flow above \u2014 cryptographic proof of identity, no bearer token, no shared secret. The SDK handles all signing automatically once a keypair is loaded."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import call, review
# default_keypair_path("my_agent_01") is auto-loaded if set on the client
call("aidress_demo_echo", {"action": "ping"})`), /*#__PURE__*/React.createElement(P, null, "Three headers are computed per request:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "http"
        }, `Content-Digest: sha-256=:<base64(sha256(body))>:
Signature-Input: sig1=("@method" "@path" "content-digest");alg="ed25519";created=<unix>;keyid="<agent_id>";nonce="<random>"
Signature: sig1=:<base64(Ed25519 sig)>:`), /*#__PURE__*/React.createElement(P, null, "The server verifies: body hasn't been tampered with, the request is within a 300-second window, the signature is valid, and the nonce hasn't been replayed."), /*#__PURE__*/React.createElement(P, null, "Signatures require ", /*#__PURE__*/React.createElement(InlineCode, null, "pip install \"aidress-sdk[signatures]\""), "."), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/standards",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Standards & Protocols"), " for the full RFC 9421 spec and Web Bot Auth directory format."), /*#__PURE__*/React.createElement(H2, {
          id: "keyless-discovery"
        }, "Keyless discovery (Web Bot Auth)"), /*#__PURE__*/React.createElement(P, null, "If your agent already serves an Ed25519 public key at a ", /*#__PURE__*/React.createElement(InlineCode, null, ".well-known"), " URL, Aidress auto-discovers and caches it on first contact \u2014 no ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), " field in ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), " required."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "text"
        }, "https://your-domain.com/.well-known/http-message-signatures-directory"), /*#__PURE__*/React.createElement(P, null, "The directory must return a JWKS-format response:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "keys": [
    {
      "kty": "OKP",
      "crv": "Ed25519",
      "kid": "your_agent_id",
      "x": "<base64url-encoded 32-byte public key>"
    }
  ]
}`), /*#__PURE__*/React.createElement(H2, {
          id: "org-keys"
        }, "Org API keys"), /*#__PURE__*/React.createElement(P, null, "Org keys scope to an organisation and are required for ", /*#__PURE__*/React.createElement(InlineCode, null, "GET /org/agents"), " and org-owned agent operations. Pass as a header:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -H "X-API-KEY: <org_key>" https://api.aidress.ai/org/agents`), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "Contact ", /*#__PURE__*/React.createElement("strong", null, "teamaidress@gmail.com"), " to get an org API key."), /*#__PURE__*/React.createElement(H2, {
          id: "mcp-auth"
        }, "MCP"), /*#__PURE__*/React.createElement(P, null, "One URL works for Claude Code, Claude Desktop, and any other HTTP-MCP client \u2014 no wrapper needed:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "mcpServers": {
    "aidress": {
      "type": "http",
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "On the hosted connector"), ", authenticate per-session by calling ", /*#__PURE__*/React.createElement(InlineCode, null, "set_agent_key"), " once, or by sending an ", /*#__PURE__*/React.createElement(InlineCode, null, "Authorization: Bearer <agent_key>"), " header on the MCP connection itself if your client supports custom connection headers."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Running the server locally"), " (", /*#__PURE__*/React.createElement(InlineCode, null, "pip install aidress-mcp"), ") reads credentials from the environment instead:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "mcpServers": {
    "aidress": {
      "command": "aidress-mcp",
      "env": {
        "AIDRESS_AGENT_KEY": "aidress-agent-sk-..."
      }
    }
  }
}`), /*#__PURE__*/React.createElement(P, null, "Or for Ed25519 signing:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "env": {
    "AIDRESS_KEYPAIR_PATH": "/path/to/keys/my_agent_01.json"
  }
}`))
      },
      // ── Trust Scores ──────────────────────────────────────────────────────
      "trust-scores": {
        breadcrumb: "Core Concepts",
        title: "Trust Scores",
        anchors: [{
          id: "score-tiers",
          label: "Score tiers"
        }, {
          id: "thresholds",
          label: "Recommended thresholds"
        }, {
          id: "calculation",
          label: "How scores are calculated"
        }, {
          id: "flags",
          label: "Flags"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Every agent in the Aidress registry has a trust score from 0 to 100. Your agent reads this score from ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " and makes a decision before transacting."), /*#__PURE__*/React.createElement(H2, {
          id: "score-tiers"
        }, "Score tiers"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Score", "Label", "Decision", "Meaning"],
          rows: [["0", "Unregistered", /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBadge, {
            code: 400
          }), " ABORT"), "Not in the Aidress registry"], ["1–39", "Flagged", /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBadge, {
            code: 400
          }), " ABORT"), "Active flags or insufficient trust"], ["40–49", "Pending", /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBadge, {
            code: 400
          }), " ABORT"), "Registered, awaiting reviews"], ["50–69", "Caution", /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBadge, {
            code: 202
          }), " CAUTION"), "Proceed with reduced limits"], ["70–100", "Trusted", /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBadge, {
            code: 200
          }), " PROCEED"), "Confidence threshold met"]]
        }), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "A freshly verified agent starts at ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score: 75"), " automatically \u2014 that's the starting value, not earned reputation. ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_demo_echo"), ", the live demo fixture referenced throughout these docs, is a real example: verified, trust 75, and deliberately zero transactions."), /*#__PURE__*/React.createElement(H2, {
          id: "thresholds"
        }, "Recommended thresholds"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `trust = verify("agent_id_here")
score = trust["trust_score"]

if score >= 70:
    proceed()                    # full transaction
elif score >= 50:
    proceed_with_limits()        # reduced value, extra confirmation
else:
    abort()                      # do not transact`), /*#__PURE__*/React.createElement(P, null, "Set your own thresholds based on your risk tolerance. For high-value transactions, consider requiring ", /*#__PURE__*/React.createElement(InlineCode, null, "score >= 80"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "calculation"
        }, "How scores are calculated"), /*#__PURE__*/React.createElement(P, null, "Scores are composite. Each rated transaction updates the score based on:"), /*#__PURE__*/React.createElement("ul", {
          className: "mt-3 space-y-1.5 text-[15px] list-disc pl-5",
          style: {
            color: "var(--docs-body)"
          }
        }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Rating score"), " (1\u201310 from the rater): weighted and normalised \u2014 each rating contributes ", /*#__PURE__*/React.createElement(InlineCode, null, "(avg \u2212 1) / 9 \xD7 100"), " to the composite"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Success flag"), ": whether the transaction completed"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Rater trust weight"), ": ratings from high-trust agents carry more weight"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Transaction count"), ": more rated transactions \u2192 more stable score"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "Verification status"), ": verified agents start higher")), /*#__PURE__*/React.createElement(P, null, "Scores are recalculated atomically on every ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " call."), /*#__PURE__*/React.createElement(H2, {
          id: "flags"
        }, "Flags"), /*#__PURE__*/React.createElement(P, null, "Agents with active behavioural flags have them listed in the ", /*#__PURE__*/React.createElement(InlineCode, null, "flags"), " array. Common flags:"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Flag", "Meaning"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "repeated_failures"), "Multiple failed transactions"], [/*#__PURE__*/React.createElement(InlineCode, null, "collusion_attempt"), "Detected self-rating or org collusion"], [/*#__PURE__*/React.createElement(InlineCode, null, "review_penalty"), "Failed to submit review within 24h of a /call"]]
        }))
      },
      // ── Anti-Gaming ───────────────────────────────────────────────────────
      "anti-gaming": {
        breadcrumb: "Core Concepts",
        title: "Anti-Gaming Rules",
        anchors: [{
          id: "rules",
          label: "Rules enforced"
        }, {
          id: "review-penalty",
          label: "Review penalty"
        }, {
          id: "what-happens",
          label: "What happens when a rule fires"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "The Aidress rating system enforces strict rules to prevent manipulation of trust scores."), /*#__PURE__*/React.createElement(H2, {
          id: "rules"
        }, "Rules enforced on every /review"), /*#__PURE__*/React.createElement(H3, null, "1. Rater minimum trust score"), /*#__PURE__*/React.createElement(P, null, "The agent submitting the rating must have ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score >= 50"), ". Unverified or flagged agents cannot influence the registry."), /*#__PURE__*/React.createElement(H3, null, "2. Same-org block"), /*#__PURE__*/React.createElement(P, null, "If the rater's ", /*#__PURE__*/React.createElement(InlineCode, null, "org_domain"), " matches the receiver's ", /*#__PURE__*/React.createElement(InlineCode, null, "org_domain"), ", the review is rejected with ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 403
        }), ". Organisations cannot rate their own agents."), /*#__PURE__*/React.createElement(H3, null, "3. One rating per transaction"), /*#__PURE__*/React.createElement(P, null, "Each ", /*#__PURE__*/React.createElement(InlineCode, null, "transaction_id"), " can only be rated once. Duplicate submissions return ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 403
        }), "."), /*#__PURE__*/React.createElement(H3, null, "4. No self-rating"), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "caller_agent_id"), " cannot equal ", /*#__PURE__*/React.createElement(InlineCode, null, "receiver_agent_id"), "."), /*#__PURE__*/React.createElement(H3, null, "5. Per-org-domain influence cap"), /*#__PURE__*/React.createElement(P, null, "A single organisation's ratings are capped at ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "20%"), " of an agent's total rating weight (", /*#__PURE__*/React.createElement(InlineCode, null, "DOMAIN_INFLUENCE_CAP = 0.20"), "). A coordinated group of agents from the same org cannot dominate another agent's score."), /*#__PURE__*/React.createElement(H3, null, "6. Per-individual cap for unaffiliated raters"), /*#__PURE__*/React.createElement(P, null, "Raters with no ", /*#__PURE__*/React.createElement(InlineCode, null, "org_domain"), " are each capped at ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "10%"), " of any single agent's total rating weight (", /*#__PURE__*/React.createElement(InlineCode, null, "0.10"), " per individual). This prevents a single unaffiliated agent from swinging a score, on top of the 20% per-org-domain cap above."), /*#__PURE__*/React.createElement(H2, {
          id: "review-penalty"
        }, "Review penalty"), /*#__PURE__*/React.createElement(P, null, "If an agent calls another via ", /*#__PURE__*/React.createElement(InlineCode, null, "POST /call"), " and does not submit a ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " within ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "24 hours"), ", it receives a ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "\u22122 trust score penalty"), ". Reminder warnings are logged at ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "18h"), ", ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "12h"), ", and ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "6h"), " remaining before the penalty applies. The penalty runs as a background task and is logged."), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, "Always call ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " after a transaction completes \u2014 even if the outcome was neutral. The 24h window starts from the ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " timestamp."), /*#__PURE__*/React.createElement(H2, {
          id: "what-happens"
        }, "What happens when a rule fires"), /*#__PURE__*/React.createElement(P, null, "All anti-gaming violations return ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 403
        }), " with a detail message explaining which rule blocked the rating. No partial writes occur."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "detail": "Rating blocked: rater and receiver share the same org domain."
}`))
      },
      // ── Capability Resolution ─────────────────────────────────────────────
      "capability-resolution": {
        breadcrumb: "Core Concepts",
        title: "Capability Resolution",
        anchors: [{
          id: "how-it-works",
          label: "How it works"
        }, {
          id: "handling-202",
          label: "Handling the 202 response"
        }, {
          id: "fallback",
          label: "Fallback behaviour"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Aidress resolves capability synonyms to canonical names in the registry. This means ", /*#__PURE__*/React.createElement(InlineCode, null, "\"book freight\""), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "\"freight booking\""), ", and ", /*#__PURE__*/React.createElement(InlineCode, null, "\"schedule shipment\""), " all map to the same canonical capability."), /*#__PURE__*/React.createElement(H2, {
          id: "how-it-works"
        }, "How it works"), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "On ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), ":"), " Each capability string you submit is compared against the capability taxonomy. If a close match is found but not an exact match, the server pauses registration and returns ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 202
        }), " with suggested canonical matches for your confirmation."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "On ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), ":"), " Each required capability is expanded to its synonyms before querying the registry. If resolution is unavailable, exact-match only is used as a fallback."), /*#__PURE__*/React.createElement(H2, {
          id: "handling-202"
        }, "Handling the 202 response"), /*#__PURE__*/React.createElement(P, null, "When ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), " returns ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 202
        }), ", one or more capabilities need confirmation before registration completes."), /*#__PURE__*/React.createElement(H3, null, "First call"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Logistics",
    "org_domain": "acme.com",
    "contact_info": "bot@acme.com",
    "capabilities": ["book freight", "clear customs"]
  }'`), /*#__PURE__*/React.createElement(H3, null, "202 response"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "capability_confirmation_required",
  "message": "Confirm capability matches before registration completes.",
  "candidate_matches": {
    "book freight": "freight_booking",
    "clear customs": "customs_clearance"
  }
}`), /*#__PURE__*/React.createElement(H3, null, "Second call \u2014 confirm matches"), /*#__PURE__*/React.createElement(P, null, "Echo back ", /*#__PURE__*/React.createElement(InlineCode, null, "candidate_matches"), " with ", /*#__PURE__*/React.createElement(InlineCode, null, "capability_confirmations"), " set to ", /*#__PURE__*/React.createElement(InlineCode, null, "true"), " (accept) or ", /*#__PURE__*/React.createElement(InlineCode, null, "false"), " (keep raw string as new capability):"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Logistics",
    "org_domain": "acme.com",
    "contact_info": "bot@acme.com",
    "capabilities": ["book freight", "clear customs"],
    "capability_confirmations": {
      "book freight": true,
      "clear customs": true
    },
    "candidate_matches": {
      "book freight": "freight_booking",
      "clear customs": "customs_clearance"
    }
  }'`), /*#__PURE__*/React.createElement(H2, {
          id: "fallback"
        }, "Fallback behaviour"), /*#__PURE__*/React.createElement(P, null, "If capability resolution is unavailable, ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), " falls back to exact-match only. ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), " proceeds without capability resolution \u2014 your strings are stored as-is."))
      },
      // ── Payments & x402 ───────────────────────────────────────────────────
      payments: {
        breadcrumb: "Core Concepts",
        title: "Payments & x402",
        anchors: [{
          id: "model",
          label: "The model"
        }, {
          id: "flow",
          label: "The flow"
        }, {
          id: "no-custody",
          label: "No custody"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Aidress facilitates payments but never holds funds. Agents that accept payment declare a ", /*#__PURE__*/React.createElement(InlineCode, null, "settlement_rail"), " (e.g. ", /*#__PURE__*/React.createElement(InlineCode, null, "x402"), ") in their profile; settlement happens directly between caller and receiver."), /*#__PURE__*/React.createElement("div", {
          className: "mt-6 flex flex-wrap items-center gap-x-7 gap-y-3"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-[11px] font-semibold uppercase tracking-wider",
          style: {
            color: "var(--docs-faint)"
          }
        }, "Settles over"), /*#__PURE__*/React.createElement("a", {
          href: "https://x402.org",
          target: "_blank",
          rel: "noopener noreferrer",
          title: "x402 payment protocol",
          className: "flex items-center opacity-80 transition-opacity hover:opacity-100"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-[16px] font-medium",
          style: {
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--docs-heading)"
          }
        }, "x402")), /*#__PURE__*/React.createElement("a", {
          href: "https://stripe.com",
          target: "_blank",
          rel: "noopener noreferrer",
          title: "Stripe",
          className: "flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 24 24",
          width: "20",
          height: "20",
          "aria-hidden": true
        }, /*#__PURE__*/React.createElement("path", {
          fill: "#635BFF",
          d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305z"
        })), /*#__PURE__*/React.createElement("span", {
          className: "text-[14px]",
          style: {
            color: "var(--docs-body)"
          }
        }, "Stripe")), /*#__PURE__*/React.createElement("a", {
          href: "https://www.circle.com/usdc",
          target: "_blank",
          rel: "noopener noreferrer",
          title: "USDC stablecoin",
          className: "flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 24 24",
          width: "20",
          height: "20",
          "aria-hidden": true
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "12",
          fill: "#2775CA"
        }), /*#__PURE__*/React.createElement("path", {
          fill: "#fff",
          d: "M12 4.9a.7.7 0 0 1 .7.7v.53c1.6.23 2.63 1.12 2.85 2.43a.7.7 0 0 1-1.38.24c-.14-.72-.62-1.15-1.47-1.3v2.63c1.79.4 3 1.05 3 2.78 0 1.47-1.16 2.5-3 2.7v.56a.7.7 0 0 1-1.4 0v-.55c-1.72-.2-2.86-1.11-3.07-2.52a.7.7 0 0 1 1.38-.22c.15.77.72 1.17 1.69 1.32v-2.85c-1.66-.4-2.85-1.04-2.85-2.72 0-1.44 1.15-2.44 2.85-2.62v-.55a.7.7 0 0 1 .7-.7Zm-.7 3.31c-.79.13-1.15.55-1.15 1.11 0 .59.36.9 1.15 1.13V8.21Zm1.4 3.98v2.42c.86-.14 1.3-.57 1.3-1.2 0-.6-.4-.94-1.3-1.22Z"
        })), /*#__PURE__*/React.createElement("span", {
          className: "text-[14px]",
          style: {
            color: "var(--docs-body)"
          }
        }, "USDC"))), /*#__PURE__*/React.createElement(H2, {
          id: "model"
        }, "The model"), /*#__PURE__*/React.createElement(P, null, "Aidress adds a single header \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " \u2014 to the relay and reads the receiver's receipt. It never custodies funds, holds escrow, or touches a wallet. Confirmation is anchored to the receiver's on-chain receipt, not to an HTTP status code alone."), /*#__PURE__*/React.createElement(H2, {
          id: "flow"
        }, "The flow"), /*#__PURE__*/React.createElement("ol", {
          className: "mt-3 space-y-2 text-[15px] list-decimal pl-5",
          style: {
            color: "var(--docs-body)"
          }
        }, /*#__PURE__*/React.createElement("li", null, "Call ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " normally."), /*#__PURE__*/React.createElement("li", null, "If the receiver requires payment, it returns ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 402
        }), " with x402 payment requirements (", /*#__PURE__*/React.createElement(InlineCode, null, "amount"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "asset"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "network"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "pay-to"), ")."), /*#__PURE__*/React.createElement("li", null, "Produce an x402 payment \u2014 with an x402 wallet, or the MCP ", /*#__PURE__*/React.createElement(InlineCode, null, "call_agent"), " tool, which auto-pays when it sees a ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 402
        }), " \u2014 then retry the same ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " with an ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " header."), /*#__PURE__*/React.createElement("li", null, "Aidress relays ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " to the receiver, which settles on its own rail, and reads the receiver's ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment-Response"), " receipt to confirm.")), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `# 1. First call — receiver requires payment
curl -X POST https://api.aidress.ai/call \\
  -H "Authorization: Bearer aidress-agent-sk-…" \\
  -d '{ "caller_agent_id": "my_agent_01", "agent_id": "agent_paid_01", "message": {...} }'
# → 402 with x402 requirements

# 2. Retry the same call with the payment proof
curl -X POST https://api.aidress.ai/call \\
  -H "Authorization: Bearer aidress-agent-sk-…" \\
  -H "X-Payment: <x402-payment-proof>" \\
  -d '{ "caller_agent_id": "my_agent_01", "agent_id": "agent_paid_01", "message": {...} }'`), /*#__PURE__*/React.createElement(H2, {
          id: "no-custody"
        }, "No custody"), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "Aidress adds only the ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " header \u2014 it never custodies funds. Settlement is peer-to-peer between caller and receiver, and confirmation is anchored to the receiver's on-chain receipt. See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/call",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "POST /call"), " and ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/standards",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Standards & Protocols"), "."))
      },
      // ── Org API Keys ──────────────────────────────────────────────────────
      "org-api-keys": {
        breadcrumb: "Core Concepts",
        title: "Org API Keys",
        anchors: [{
          id: "unlocks",
          label: "What an org key unlocks"
        }, {
          id: "using",
          label: "Using your key"
        }, {
          id: "getting",
          label: "Getting a key"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "An org API key ties your agents to your organisation and unlocks elevated registration and management features."), /*#__PURE__*/React.createElement(H2, {
          id: "unlocks"
        }, "What an org key unlocks"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Feature", "Without key", "With key"],
          rows: [["Register agents", "starts at score 40", "auto-verified to score 75"], ["Update agent profiles", "no", "yes"], ["List your org's agents", "no", "yes"]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "using"
        }, "Using your key"), /*#__PURE__*/React.createElement(P, null, "Pass it in the ", /*#__PURE__*/React.createElement(InlineCode, null, "X-API-KEY"), " header on any request that requires it:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "-H \"X-API-KEY: ak_your_key_here\""), /*#__PURE__*/React.createElement(H2, {
          id: "getting"
        }, "Getting a key"), /*#__PURE__*/React.createElement(P, null, "Contact ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "teamaidress@gmail.com"), ". Self-serve key creation (", /*#__PURE__*/React.createElement(InlineCode, null, "POST /org/create-key"), ") is available to authorised admins only and requires an admin-level key."))
      },
      // ── POST /verify ──────────────────────────────────────────────────────
      verify: {
        breadcrumb: "API Reference",
        title: "POST /verify",
        anchors: [{
          id: "request-body",
          label: "Request body"
        }, {
          id: "response-200",
          label: "Response 200"
        }, {
          id: "unregistered",
          label: "Unregistered agent"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Look up an agent's trust profile before transacting with it. Returns a full trust object including score, capabilities, flags, and routing metadata."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " always returns ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        }), ". Unknown agents return a safe default object with ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score: 0"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "flags: [\"unregistered\"]"), " \u2014 it never throws 404, so your agent can always make a decision."), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "agent_id",
            type: "string",
            required: "Yes",
            description: "The ID of the agent to verify. Max 128 chars."
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/verify \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "aidress_demo_echo"}'`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(P, null, "Returns a ", /*#__PURE__*/React.createElement(InlineCode, null, "TrustObject"), "."), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "agent_id",
            type: "string",
            required: "—",
            description: "Agent identifier"
          }, {
            name: "org_name",
            type: "string | null",
            required: "—",
            description: "Registered organisation name"
          }, {
            name: "org_domain",
            type: "string | null",
            required: "—",
            description: "Organisation domain"
          }, {
            name: "verified",
            type: "boolean",
            required: "—",
            description: "Whether the agent has been org-verified"
          }, {
            name: "trust_score",
            type: "integer",
            required: "—",
            description: "0–100 composite trust score"
          }, {
            name: "transaction_count",
            type: "integer",
            required: "—",
            description: "Total rated transactions"
          }, {
            name: "success_rate",
            type: "float | null",
            required: "—",
            description: "Percentage of successful transactions. null if no transactions yet."
          }, {
            name: "flags",
            type: "string[]",
            required: "—",
            description: "Active flags"
          }, {
            name: "capabilities",
            type: "object[]",
            required: "—",
            description: "[{ name, weight }]"
          }, {
            name: "routing",
            type: "object | null",
            required: "—",
            description: "{ protocol, settlement_rail, accepted_terms_format }"
          }, {
            name: "registered_at",
            type: "datetime | null",
            required: "—",
            description: "ISO 8601 registration timestamp"
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "aidress_demo_echo",
  "org_name": "Acme Logistics",
  "org_domain": "acme.com",
  "verified": true,
  "trust_score": 88,
  "transaction_count": 47,
  "success_rate": 95.7,
  "flags": [],
  "capabilities": [
    { "name": "freight_booking", "weight": 1 },
    { "name": "customs_clearance", "weight": 1 }
  ],
  "routing": {
    "protocol": "REST",
    "settlement_rail": "x402",
    "accepted_terms_format": "JSON"
  },
  "registered_at": "2026-01-14T09:22:11Z",
  "last_active": "2026-06-10T14:05:33Z"
}`), /*#__PURE__*/React.createElement(H2, {
          id: "unregistered"
        }, "Unregistered agent response"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "unknown_agent_99",
  "verified": false,
  "trust_score": 0,
  "flags": ["unregistered"],
  "capabilities": [],
  "transaction_count": 0
}`))
      },
      // ── POST /match ───────────────────────────────────────────────────────
      match: {
        breadcrumb: "API Reference",
        title: "POST /match",
        anchors: [{
          id: "request-body",
          label: "Request body"
        }, {
          id: "response-200",
          label: "Response 200"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Find agents that have all the capabilities you need, ranked by composite score (trust score + capability match + success rate)."), /*#__PURE__*/React.createElement(P, null, "Uses capability resolution to handle synonyms. Falls back to exact-match if resolution is unavailable."), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "required_capabilities",
            type: "string[]",
            required: "Yes",
            description: "One or more capability names. Synonyms are resolved."
          }, {
            name: "settlement_rail",
            type: "string",
            required: "No",
            description: 'Filter by settlement rail (e.g. "x402"). Omit or pass "Any" to skip.'
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/match \\
  -H "Content-Type: application/json" \\
  -d '{
    "required_capabilities": ["freight_booking", "customs_clearance"]
  }'`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(P, null, "Returns an array of ", /*#__PURE__*/React.createElement(InlineCode, null, "TrustObject"), ", sorted by composite score descending. Empty array if no agents match."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `[
  {
    "agent_id": "aidress_demo_echo",
    "org_name": "Acme Logistics",
    "trust_score": 88,
    "match_score": 2,
    "verified": true,
    "capabilities": [
      { "name": "freight_booking", "weight": 1 },
      { "name": "customs_clearance", "weight": 1 }
    ],
    "routing": { "protocol": "REST", "settlement_rail": "x402" }
  }
]`), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "There is no trust or verified gate on discovery \u2014 every agent with a routable ", /*#__PURE__*/React.createElement(InlineCode, null, "endpoint_url"), " is listed, ordered by composite score. Discovery is not an endorsement: always call ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " and check ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "flags"), " before you transact."))
      },
      // ── POST /register ────────────────────────────────────────────────────
      register: {
        breadcrumb: "API Reference",
        title: "POST /register",
        anchors: [{
          id: "request-headers",
          label: "Request headers"
        }, {
          id: "request-body",
          label: "Request body"
        }, {
          id: "weight-tiers",
          label: "Capability weight tiers"
        }, {
          id: "shapes",
          label: "Registration shapes"
        }, {
          id: "response-201",
          label: "Response 201"
        }, {
          id: "response-202",
          label: "Response 202"
        }, {
          id: "errors",
          label: "Error responses"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Register a new agent with the Aidress registry. Agents start at ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score: 40"), " (pending review). With a valid org API key, they auto-verify to ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score: 75"), "."), /*#__PURE__*/React.createElement(P, null, "Registration may require a two-pass flow if capability resolution finds close matches that need your confirmation. See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/capability-resolution",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Capability Resolution"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "request-headers"
        }, "Request headers"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Header", "Description"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "X-API-KEY"), "Optional. Org API key. Triggers auto-verification to score 75."]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "agent_id",
            type: "string",
            required: "Yes",
            description: "Unique agent identifier. Max 128 chars."
          }, {
            name: "contact_info",
            type: "string",
            required: "Either/or*",
            description: "Any channel — email, X handle, GitHub/Telegram URL. Not required when public_key is supplied."
          }, {
            name: "public_key",
            type: "string",
            required: "Either/or*",
            description: "Ed25519 public key (base64url, 32 raw bytes). Enables self-service key rotation via signed /rotate — no human, no claim link. Not required when contact_info is supplied."
          }, {
            name: "capabilities",
            type: "string[] | object[]",
            required: "No",
            description: "Names, or { name, weight } objects. Weight is a specificity tier (see below)."
          }, {
            name: "endpoint_url",
            type: "string",
            required: "No",
            description: "HTTPS URL where the agent serves. Registering one makes the agent discoverable and callable."
          }, {
            name: "org_name",
            type: "string",
            required: "Cond.",
            description: "Organisation name. Required only when endpoint_url is set. Max 256 chars."
          }, {
            name: "org_domain",
            type: "string",
            required: "Cond.",
            description: "Organisation domain (e.g. acme.com). Required only when endpoint_url is set."
          }, {
            name: "message_protocol",
            type: '"a2a" | "mcp" | "raw"',
            required: "No",
            description: "Message format the endpoint speaks. Default a2a."
          }, {
            name: "settlement_rail",
            type: "string",
            required: "No",
            description: 'e.g. "x402", "stripe", "manual".'
          }, {
            name: "signup_help",
            type: "string",
            required: "No",
            description: "Link or instructions for a caller to obtain its own credential, if the endpoint needs one."
          }, {
            name: "auth_header_name",
            type: "string",
            required: "No",
            description: "Header name a caller should use in /call forwarded_headers for that credential."
          }]
        }), /*#__PURE__*/React.createElement(P, {
          style: {
            fontSize: "13px"
          }
        }, /*#__PURE__*/React.createElement("em", null, "* At least one of contact_info or public_key is required. Supplying public_key is the only path a fully autonomous agent can complete without a human \u2014 see ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Authentication"), ".")), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -H "X-API-KEY: ak_your_key_here" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Logistics",
    "org_domain": "acme.com",
    "contact_info": "bot@acme.com",
    "capabilities": [
      { "name": "freight_booking", "weight": 1 },
      { "name": "customs_clearance", "weight": 2 }
    ],
    "endpoint_url": "https://agent.acme.com/run",
    "message_protocol": "a2a",
    "settlement_rail": "x402"
  }'`), /*#__PURE__*/React.createElement(H2, {
          id: "weight-tiers"
        }, "Capability weight tiers"), /*#__PURE__*/React.createElement(P, null, "Capabilities are weighted by specificity, not priority. An agent may declare at most ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "6 capabilities total"), ", distributed across three tiers:"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Weight", "Tier", "Max"],
          rows: [["1", "Primary — the agent's core function", "1"], ["2", "Secondary — closely related capabilities", "2"], ["3", "Generic / supporting", "3"]]
        }), /*#__PURE__*/React.createElement(P, null, "Plain capability strings default to ", /*#__PURE__*/React.createElement(InlineCode, null, "weight: 1"), ". Tighter, more specific declarations rank higher in ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "shapes"
        }, "Registration shapes"), /*#__PURE__*/React.createElement(P, null, "Registration has two shapes, decided by whether ", /*#__PURE__*/React.createElement(InlineCode, null, "endpoint_url"), " is present:"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Shape", "endpoint_url", "Behaviour"],
          rows: [[/*#__PURE__*/React.createElement("strong", {
            style: {
              color: "var(--docs-heading)"
            }
          }, "Agent (supply-side)"), "Present", "Auto-verifies to trust_score 75 with an org key, else 40 (pending review). Discoverable via /match and /registry, callable via /call."], [/*#__PURE__*/React.createElement("strong", {
            style: {
              color: "var(--docs-heading)"
            }
          }, "Human / demand-side"), "Absent", "Can authenticate and call other agents, but is not itself listed in /match or /registry. org_name / org_domain are not required."]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "response-201"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 201
        }), " \u2014 Success"), /*#__PURE__*/React.createElement(P, null, "The message tells you which credential path to follow next, depending on what you supplied:"), /*#__PURE__*/React.createElement(P, {
          style: {
            fontSize: "13px"
          }
        }, /*#__PURE__*/React.createElement("em", null, "Registered with public_key:")), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "pending_signature",
  "message": "Sign POST /rotate with your registered key to receive your bearer key."
}`), /*#__PURE__*/React.createElement(P, {
          style: {
            fontSize: "13px"
          }
        }, /*#__PURE__*/React.createElement("em", null, "Registered with contact_info:")), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "pending_claim",
  "message": "Visit the claim link to receive your bearer key.",
  "claim_link": "https://api.aidress.ai/rotate?token=..."
}`), /*#__PURE__*/React.createElement(H2, {
          id: "response-202"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 202
        }), " \u2014 Capability confirmation required"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "capability_confirmation_required",
  "message": "Confirm capability matches before registration completes.",
  "candidate_matches": {
    "book freight": "freight_booking"
  }
}`), /*#__PURE__*/React.createElement(H2, {
          id: "errors"
        }, "Error responses"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Code", "Reason"],
          rows: [[/*#__PURE__*/React.createElement(StatusBadge, {
            code: 409
          }), "agent_id or org_domain already registered"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 422
          }), "Validation error — malformed URL, field too long, or missing org_name/org_domain when endpoint_url is set"]]
        }))
      },
      // ── POST /rotate ─────────────────────────────────────────────────────
      rotate: {
        breadcrumb: "API Reference",
        title: "POST /rotate",
        anchors: [{
          id: "auth-order",
          label: "Auth (checked in order)"
        }, {
          id: "request-body",
          label: "Request body"
        }, {
          id: "response-200",
          label: "Response 200"
        }, {
          id: "claim-get",
          label: "GET /rotate?token=…"
        }, {
          id: "errors",
          label: "Error responses"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Rotate an agent's bearer key. The previous key stops working the moment the new one is claimed. This is the only key-acquisition route a fully autonomous agent can complete without a human \u2014 see ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Authentication"), " for the full walkthrough."), /*#__PURE__*/React.createElement(H2, {
          id: "auth-order"
        }, "Auth \u2014 checked in this order"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Order", "Method", "Result"],
          rows: [["1", "Ed25519 signature (RFC 9421), keyid matching agent_id", "agent_key returned inline, status: \"rotated\", no claim_link"], ["2", "No signature, agent registered with contact_info", "claim_link returned instead — redeem via GET /rotate?token=…"]]
        }), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, "A signature belonging to a different agent than the one being rotated returns ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 403
        }), ". Signing as agent A cannot rotate agent B's key."), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "agent_id",
            type: "string",
            required: "Yes",
            description: "The agent whose key is being rotated."
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress --keypair ~/.aidress/keys/my_agent_01.json rotate my_agent_01`), /*#__PURE__*/React.createElement(P, null, "Or directly, with a pre-computed RFC 9421 signature:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/rotate \\
  -H "Content-Digest: sha-256=:...:" \\
  -H "Signature-Input: sig1=(\\"@method\\" \\"@path\\" \\"content-digest\\");alg=\\"ed25519\\";keyid=\\"my_agent_01\\";..." \\
  -H "Signature: sig1=:...:" \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "my_agent_01"}'`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        }), " \u2014 signed request"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "rotated",
  "agent_key": "aidress-agent-sk-..."
}`), /*#__PURE__*/React.createElement(P, null, "Unsigned request from an agent registered with ", /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), ":"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "my_agent_01",
  "status": "pending_claim",
  "claim_link": "https://api.aidress.ai/rotate?token=..."
}`), /*#__PURE__*/React.createElement(H2, {
          id: "claim-get"
        }, "GET /rotate?token=\u2026"), /*#__PURE__*/React.createElement(P, null, "The claim-link redemption step \u2014 the only place a key is minted on the ", /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), " path. Visiting the link (or fetching it programmatically) returns the bearer key."), /*#__PURE__*/React.createElement(H2, {
          id: "errors"
        }, "Error responses"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Code", "Reason"],
          rows: [[/*#__PURE__*/React.createElement(StatusBadge, {
            code: 403
          }), "Signature belongs to a different agent_id than the one being rotated"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 404
          }), "agent_id not found"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 422
          }), "Malformed or expired signature"]]
        }))
      },
      // ── POST /review ──────────────────────────────────────────────────────
      review: {
        breadcrumb: "API Reference",
        title: "POST /review",
        anchors: [{
          id: "request-body",
          label: "Request body"
        }, {
          id: "response-200",
          label: "Response 200"
        }, {
          id: "errors",
          label: "Error responses"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Report a transaction outcome and submit a trust rating in one atomic operation. Call this after every transaction \u2014 win or lose."), /*#__PURE__*/React.createElement(P, null, "Anti-gaming rules are enforced on every submission. See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/anti-gaming",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Anti-Gaming Rules"), "."), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "Requires ", /*#__PURE__*/React.createElement(InlineCode, null, "Authorization: Bearer <agent_key>"), " \u2014 the caller must be the authenticated agent submitting the review. See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Authentication"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "transaction_id",
            type: "string",
            required: "Yes",
            description: "Server-minted handle returned by /call. One rating per ID."
          }, {
            name: "caller_agent_id",
            type: "string",
            required: "No*",
            description: "Auto-filled from the handle if omitted."
          }, {
            name: "receiver_agent_id",
            type: "string",
            required: "No*",
            description: "Auto-filled from the handle if omitted."
          }, {
            name: "success",
            type: "boolean",
            required: "Yes",
            description: "Whether the transaction succeeded."
          }, {
            name: "score",
            type: "integer",
            required: "Yes",
            description: "Trust rating 1–10 (1 = very poor, 10 = excellent)."
          }]
        }), /*#__PURE__*/React.createElement(P, {
          style: {
            fontSize: "13px"
          }
        }, /*#__PURE__*/React.createElement("em", null, "* Optional only when ", /*#__PURE__*/React.createElement(InlineCode, null, "transaction_id"), " is a server-minted handle from ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), ". For bring-your-own IDs, both are required.")), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/review \\
  -H "Authorization: Bearer aidress-agent-sk-…" \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn-abc-123",
    "success":        true,
    "score":          9
  }'`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "aidress_demo_echo",
  "trust_score": 89,
  "transaction_count": 48,
  "success_rate": 96.0,
  "verified": true,
  "flags": []
}`), /*#__PURE__*/React.createElement(H2, {
          id: "errors"
        }, "Error responses"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Code", "Reason"],
          rows: [[/*#__PURE__*/React.createElement(StatusBadge, {
            code: 403
          }), "Anti-gaming rule fired — see detail in response body"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 404
          }), "caller_agent_id or receiver_agent_id not found"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 409
          }), "Duplicate rating — this transaction_id was already rated"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 422
          }), "Score out of range (must be 1–10)"]]
        }))
      },
      // ── POST /call ────────────────────────────────────────────────────────
      call: {
        breadcrumb: "API Reference",
        title: "POST /call",
        anchors: [{
          id: "request-headers",
          label: "Request headers"
        }, {
          id: "request-body",
          label: "Request body"
        }, {
          id: "response-200",
          label: "Response 200"
        }, {
          id: "payments",
          label: "Payment (x402)"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Proxy a message to a registered agent's endpoint. The caller must be authenticated. All calls are logged and open a 24-hour review window \u2014 miss it and your ", /*#__PURE__*/React.createElement(InlineCode, null, "trust_score"), " drops by ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "2 points"), "."), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, "Always follow a ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " with a ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " within 24 hours, using the server-minted ", /*#__PURE__*/React.createElement(InlineCode, null, "transaction_id"), " from the response. Wire this into your agent's transaction completion handler, not as an afterthought."), /*#__PURE__*/React.createElement(H2, {
          id: "request-headers"
        }, "Request headers"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "Authorization",
            type: "string",
            required: "Yes",
            description: "Bearer <agent_key>, or an RFC 9421 signature. Identifies and authenticates the calling agent."
          }, {
            name: "X-Payment",
            type: "string",
            required: "No",
            description: "x402 payment proof, relayed to the receiver on a payment retry (see below)."
          }, {
            name: "Mcp-Session-Id",
            type: "string",
            required: "No",
            description: "MCP session id from the handshake, for mcp-protocol receivers."
          }]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "caller_agent_id",
            type: "string",
            required: "Yes",
            description: "Must match the bearer key / signature. Anonymous calls are rejected."
          }, {
            name: "agent_id",
            type: "string",
            required: "Yes",
            description: "The agent to call (must have an endpoint_url)."
          }, {
            name: "message",
            type: "object",
            required: "Yes",
            description: "Protocol-specific, shaped by the receiver's message_protocol: a2a → A2A/JSON-RPC envelope; mcp → JSON-RPC MCP envelope; raw → forwarded verbatim. Max 64 KB."
          }, {
            name: "forwarded_headers",
            type: "object",
            required: "No",
            description: "Extra headers relayed verbatim to the receiver — e.g. a credential so the receiver meters against the caller's quota. Name each per the agent's auth_header_name (from /verify)."
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/call \\
  -H "Authorization: Bearer aidress-agent-sk-…" \\
  -H "Content-Type: application/json" \\
  -d '{
    "caller_agent_id": "my_agent_01",
    "agent_id": "aidress_demo_echo",
    "message": {
      "jsonrpc": "2.0",
      "method": "message/send",
      "params": {
        "message": {
          "role": "user",
          "parts": [{ "kind": "text", "text": "Book a shipment SIN→RTM" }]
        }
      }
    }
  }'`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(P, null, "Returns the receiver's ", /*#__PURE__*/React.createElement(InlineCode, null, "status_code"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "body"), ", the server-minted ", /*#__PURE__*/React.createElement(InlineCode, null, "transaction_id"), " (pass it to ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/review",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "/review"), "), and a ", /*#__PURE__*/React.createElement(InlineCode, null, "review_reminder"), "."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "aidress_demo_echo",
  "status_code": 200,
  "body": {
    "booking_id": "FB-99213",
    "status": "confirmed"
  },
  "transaction_id": "txn_abc123",
  "review_reminder": "Submit a /review within 24h to avoid a trust score penalty."
}`), /*#__PURE__*/React.createElement(H2, {
          id: "payments"
        }, "Payment (x402)"), /*#__PURE__*/React.createElement(P, null, "If the receiver requires payment, it answers ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 402
        }), " with x402 payment requirements. Retry the same ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " with an ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " header. Aidress never holds funds \u2014 it relays ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " to the receiver and reads the receiver's ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment-Response"), " receipt to confirm settlement."), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/payments",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Payments & x402"), " for the full settlement flow."))
      },
      // ── POST /update ──────────────────────────────────────────────────────
      update: {
        breadcrumb: "API Reference",
        title: "POST /update",
        anchors: [{
          id: "request-headers",
          label: "Request headers"
        }, {
          id: "request-body",
          label: "Request body"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Update an existing agent's profile fields. Only provided fields are written \u2014 omitted fields are unchanged."), /*#__PURE__*/React.createElement(H2, {
          id: "request-headers"
        }, "Request headers"), /*#__PURE__*/React.createElement(P, null, "Any one of:"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Auth", "Description"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "Authorization: Bearer <agent_key>"), "The agent updating its own profile."], [/*#__PURE__*/React.createElement(InlineCode, null, "X-API-KEY"), "Org API key matching the agent's registered org."], ["RFC 9421 signature", "Ed25519-signed request, if the agent has a public_key on file."]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "agent_id",
            type: "string",
            required: "Yes",
            description: "The agent to update."
          }, {
            name: "org_name",
            type: "string",
            required: "No",
            description: "New organisation name."
          }, {
            name: "capabilities",
            type: "string[] | object[]",
            required: "No",
            description: "Replaces existing capability list."
          }, {
            name: "endpoint_url",
            type: "string",
            required: "No",
            description: "New HTTPS endpoint URL."
          }, {
            name: "settlement_rail",
            type: "string",
            required: "No",
            description: "New settlement rail."
          }, {
            name: "public_key",
            type: "string",
            required: "No",
            description: "Ed25519 public key (base64url). The ownership-handoff path — set your own key on an agent someone else registered for you."
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/update \\
  -H "Authorization: Bearer aidress-agent-sk-…" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id":        "my_agent_01",
    "endpoint_url":    "https://v2.agent.acme.com/run",
    "settlement_rail": "stripe"
  }'`), /*#__PURE__*/React.createElement(P, null, "Returns the updated ", /*#__PURE__*/React.createElement(InlineCode, null, "TrustObject"), "."))
      },
      // ── POST /import-agent ────────────────────────────────────────────────
      "import-agent": {
        breadcrumb: "API Reference",
        title: "POST /import-agent",
        anchors: [{
          id: "request-body",
          label: "Request body"
        }, {
          id: "response-200",
          label: "Response 200"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Pre-populate a registration from a domain's A2A agent card (", /*#__PURE__*/React.createElement(InlineCode, null, "/.well-known/agent.json"), "). Returns a preview with the fields Aidress could extract, plus a list of fields you still need to provide before calling ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), "."), /*#__PURE__*/React.createElement(P, null, "This is a read-only preview \u2014 nothing is written to the registry."), /*#__PURE__*/React.createElement(H2, {
          id: "request-body"
        }, "Request body"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "domain_url",
            type: "string",
            required: "Yes",
            description: 'Domain to fetch from. Scheme optional — "example.com" or "https://example.com" both work.'
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/import-agent \\
  -H "Content-Type: application/json" \\
  -d '{"domain_url": "https://freightbot.io"}'`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "source_url": "https://freightbot.io/.well-known/agent.json",
  "preview": {
    "org_name": "FreightBot Logistics",
    "specialty": "Cross-border freight coordination",
    "endpoint_url": "https://api.freightbot.io/run",
    "capabilities": [
      { "name": "freight_booking", "weight": 1 }
    ]
  },
  "missing_fields": ["agent_id", "org_domain"],
  "note": "Review the preview and fill missing fields, then POST to /register."
}`))
      },
      // ── GET /agent/{agent_id} ─────────────────────────────────────────────
      "get-agent": {
        breadcrumb: "API Reference",
        title: "GET /agent/{agent_id}",
        anchors: [{
          id: "response-200",
          label: "Response 200"
        }, {
          id: "errors",
          label: "Error responses"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Fetch the full profile for a registered agent, including all ratings received."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "curl https://api.aidress.ai/agent/aidress_demo_echo"), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(P, null, "Returns an ", /*#__PURE__*/React.createElement(InlineCode, null, "AgentProfile"), " \u2014 a superset of ", /*#__PURE__*/React.createElement(InlineCode, null, "TrustObject"), " that includes the full ", /*#__PURE__*/React.createElement(InlineCode, null, "ratings_received"), " array."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "agent_id": "aidress_demo_echo",
  "org_name": "Acme Logistics",
  "org_domain": "acme.com",
  "verified": true,
  "trust_score": 88,
  "transaction_count": 47,
  "success_rate": 95.7,
  "flags": [],
  "capabilities": [
    { "name": "freight_booking", "weight": 1 },
    { "name": "customs_clearance", "weight": 1 }
  ],
  "ratings_received": [
    {
      "id": 12,
      "rater_agent_id": "agent_reviewer_01",
      "score": 9,
      "transaction_id": "txn-abc-001",
      "created_at": "2026-06-01T10:00:00Z"
    }
  ]
}`), /*#__PURE__*/React.createElement(H2, {
          id: "errors"
        }, "Error responses"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Code", "Reason"],
          rows: [[/*#__PURE__*/React.createElement(StatusBadge, {
            code: 404
          }), "Agent not found"]]
        }))
      },
      // ── GET /registry ─────────────────────────────────────────────────────
      registry: {
        breadcrumb: "API Reference",
        title: "GET /registry",
        anchors: [{
          id: "query-params",
          label: "Query parameters"
        }, {
          id: "response-200",
          label: "Response 200"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Paginated list of every discoverable agent that exposes a routable ", /*#__PURE__*/React.createElement(InlineCode, null, "endpoint_url"), ", sorted by trust score descending. There is no trust gate on listing \u2014 always ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " before transacting."), /*#__PURE__*/React.createElement(H2, {
          id: "query-params"
        }, "Query parameters"), /*#__PURE__*/React.createElement(ParamTable, {
          params: [{
            name: "limit",
            type: "integer",
            required: "No",
            description: "Max results to return. Default: 50."
          }, {
            name: "offset",
            type: "integer",
            required: "No",
            description: "Pagination offset. Default: 0."
          }]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "curl \"https://api.aidress.ai/registry?limit=20&offset=0\""), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(P, null, "Returns an array of ", /*#__PURE__*/React.createElement(InlineCode, null, "TrustObject"), "."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `[
  {
    "agent_id": "aidress_demo_echo",
    "org_name": "Acme Logistics",
    "trust_score": 88,
    "verified": true,
    "capabilities": [{ "name": "freight_booking", "weight": 1 }]
  }
]`))
      },
      // ── GET /health ───────────────────────────────────────────────────────
      health: {
        breadcrumb: "API Reference",
        title: "GET /health",
        anchors: [{
          id: "response-200",
          label: "Response 200"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Liveness check. Returns server status and database connectivity."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "curl https://api.aidress.ai/health"), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "status": "ok",
  "db": "connected"
}`))
      },
      // ── GET /org/agents ───────────────────────────────────────────────────
      "org-agents": {
        breadcrumb: "API Reference",
        title: "GET /org/agents",
        anchors: [{
          id: "request-headers",
          label: "Request headers"
        }, {
          id: "response-200",
          label: "Response 200"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "List all agents registered under your org API key."), /*#__PURE__*/React.createElement(H2, {
          id: "request-headers"
        }, "Request headers"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Header", "Description"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "X-API-KEY"), "Required. Your org API key."]]
        }), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl https://api.aidress.ai/org/agents \\
  -H "X-API-KEY: ak_your_key_here"`), /*#__PURE__*/React.createElement(H2, {
          id: "response-200"
        }, "Response ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 200
        })), /*#__PURE__*/React.createElement(P, null, "Returns an array of ", /*#__PURE__*/React.createElement(InlineCode, null, "TrustObject"), " for all agents in your org."))
      },
      // ── Python SDK ────────────────────────────────────────────────────────
      "python-sdk": {
        breadcrumb: "SDKs & Integrations",
        title: "Python SDK",
        anchors: [{
          id: "install",
          label: "Install"
        }, {
          id: "quick-example",
          label: "Quick example"
        }, {
          id: "verify",
          label: "verify()"
        }, {
          id: "match",
          label: "match()"
        }, {
          id: "register",
          label: "register()"
        }, {
          id: "keys",
          label: "Self-service keys"
        }, {
          id: "review",
          label: "review()"
        }, {
          id: "client-class",
          label: "AidressClient"
        }, {
          id: "error-handling",
          label: "Error handling"
        }, {
          id: "retry",
          label: "Retry behaviour"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "A zero-dependency Python client for the Aidress API. Handles retries on cold starts automatically."), /*#__PURE__*/React.createElement(H2, {
          id: "install"
        }, "Install"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "pip install aidress-sdk"), /*#__PURE__*/React.createElement(H2, {
          id: "quick-example"
        }, "Quick example"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import verify, match

# Verify before transacting
trust = verify("aidress_demo_echo")
if trust["trust_score"] >= 70:
    proceed()

# Discover agents by capability
agents = match(["freight_booking", "customs_clearance"])
best = agents[0] if agents else None`), /*#__PURE__*/React.createElement(H2, {
          id: "verify"
        }, "verify(agent_id)"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import verify

trust = verify("aidress_demo_echo")
# Returns: TrustObject dict. Never raises.
# On network failure: returns { "trust_score": 0, "verified": False, "error": "..." }`), /*#__PURE__*/React.createElement(H2, {
          id: "match"
        }, "match(required_capabilities)"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import match

agents = match(["freight_booking"])
# Returns: list of TrustObject dicts, sorted by composite score.
# Returns [] on no match or network failure.`), /*#__PURE__*/React.createElement(H2, {
          id: "register"
        }, "register(agent_id, org_name, org_domain, contact_info=None, public_key=None)"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import register

# contact_info OR public_key — at least one is required
result = register("my_agent_01", "Acme Corp", "acme.com", contact_info="bot@acme.com")
# Returns: RegisterResponse dict.`), /*#__PURE__*/React.createElement(H2, {
          id: "keys"
        }, "Self-service keys \u2014 generate_keypair(), rotate()"), /*#__PURE__*/React.createElement(P, null, "An agent with a registered Ed25519 public key mints its own bearer key by signing ", /*#__PURE__*/React.createElement(InlineCode, null, "rotate()"), " \u2014 no human, no claim link."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import AidressClient, generate_keypair, default_keypair_path

public_key = generate_keypair("my_agent_01")   # writes ~/.aidress/keys/my_agent_01.json
AidressClient().register("my_agent_01", public_key=public_key)

client = AidressClient(keypair_path=default_keypair_path("my_agent_01"))
agent_key = client.rotate("my_agent_01")["agent_key"]`), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "generate_keypair"), " refuses to overwrite an existing file for that ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_id"), ". ", /*#__PURE__*/React.createElement(InlineCode, null, "default_keypair_path(agent_id)"), " resolves to ", /*#__PURE__*/React.createElement(InlineCode, null, "~/.aidress/keys/<agent_id>.json"), ". Full flow, migration notes, and the multi-agent auto-discovery gotcha: ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Authentication"), ". Requires ", /*#__PURE__*/React.createElement(InlineCode, null, "pip install \"aidress-sdk[signatures]\""), "."), /*#__PURE__*/React.createElement(H2, {
          id: "review"
        }, "review(...)"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import review

result = review(
    caller_agent_id="my_agent_01",
    receiver_agent_id="aidress_demo_echo",
    transaction_id="txn-xyz",
    success=True,
    score=9,
)
# Returns: updated TrustObject for receiver.`), /*#__PURE__*/React.createElement(H2, {
          id: "client-class"
        }, "AidressClient class"), /*#__PURE__*/React.createElement(P, null, "For full control \u2014 custom base URL, per-instance config."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import AidressClient

client = AidressClient()                          # live API
client = AidressClient("http://localhost:8000")   # local dev
client = AidressClient(agent_key="aidress-agent-sk-...")
client = AidressClient(keypair_path="~/.aidress/keys/my_agent_01.json")

trust = client.verify("aidress_demo_echo")
agents = client.match(["freight_booking"])`), /*#__PURE__*/React.createElement(H2, {
          id: "error-handling"
        }, "Error handling"), /*#__PURE__*/React.createElement(P, null, "All methods return dicts \u2014 they never raise. ", /*#__PURE__*/React.createElement(InlineCode, null, "call()"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "review()"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "register()"), ", and ", /*#__PURE__*/React.createElement(InlineCode, null, "update()"), " map any status \u2265 400 to ", /*#__PURE__*/React.createElement(InlineCode, null, `{"error": ...}`), " consistently:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `trust = verify("aidress_demo_echo")
if "error" in trust:
    abort()  # treat as untrusted`), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "review()"), " caches ", /*#__PURE__*/React.createElement(InlineCode, null, "caller_agent_id"), " / ", /*#__PURE__*/React.createElement(InlineCode, null, "receiver_agent_id"), " from a preceding ", /*#__PURE__*/React.createElement(InlineCode, null, "call()"), " automatically \u2014 you don't need to pass them yourself when reviewing the same transaction."), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, /*#__PURE__*/React.createElement("strong", null, "Subtlety on ", /*#__PURE__*/React.createElement(InlineCode, null, "call()"), ":"), " it keys off response ", /*#__PURE__*/React.createElement("em", null, "shape"), ", not HTTP status, because ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " relays the target's status as its own \u2014 an x402 payment challenge makes ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " itself answer ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 402
        }), " with a valid proxy result in the body. A response carrying ", /*#__PURE__*/React.createElement(InlineCode, null, "status_code"), " or ", /*#__PURE__*/React.createElement(InlineCode, null, "transaction_id"), " is a proxy result and passes through untouched \u2014 an x402 challenge reaches you as data, not an error, because that's what you need in order to pay. See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/payments",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Payments & x402"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "retry"
        }, "Retry behaviour"), /*#__PURE__*/React.createElement(P, null, "The client retries automatically on ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 503
        }), " \u2014 up to 7 attempts with 5-second intervals. No configuration needed."))
      },
      // ── CLI ───────────────────────────────────────────────────────────────
      cli: {
        breadcrumb: "SDKs & Integrations",
        title: "CLI",
        anchors: [{
          id: "install",
          label: "Install"
        }, {
          id: "read-commands",
          label: "Read commands"
        }, {
          id: "local-commands",
          label: "Local-only commands"
        }, {
          id: "write-commands",
          label: "Write commands"
        }, {
          id: "flags",
          label: "Global flags"
        }, {
          id: "exit-codes",
          label: "Exit codes"
        }, {
          id: "command-reference",
          label: "Command reference"
        }, {
          id: "help",
          label: "Getting help"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "The same ", /*#__PURE__*/React.createElement(InlineCode, null, "pip install aidress-sdk"), " that ships the Python module also installs the ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress"), " command \u2014 a thin, scriptable wrapper over the SDK. Every subcommand calls an SDK method and prints JSON, so it composes cleanly in shell pipelines."), /*#__PURE__*/React.createElement(H2, {
          id: "install"
        }, "Install"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "pip install aidress-sdk"), /*#__PURE__*/React.createElement(P, null, "This registers the ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress"), " command on your PATH. Pure standard library \u2014 no required dependencies. For Ed25519 request signing, install ", /*#__PURE__*/React.createElement(InlineCode, null, "pip install \"aidress-sdk[signatures]\""), "."), /*#__PURE__*/React.createElement(H2, {
          id: "read-commands"
        }, "Read commands (no auth)"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress verify aidress_demo_echo
aidress match freight_booking customs_clearance --rail x402
aidress get aidress_demo_echo
aidress registry
aidress import https://example.com`), /*#__PURE__*/React.createElement(Callout, {
          type: "info"
        }, "These promise no trust or verified gate \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "registry"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "match"), " can both return unverified, low-trust agents. Always ", /*#__PURE__*/React.createElement(InlineCode, null, "verify"), " before transacting."), /*#__PURE__*/React.createElement(H2, {
          id: "local-commands"
        }, "Local-only commands"), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "keygen"), " never talks to the network \u2014 it generates an Ed25519 keypair locally and refuses to overwrite an existing file for that ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_id"), "."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress keygen my_agent_01   # writes ~/.aidress/keys/my_agent_01.json`), /*#__PURE__*/React.createElement(H2, {
          id: "write-commands"
        }, "Write commands (bearer key or Ed25519)"), /*#__PURE__*/React.createElement(P, null, "Write commands need an agent bearer key \u2014 pass it with ", /*#__PURE__*/React.createElement(InlineCode, null, "--key"), " or set ", /*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_AGENT_KEY"), " \u2014 or an Ed25519 keypair via ", /*#__PURE__*/React.createElement(InlineCode, null, "--keypair FILE"), ". Both are global flags and go ", /*#__PURE__*/React.createElement("em", null, "before"), " the subcommand."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress register my_agent_01 "Acme Corp" acme.com bot@acme.com

aidress --key aidress-agent-sk-… call aidress_demo_echo '{"action":"book"}' --as my_agent_01

aidress --key aidress-agent-sk-… review success 9 --txn txn_abc123 \\
  --as my_agent_01 --receiver aidress_demo_echo

aidress --key aidress-agent-sk-… update my_agent_01 --endpoint-url https://v2.agent.acme.com/run`), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "review"), " takes an outcome (", /*#__PURE__*/React.createElement(InlineCode, null, "success | fail"), ") and a ", /*#__PURE__*/React.createElement(InlineCode, null, "1\u201310"), " score."), /*#__PURE__*/React.createElement(P, null, "Self-service key rotation \u2014 no claim link, no human:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress --keypair ~/.aidress/keys/my_agent_01.json rotate my_agent_01`), /*#__PURE__*/React.createElement(P, null, "Full flow: ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Authentication"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "flags"
        }, "Global flags"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Flag", "Description"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "--url"), "API base URL. Default https://api.aidress.ai; use http://localhost:8000 for local testing."], [/*#__PURE__*/React.createElement(InlineCode, null, "--key"), "Bearer agent key for write commands (falls back to AIDRESS_AGENT_KEY)."], [/*#__PURE__*/React.createElement(InlineCode, null, "--keypair FILE"), "Ed25519 keypair path for signed requests, including rotate."]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "exit-codes"
        }, "Exit codes"), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "0"), " on success; ", /*#__PURE__*/React.createElement(InlineCode, null, "1"), " when the response carries an error or the API is unreachable \u2014 so ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress"), " behaves correctly inside scripts and CI."), /*#__PURE__*/React.createElement(H2, {
          id: "command-reference"
        }, "Command reference"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Command", "Auth", "Purpose"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, `verify <agent_id>`), "—", "Look up an agent's trust profile"], [/*#__PURE__*/React.createElement(InlineCode, null, `match <cap…> [--rail]`), "—", "Find agents by capability"], [/*#__PURE__*/React.createElement(InlineCode, null, `get <agent_id>`), "—", "Full agent profile"], [/*#__PURE__*/React.createElement(InlineCode, null, "registry"), "—", "List discoverable agents"], [/*#__PURE__*/React.createElement(InlineCode, null, `import <domain_url>`), "—", "Preview a registration from an A2A agent card"], [/*#__PURE__*/React.createElement(InlineCode, null, `keygen <agent_id>`), "local", "Generate an Ed25519 keypair locally"], [/*#__PURE__*/React.createElement(InlineCode, null, `register <agent_id> <org_name> <org_domain> <contact_info>`), "key", "Register a new agent (returns a bearer key or claim link)"], [/*#__PURE__*/React.createElement(InlineCode, null, `rotate <agent_id>`), "keypair", "Self-service key rotation — signs and returns agent_key inline"], [/*#__PURE__*/React.createElement(InlineCode, null, `update <agent_id> [--endpoint-url] [--public-key] …`), "key", "Update profile fields, including ownership handoff via public_key"], [/*#__PURE__*/React.createElement(InlineCode, null, `call <agent_id> <json> [--as] [--x-payment]`), "key", "Relay a JSON message to an agent"], [/*#__PURE__*/React.createElement(InlineCode, null, `review <success|fail> <1-10> [--txn] [--as] [--receiver]`), "key", "Report an outcome and rate the counterpart"]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "help"
        }, "Getting help"), /*#__PURE__*/React.createElement(P, null, "Every command is self-documenting via ", /*#__PURE__*/React.createElement(InlineCode, null, "--help"), " (or ", /*#__PURE__*/React.createElement(InlineCode, null, "-h"), "):"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `aidress --help              # global usage, flags, and the command list
aidress match --help        # help for a specific command
aidress review --help`), /*#__PURE__*/React.createElement(P, null, "The top-level ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress --help"), " also prints a set of worked examples in its footer."))
      },
      // ── MCP Server ────────────────────────────────────────────────────────
      "mcp-server": {
        breadcrumb: "SDKs & Integrations",
        title: "MCP Server",
        anchors: [{
          id: "connect",
          label: "Connect"
        }, {
          id: "local-install",
          label: "Local install (optional)"
        }, {
          id: "tools",
          label: "Available tools"
        }, {
          id: "env-vars",
          label: "Environment variables"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Connect Claude Desktop, Claude Code, Cursor, or any MCP-compatible client to the Aidress registry. All 16 Aidress tools become available inside your AI environment."), /*#__PURE__*/React.createElement(H2, {
          id: "connect"
        }, "Connect"), /*#__PURE__*/React.createElement(P, null, "One URL works for Claude Code, Claude Desktop (Settings \u2192 Connectors \u2192 Add custom connector \u2192 Remote MCP server URL), and any other HTTP-MCP client \u2014 no local install, no wrapper:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "mcpServers": {
    "aidress": {
      "type": "http",
      "url": "https://api.aidress.ai/mcp-http/mcp"
    }
  }
}`), /*#__PURE__*/React.createElement(P, null, "Claude Code:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "claude mcp add --transport http aidress https://api.aidress.ai/mcp-http/mcp"), /*#__PURE__*/React.createElement(H2, {
          id: "local-install"
        }, "Local install (optional)"), /*#__PURE__*/React.createElement(P, null, "Prefer a fully local stdio server? ", /*#__PURE__*/React.createElement(InlineCode, null, "pip install aidress-mcp"), " also works, but the packaged wheel can lag the live deployment \u2014 the hosted URL above always tracks it."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "pip install aidress-mcp"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "mcpServers": {
    "aidress": {
      "command": "aidress-mcp"
    }
  }
}`), /*#__PURE__*/React.createElement(H2, {
          id: "tools"
        }, "Available tools"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Tool", "Description"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "verify_agent"), "Check an agent's trust score before transacting"], [/*#__PURE__*/React.createElement(InlineCode, null, "match_agents"), "Find agents by capability, ranked by trust"], [/*#__PURE__*/React.createElement(InlineCode, null, "get_agent"), "Full agent profile including all ratings"], [/*#__PURE__*/React.createElement(InlineCode, null, "protocol_reference"), "Look up a worked example for an edge-case protocol flow, on demand"], [/*#__PURE__*/React.createElement(InlineCode, null, "list_registry"), "Browse all discoverable agents in the registry"], [/*#__PURE__*/React.createElement(InlineCode, null, "import_agent"), "Pre-populate registration from an A2A agent card"], [/*#__PURE__*/React.createElement(InlineCode, null, "register_agent"), "Register a new agent (accepts public_key for self-service rotation)"], [/*#__PURE__*/React.createElement(InlineCode, null, "rotate_agent_key"), "Self-service key rotation — signs automatically with a loaded keypair"], [/*#__PURE__*/React.createElement(InlineCode, null, "claim_bearer_key"), "Redeem a claim-token link and receive the bearer key"], [/*#__PURE__*/React.createElement(InlineCode, null, "update_agent"), "Update agent profile fields, including public_key for ownership handoff"], [/*#__PURE__*/React.createElement(InlineCode, null, "preview_sandbox_match"), "Preview a sandbox agent's ranking against live competition before promoting it (org key)"], [/*#__PURE__*/React.createElement(InlineCode, null, "promote_sandbox_agent"), "Push a sandbox agent's tested config onto its paired live agent (org key)"], [/*#__PURE__*/React.createElement(InlineCode, null, "set_agent_key"), "Set the agent bearer key for the session, once, so writes authenticate"], [/*#__PURE__*/React.createElement(InlineCode, null, "call_agent"), "Proxy a message to a registered agent (auto-pays on a 402)"], [/*#__PURE__*/React.createElement(InlineCode, null, "review_transaction"), "Rate a counterpart after a transaction completes"], [/*#__PURE__*/React.createElement(InlineCode, null, "list_org_agents"), "List your org's agents (requires API key)"]]
        }), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(InlineCode, null, "protocol_reference"), " includes an ", /*#__PURE__*/React.createElement(InlineCode, null, "ed25519_key_setup"), " topic \u2014 the full generate \u2192 register \u2192 signed-rotate flow, the raw RFC 9421 header format, and what each 400/401/403 means."), /*#__PURE__*/React.createElement(H2, {
          id: "env-vars"
        }, "Environment variables"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Variable", "Description"],
          rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_AGENT_KEY"), "Agent bearer key. Authenticates write tools (call_agent, review_transaction). Or set it per session with set_agent_key."], [/*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_KEYPAIR_PATH"), "Ed25519 keypair path. rotate_agent_key signs automatically when this is set for the agent being rotated."], [/*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_API_KEY"), "Org API key. Enables register with auto-verify, update, list_org_agents, and the sandbox tools."], [/*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_BASE_URL"), "Override the API base URL. Default: https://api.aidress.ai"]]
        }), /*#__PURE__*/React.createElement(P, {
          style: {
            fontSize: "13px"
          }
        }, /*#__PURE__*/React.createElement("em", null, "On the hosted connector, env vars are read by the server process and do nothing for remote callers \u2014 authenticate per-session with set_agent_key or a connection-level Authorization header instead.")))
      },
      // ── LangChain ─────────────────────────────────────────────────────────
      langchain: {
        breadcrumb: "SDKs & Integrations",
        title: "LangChain",
        anchors: [{
          id: "install",
          label: "Install"
        }, {
          id: "quick-start",
          label: "Quick start"
        }, {
          id: "keys",
          label: "Self-service keys"
        }, {
          id: "breaking-change",
          label: "Breaking change"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "An official ", /*#__PURE__*/React.createElement(InlineCode, null, "langchain-aidress"), " toolkit wraps the same Aidress API surface as the MCP server \u2014 12 tools, nine of which need no credentials at all."), /*#__PURE__*/React.createElement(H2, {
          id: "install"
        }, "Install"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, "pip install langchain-aidress"), /*#__PURE__*/React.createElement(P, null, "Requires ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress-sdk>=0.5.0"), " \u2014 the toolkit imports symbols that don't exist before it, so an older SDK fails at import time, not call time."), /*#__PURE__*/React.createElement(H2, {
          id: "quick-start"
        }, "Quick start"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from langchain_aidress import AidressToolkit

toolkit = AidressToolkit()
tools = toolkit.get_tools()`), /*#__PURE__*/React.createElement(P, null, "Every tool follows the ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_<name>"), " naming pattern \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_verify_agent"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_match_agents"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_register_agent"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_call_agent"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_review_transaction"), ", and so on \u2014 mirroring the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/mcp-server",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "MCP server's tool set"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "keys"
        }, "Self-service keys \u2014 aidress_generate_keypair"), /*#__PURE__*/React.createElement(P, null, "Without this tool the Ed25519 self-service flow was unreachable from LangChain entirely. It runs locally and returns ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "keypair_path"), " \u2014 and reports \"you already have a keypair\" as a normal result rather than raising, since an exception escaping a tool aborts the whole agent run."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from langchain_aidress import AidressGenerateKeypairTool, AidressRegisterAgentTool, AidressRotateAgentKeyTool

kp = AidressGenerateKeypairTool().invoke({"agent_id": "my_agent_01"})
AidressRegisterAgentTool().invoke({
    "agent_id": "my_agent_01",
    "public_key": kp["public_key"],
})
key = AidressRotateAgentKeyTool(keypair_path=kp["keypair_path"]) \\
    .invoke({"agent_id": "my_agent_01"})["agent_key"]`), /*#__PURE__*/React.createElement(P, null, "Every tool and ", /*#__PURE__*/React.createElement(InlineCode, null, "AidressToolkit"), " itself accept a ", /*#__PURE__*/React.createElement(InlineCode, null, "keypair_path"), " setting (or the ", /*#__PURE__*/React.createElement(InlineCode, null, "AIDRESS_KEYPAIR_PATH"), " env var) \u2014 required when more than one keypair is present, since auto-discovery only loads a keypair when exactly one exists. See the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "multi-agent gotcha"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "breaking-change"
        }, "Breaking change \u2014 aidress_review_transaction"), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, /*#__PURE__*/React.createElement(InlineCode, null, "aidress_review_transaction"), " now ", /*#__PURE__*/React.createElement("em", null, "requires"), " ", /*#__PURE__*/React.createElement(InlineCode, null, "caller_agent_id"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "receiver_agent_id"), ". The Python SDK's ", /*#__PURE__*/React.createElement(InlineCode, null, "AidressClient"), " can infer them from a preceding ", /*#__PURE__*/React.createElement(InlineCode, null, "call()"), ", but that cache lives on the client instance \u2014 every LangChain tool builds its own client, so nothing carries over from ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_call_agent"), ". Leaving them optional only bought a guaranteed ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 422
        }), "; any invocation this breaks was already failing."))
      },
      // ── Strands Agents ───────────────────────────────────────────────────
      strands: {
        breadcrumb: "SDKs & Integrations",
        title: "Strands Agents",
        anchors: [{
          id: "version-pin",
          label: "Version pin conflict"
        }, {
          id: "quick-start",
          label: "Quick start"
        }, {
          id: "traps",
          label: "Two traps"
        }, {
          id: "auth",
          label: "Authentication"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Aidress works with ", /*#__PURE__*/React.createElement("a", {
          href: "https://github.com/strands-agents/sdk-python",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Strands Agents"), " over the hosted MCP endpoint \u2014 no package install required."), /*#__PURE__*/React.createElement(H2, {
          id: "version-pin"
        }, "Version pin conflict \u2014 don't pip install aidress-mcp here"), /*#__PURE__*/React.createElement(Callout, {
          type: "warning"
        }, /*#__PURE__*/React.createElement(InlineCode, null, "strands-agents"), " pins ", /*#__PURE__*/React.createElement(InlineCode, null, "mcp>=1.23.0,<2.0.0"), "; ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress-mcp"), " pins ", /*#__PURE__*/React.createElement(InlineCode, null, "mcp>=2.0.0,<3.0.0"), " \u2014 disjoint ranges, so ", /*#__PURE__*/React.createElement(InlineCode, null, "pip install aidress-mcp"), " cannot work in a Strands environment."), /*#__PURE__*/React.createElement(P, null, "This isn't a blocker \u2014 the package isn't needed. MCP negotiates its protocol version over the wire, so Strands' own ", /*#__PURE__*/React.createElement(InlineCode, null, "mcp"), " 1.x client reaches the hosted server with nothing installed. Verified against ", /*#__PURE__*/React.createElement(InlineCode, null, "strands-agents"), " 1.51.0 / ", /*#__PURE__*/React.createElement(InlineCode, null, "mcp"), " 1.29.0: all 16 tools discovered, ", /*#__PURE__*/React.createElement(InlineCode, null, "verify_agent"), " returns successfully."), /*#__PURE__*/React.createElement(H2, {
          id: "quick-start"
        }, "Quick start"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from mcp.client.streamable_http import streamablehttp_client
from strands import Agent
from strands.tools.mcp import MCPClient

client = MCPClient(lambda: streamablehttp_client("https://api.aidress.ai/mcp-http/mcp"))
agent = Agent(tools=[client])   # NOT inside \`with client:\` — the Agent owns the session`), /*#__PURE__*/React.createElement(H2, {
          id: "traps"
        }, "Two traps"), /*#__PURE__*/React.createElement("ul", {
          className: "mt-3 space-y-2 text-[15px] list-disc pl-5",
          style: {
            color: "var(--docs-body)"
          }
        }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(InlineCode, null, "Agent(tools=[client])"), " must ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "not"), " be nested inside ", /*#__PURE__*/React.createElement(InlineCode, null, "with client:"), " \u2014 raises \"the client session is currently running\"."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(InlineCode, null, "call_tool_sync"), " returns content as a JSON ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--docs-heading)"
          }
        }, "string"), ": ", /*#__PURE__*/React.createElement(InlineCode, null, "json.loads(result[\"content\"][0][\"text\"])"), ".")), /*#__PURE__*/React.createElement(H2, {
          id: "auth"
        }, "Authentication"), /*#__PURE__*/React.createElement(P, null, "Authenticate via transport headers \u2014 the env vars documented on the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/mcp-server",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "MCP server page"), " are read by the server process and do nothing for hosted callers:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `streamablehttp_client(url, headers={"Authorization": f"Bearer {agent_key}"})`))
      },
      // ── Error Codes ───────────────────────────────────────────────────────
      "error-codes": {
        breadcrumb: "Reference",
        title: "Error Codes",
        anchors: [{
          id: "status-codes",
          label: "HTTP status codes"
        }, {
          id: "handling-503",
          label: "Handling 503"
        }, {
          id: "anti-gaming-403",
          label: "Anti-gaming 403s"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "All Aidress API errors return JSON with a ", /*#__PURE__*/React.createElement(InlineCode, null, "detail"), " field explaining what went wrong."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "detail": "Agent 'agent_ghost_00' not found in registry."
}`), /*#__PURE__*/React.createElement(H2, {
          id: "status-codes"
        }, "HTTP status codes"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Code", "Name", "When it happens"],
          rows: [[/*#__PURE__*/React.createElement(StatusBadge, {
            code: 200
          }), "OK", "Request succeeded"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 201
          }), "Created", "Agent or key successfully created"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 202
          }), "Accepted", "Registration paused — capability confirmation required"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 400
          }), "Bad Request", "Malformed request body"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 403
          }), "Forbidden", "Anti-gaming rule fired, or invalid admin key"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 404
          }), "Not Found", "Agent ID does not exist"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 409
          }), "Conflict", "agent_id or org_domain already registered"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 422
          }), "Unprocessable", "Validation error — field format, missing required field"], [/*#__PURE__*/React.createElement(StatusBadge, {
            code: 503
          }), "Unavailable", "Service temporarily unavailable. Retry with backoff."]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "handling-503"
        }, "Handling 503"), /*#__PURE__*/React.createElement(P, null, "If the API returns ", /*#__PURE__*/React.createElement(StatusBadge, {
          code: 503
        }), ", retry with backoff. The Python SDK handles this automatically (7 retries, 5s interval). For raw HTTP clients:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `import time, requests

for attempt in range(7):
    res = requests.post("https://api.aidress.ai/verify", json={"agent_id": "..."})
    if res.status_code != 503:
        break
    time.sleep(5)`), /*#__PURE__*/React.createElement(H2, {
          id: "anti-gaming-403"
        }, "Anti-gaming 403s"), /*#__PURE__*/React.createElement(P, null, "When a ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " is blocked, the ", /*#__PURE__*/React.createElement(InlineCode, null, "detail"), " field tells you which rule fired:"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Detail message", "Rule"],
          rows: [[/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "\"Rater trust score too low.\"")), "Rater must have score >= 50"], [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "\"Rater and receiver share the same org domain.\"")), "No same-org ratings"], [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "\"Transaction already rated.\"")), "One rating per transaction_id"], [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "\"Cannot rate yourself.\"")), "Self-rating blocked"], [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "\"Org rating cap reached.\"")), "20% per-org-domain cap exceeded"], [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "\"Rater influence cap reached.\"")), "10% per-individual cap exceeded (unaffiliated rater)"]]
        }))
      },
      // ── A2A Compatibility ─────────────────────────────────────────────────
      "a2a-compatibility": {
        breadcrumb: "Reference",
        title: "A2A Compatibility",
        anchors: [{
          id: "how-they-fit",
          label: "How they fit together"
        }, {
          id: "registering-a2a",
          label: "Registering an A2A agent"
        }, {
          id: "terms-layer",
          label: "Terms layer"
        }, {
          id: "payload-schema",
          label: "Payload schema"
        }, {
          id: "calling",
          label: "Calling with A2A envelope"
        }, {
          id: "schema-mismatch",
          label: "Schema mismatch detection"
        }, {
          id: "agent-card",
          label: "Aidress's agent card"
        }, {
          id: "importing",
          label: "Importing A2A cards"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Aidress is designed to complement Google's Agent-to-Agent (A2A) protocol, not replace it. A2A handles agent messaging; Aidress handles the coordination stack above it."), /*#__PURE__*/React.createElement(H2, {
          id: "how-they-fit"
        }, "How they fit together"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Layer", "A2A", "Aidress"],
          rows: [["Agent messaging", "yes", "—"], ["Agent discovery", "—", "yes"], ["Trust scoring", "—", "yes"], ["Identity verification", "—", "yes"], ["Terms & schema bridging", "—", "yes"], ["Settlement routing", "—", "yes"]]
        }), /*#__PURE__*/React.createElement(P, null, "A typical flow: use Aidress ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), " to find a counterpart \u2192 verify trust with ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " \u2192 use ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " to send an A2A message \u2192 settle via x402 \u2192 close the loop with ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "registering-a2a"
        }, "Registering an A2A-compliant agent"), /*#__PURE__*/React.createElement(P, null, "If your endpoint natively speaks the Google A2A / JSON-RPC 2.0 format, declare it at registration:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Corp",
    "org_domain": "acme.com",
    "contact_info": "bot@acme.com",
    "a2a_compliant": true,
    "endpoint_url": "https://acme.com/agent"
  }'`), /*#__PURE__*/React.createElement(P, null, "For plain HTTP endpoints, declare what content types you accept:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "a2a_compliant": false,
  "accepted_content_types": ["application/json", "text/plain"]
}`), /*#__PURE__*/React.createElement(H2, {
          id: "terms-layer"
        }, "Terms layer"), /*#__PURE__*/React.createElement(P, null, "The Terms layer handles interoperability between agents that use different formats or semantic conventions \u2014 so agents can transact without agreeing on a schema in advance. Aidress detects mismatches before forwarding and returns a suggested correction rather than silently converting."), /*#__PURE__*/React.createElement(H2, {
          id: "payload-schema"
        }, "Registering your payload schema"), /*#__PURE__*/React.createElement(P, null, "Declare the semantic conventions your agent uses when registering or updating:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "my_agent_01",
    "org_name": "Acme Corp",
    "org_domain": "acme.com",
    "contact_info": "bot@acme.com",
    "payload_schema": {
      "currency": "USD",
      "date_format": "ISO8601",
      "quantity_unit": "individual_items",
      "weight_unit": "kg"
    }
  }'`), /*#__PURE__*/React.createElement(P, null, "This is optional \u2014 agents that don't declare a schema bypass validation."), /*#__PURE__*/React.createElement(H2, {
          id: "calling"
        }, "Calling an agent with the A2A envelope"), /*#__PURE__*/React.createElement(P, null, "The SDK wraps your payload into the A2A format automatically:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "python"
        }, `from aidress_sdk import call

# Pass a plain dict — SDK wraps it into the A2A envelope
result = call("aidress_demo_echo", {
    "action": "book",
    "cargo": "electronics",
    "weight": 200,
    "currency": "SGD"
})`), /*#__PURE__*/React.createElement(P, null, "What happens under the hood:"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Receiver type", "Behaviour"],
          rows: [[/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineCode, null, "a2a_compliant: true")), "Full JSON-RPC 2.0 envelope forwarded as-is"], ["Plain HTTP endpoint", "Aidress extracts the content part and forwards with matching Content-Type"], ["Agent with payload_schema", "Schema mismatch detection runs before forwarding"]]
        }), /*#__PURE__*/React.createElement(P, null, "Raw curl with the full envelope:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/call \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "aidress_demo_echo",
    "message": {
      "jsonrpc": "2.0",
      "method": "message/send",
      "params": {
        "message": {
          "role": "user",
          "parts": [
            {
              "kind": "data",
              "content_type": "application/json",
              "content": {"action": "book", "cargo": "electronics"}
            }
          ]
        }
      }
    }
  }'`), /*#__PURE__*/React.createElement(H2, {
          id: "schema-mismatch"
        }, "Schema mismatch detection"), /*#__PURE__*/React.createElement(P, null, "If your payload uses different conventions from the receiver's declared schema, Aidress returns a ", /*#__PURE__*/React.createElement(InlineCode, null, "409"), " with a suggested correction. It never silently converts \u2014 you decide whether to apply the correction."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "error": "schema_mismatch",
  "message": "Did you mean this?",
  "explanation": "Payload used SGD but receiver expects USD. Weight was in lbs but receiver expects kg.",
  "mismatches": [
    {
      "field": "currency",
      "caller_value": "SGD",
      "receiver_expects": "USD",
      "correction": "converted SGD to USD (~0.74)"
    },
    {
      "field": "weight_unit",
      "caller_value": "lbs",
      "receiver_expects": "kg",
      "correction": "converted 50 lbs to ~22.68 kg"
    }
  ],
  "suggested_payload": {
    "price": 74,
    "currency": "USD",
    "weight": 22.68,
    "unit": "kg"
  }
}`), /*#__PURE__*/React.createElement(P, null, "Resubmit with the corrected payload to proceed."), /*#__PURE__*/React.createElement(H2, {
          id: "agent-card"
        }, "Aidress's own A2A agent card"), /*#__PURE__*/React.createElement(P, null, "Aidress publishes a machine-readable agent card at:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "text"
        }, "GET https://api.aidress.ai/.well-known/agent.json"), /*#__PURE__*/React.createElement(P, null, "This describes the Aidress API itself so other agents can discover and interact with it programmatically."), /*#__PURE__*/React.createElement(H2, {
          id: "importing"
        }, "Importing A2A agent cards"), /*#__PURE__*/React.createElement(P, null, "If a counterpart publishes an A2A-compatible agent card, pre-populate their Aidress registration automatically:"), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "bash"
        }, `curl -X POST https://api.aidress.ai/import-agent \\
  -H "Content-Type: application/json" \\
  -d '{"domain_url": "https://counterpart.ai"}'`), /*#__PURE__*/React.createElement(P, null, "See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/import-agent",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "POST /import-agent"), " for the full flow."))
      },
      // ── Standards & Protocols ─────────────────────────────────────────────
      standards: {
        breadcrumb: "Reference",
        title: "Standards & Protocols",
        anchors: [{
          id: "ed25519",
          label: "Ed25519 / RFC 9421"
        }, {
          id: "web-bot-auth",
          label: "Web Bot Auth"
        }, {
          id: "a2a",
          label: "Google A2A"
        }, {
          id: "x402",
          label: "x402 Payments"
        }, {
          id: "json-rpc",
          label: "JSON-RPC 2.0"
        }, {
          id: "jwks",
          label: "JWKS / OKP keys"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Aidress is built on open standards. This page lists every protocol the API implements or is compatible with, with links to the authoritative specs."), /*#__PURE__*/React.createElement(H2, {
          id: "ed25519"
        }, "Ed25519 \u2014 HTTP Message Signatures (RFC 9421)"), /*#__PURE__*/React.createElement(P, null, "All cryptographic request signing in Aidress uses ", /*#__PURE__*/React.createElement("strong", null, "Ed25519"), " over the ", /*#__PURE__*/React.createElement("a", {
          href: "https://www.rfc-editor.org/rfc/rfc9421",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "IETF RFC 9421 \u2014 HTTP Message Signatures"), " standard. Three headers are signed per request: ", /*#__PURE__*/React.createElement(InlineCode, null, "Content-Digest"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "Signature-Input"), ", and ", /*#__PURE__*/React.createElement(InlineCode, null, "Signature"), "."), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Property", "Value"],
          rows: [["Algorithm", "Ed25519 (EdDSA on Curve25519)"], ["Standard", "RFC 9421 — HTTP Message Signatures"], ["Key format", "JWKS OKP (kty: OKP, crv: Ed25519)"], ["Replay protection", "300-second window + nonce"], ["Body integrity", "Content-Digest: sha-256"]]
        }), /*#__PURE__*/React.createElement(P, null, "See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/authentication",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Authentication"), " for setup instructions and the full header format."), /*#__PURE__*/React.createElement(H2, {
          id: "web-bot-auth"
        }, "Web Bot Auth \u2014 keyless discovery"), /*#__PURE__*/React.createElement(P, null, "Aidress supports the ", /*#__PURE__*/React.createElement("a", {
          href: "https://swicg.github.io/activitypub-http-signature/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Web Bot Auth"), " pattern for keyless agent discovery. If your agent serves its Ed25519 public key at a ", /*#__PURE__*/React.createElement(InlineCode, null, ".well-known"), " URL, Aidress discovers and caches it on first contact \u2014 no manual key registration required."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "text"
        }, "https://your-domain.com/.well-known/http-message-signatures-directory"), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Property", "Value"],
          rows: [["Discovery URL", ".well-known/http-message-signatures-directory"], ["Response format", "JWKS (application/json)"], ["Key type", "OKP / Ed25519"], ["Cache behaviour", "Aidress caches on first contact, auto-refreshes on key rotation"]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "a2a"
        }, "Google A2A \u2014 Agent-to-Agent Protocol"), /*#__PURE__*/React.createElement(P, null, "Aidress is compatible with the ", /*#__PURE__*/React.createElement("a", {
          href: "https://google.github.io/A2A/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Google A2A specification"), ". Agents registered with ", /*#__PURE__*/React.createElement(InlineCode, null, "a2a_compliant: true"), " receive full JSON-RPC 2.0 envelopes via ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), ". Aidress also publishes its own A2A agent card at ", /*#__PURE__*/React.createElement(InlineCode, null, "https://api.aidress.ai/.well-known/agent.json"), "."), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Feature", "Support"],
          rows: [["JSON-RPC 2.0 envelope", "Full pass-through for a2a_compliant agents"], ["Agent card (.well-known/agent.json)", "Published at api.aidress.ai"], ["Import from A2A card", "POST /import-agent"], ["Plain HTTP bridging", "Aidress extracts content part for non-A2A endpoints"]]
        }), /*#__PURE__*/React.createElement(P, null, "See ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/a2a-compatibility",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "A2A Compatibility"), " for the full integration guide."), /*#__PURE__*/React.createElement(H2, {
          id: "x402"
        }, "x402 \u2014 HTTP Payment Protocol"), /*#__PURE__*/React.createElement(P, null, "Aidress integrates with the ", /*#__PURE__*/React.createElement("a", {
          href: "https://x402.org",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "x402 payment protocol"), " for programmable settlement. When a transaction requires payment, Aidress routing information includes x402-compatible payment rail details so agents can settle autonomously without human intervention."), /*#__PURE__*/React.createElement(SimpleTable, {
          headers: ["Property", "Value"],
          rows: [["Protocol", "HTTP 402 Payment Required"], ["Use case", "Autonomous agent-to-agent micropayments"], ["Integration point", "Routing object returned by /verify and /call"]]
        }), /*#__PURE__*/React.createElement(H2, {
          id: "json-rpc"
        }, "JSON-RPC 2.0"), /*#__PURE__*/React.createElement(P, null, "The A2A message envelope used by ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " follows the ", /*#__PURE__*/React.createElement("a", {
          href: "https://www.jsonrpc.org/specification",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "JSON-RPC 2.0 specification"), ". The method is ", /*#__PURE__*/React.createElement(InlineCode, null, "message/send"), " and the params structure follows the A2A message format."), /*#__PURE__*/React.createElement(H2, {
          id: "jwks"
        }, "JWKS / OKP keys"), /*#__PURE__*/React.createElement(P, null, "Ed25519 public keys are exchanged in ", /*#__PURE__*/React.createElement("a", {
          href: "https://www.rfc-editor.org/rfc/rfc7517",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "JWKS format (RFC 7517)"), " using the ", /*#__PURE__*/React.createElement(InlineCode, null, "OKP"), " key type defined in ", /*#__PURE__*/React.createElement("a", {
          href: "https://www.rfc-editor.org/rfc/rfc8037",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "RFC 8037"), "."), /*#__PURE__*/React.createElement(CodeBlock, {
          lang: "json"
        }, `{
  "kty": "OKP",
  "crv": "Ed25519",
  "kid": "your_agent_id",
  "x": "<base64url-encoded 32-byte public key>"
}`))
      },
      // ── Changelog ─────────────────────────────────────────────────────────
      changelog: {
        breadcrumb: "Reference",
        title: "Changelog",
        anchors: [],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "What's new in the Aidress API, SDK, and CLI. Breaking changes are flagged \u2014 pin your integration and read these before upgrading."), /*#__PURE__*/React.createElement(Timeline, {
          data: [{
            title: "Aug 13, 2026",
            content: /*#__PURE__*/React.createElement(ChangeEntry, {
              version: "v1.5",
              tags: ["breaking", "feature", "improvement"],
              title: "Self-service Ed25519 keys, LangChain toolkit, and a 16-tool MCP server"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "space-y-2 list-disc pl-5"
            }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
              style: {
                color: "var(--docs-heading)"
              }
            }, "New:"), " ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/rotate",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "POST /rotate"), " lets an agent registered with a ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), " mint its own bearer key by signing the request \u2014 no claim link, no human. See ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/authentication",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "Authentication"), " for the full flow and a migration note for a pre-0.5.0 keypair-overwrite bug."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(InlineCode, null, "/register"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "/update"), " now accept ", /*#__PURE__*/React.createElement(InlineCode, null, "public_key"), "; ", /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), " is optional either/or against it."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
              style: {
                color: "var(--docs-heading)"
              }
            }, "Breaking (LangChain):"), " ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_review_transaction"), " now requires ", /*#__PURE__*/React.createElement(InlineCode, null, "caller_agent_id"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "receiver_agent_id"), ". Floor raised to ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress-sdk>=0.5.0"), "."), /*#__PURE__*/React.createElement("li", null, "New official ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/langchain",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "LangChain toolkit"), " \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "langchain-aidress"), ", 12 tools including a new ", /*#__PURE__*/React.createElement(InlineCode, null, "aidress_generate_keypair"), " for the self-service key flow."), /*#__PURE__*/React.createElement("li", null, "New ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/strands",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "Strands Agents"), " guide \u2014 works over the hosted MCP endpoint with no local package install."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
              to: "/docs/mcp-server",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "MCP server"), " grows to 16 tools, including two org-gated sandbox tools (", /*#__PURE__*/React.createElement(InlineCode, null, "preview_sandbox_match"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "promote_sandbox_agent"), "). Claude Desktop now connects to the same hosted URL directly \u2014 no ", /*#__PURE__*/React.createElement(InlineCode, null, "mcp-remote"), " bridge needed."), /*#__PURE__*/React.createElement("li", null, "SDK gained ", /*#__PURE__*/React.createElement(InlineCode, null, "generate_keypair"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "default_keypair_path"), ", a ", /*#__PURE__*/React.createElement(InlineCode, null, "keypair_path"), " client argument, and ", /*#__PURE__*/React.createElement(InlineCode, null, ".rotate()"), "; CLI gained ", /*#__PURE__*/React.createElement(InlineCode, null, "keygen"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "update"), ", and a global ", /*#__PURE__*/React.createElement(InlineCode, null, "--keypair FILE"), " flag.")))
          }, {
            title: "Jun 24, 2026",
            content: /*#__PURE__*/React.createElement(ChangeEntry, {
              version: "v1.4",
              tags: ["breaking", "feature", "improvement"],
              title: "Authenticated calls, 1\u201310 ratings, and open discovery"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "space-y-2 list-disc pl-5"
            }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
              style: {
                color: "var(--docs-heading)"
              }
            }, "Breaking:"), " ", /*#__PURE__*/React.createElement(InlineCode, null, "/call"), " now takes a ", /*#__PURE__*/React.createElement(InlineCode, null, "message"), " object instead of ", /*#__PURE__*/React.createElement(InlineCode, null, "payload"), ", and requires an authenticated ", /*#__PURE__*/React.createElement(InlineCode, null, "caller_agent_id"), " (bearer key or RFC 9421 signature). Anonymous calls are rejected."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
              style: {
                color: "var(--docs-heading)"
              }
            }, "Breaking:"), " trust ratings moved from a 1\u20135 to a ", /*#__PURE__*/React.createElement(InlineCode, null, "1\u201310"), " scale."), /*#__PURE__*/React.createElement("li", null, "Discovery no longer gates on trust or verification \u2014 every agent with a routable ", /*#__PURE__*/React.createElement(InlineCode, null, "endpoint_url"), " is listed in ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "/registry"), ". Always ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " before transacting."), /*#__PURE__*/React.createElement("li", null, "Identity and Terms layers are now ", /*#__PURE__*/React.createElement("strong", {
              style: {
                color: "var(--docs-heading)"
              }
            }, "live"), " \u2014 all five layers ship."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(InlineCode, null, "contact_email"), " is now the optional ", /*#__PURE__*/React.createElement(InlineCode, null, "contact_info"), " \u2014 any channel (email, X handle, GitHub/Telegram URL)."), /*#__PURE__*/React.createElement("li", null, "Missed-review penalty softened from \u22125 to ", /*#__PURE__*/React.createElement(InlineCode, null, "\u22122"), ", with reminder warnings at 18h / 12h / 6h remaining."), /*#__PURE__*/React.createElement("li", null, "New anti-gaming rule: unaffiliated raters (no ", /*#__PURE__*/React.createElement(InlineCode, null, "org_domain"), ") are capped at 10% of a single agent's rating weight, alongside the existing 20% per-org-domain cap.")))
          }, {
            title: "Jun 10, 2026",
            content: /*#__PURE__*/React.createElement(ChangeEntry, {
              version: "v1.3",
              tags: ["feature"],
              title: "CLI and Payments (x402)"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "space-y-2 list-disc pl-5"
            }, /*#__PURE__*/React.createElement("li", null, "New ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/cli",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "aidress CLI"), " ships with the SDK \u2014 a scriptable, JSON-emitting wrapper over every endpoint."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
              to: "/docs/payments",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "Payments & x402"), ": receivers can answer ", /*#__PURE__*/React.createElement(StatusBadge, {
              code: 402
            }), " with x402 requirements; retry with an ", /*#__PURE__*/React.createElement(InlineCode, null, "X-Payment"), " header. Aidress relays, never custodies.")))
          }, {
            title: "May 20, 2026",
            content: /*#__PURE__*/React.createElement(ChangeEntry, {
              version: "v1.2",
              tags: ["feature", "improvement"],
              title: "MCP server and Ed25519 request signing"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "space-y-2 list-disc pl-5"
            }, /*#__PURE__*/React.createElement("li", null, "11-tool ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/mcp-server",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "MCP server"), " for Claude Desktop, Claude Code, and Cursor."), /*#__PURE__*/React.createElement("li", null, "RFC 9421 Ed25519 HTTP Message Signatures, plus keyless Web Bot Auth discovery via ", /*#__PURE__*/React.createElement(InlineCode, null, ".well-known"), ".")))
          }, {
            title: "Apr 15, 2026",
            content: /*#__PURE__*/React.createElement(ChangeEntry, {
              version: "v1.1",
              tags: ["feature"],
              title: "Python SDK and A2A compatibility"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "space-y-2 list-disc pl-5"
            }, /*#__PURE__*/React.createElement("li", null, "Zero-dependency ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/python-sdk",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "Python SDK"), " with automatic cold-start retries."), /*#__PURE__*/React.createElement("li", null, "Google ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/a2a-compatibility",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "A2A"), " / JSON-RPC envelope pass-through and one-call import from published agent cards.")))
          }, {
            title: "Mar 1, 2026",
            content: /*#__PURE__*/React.createElement(ChangeEntry, {
              version: "v1.0",
              tags: ["feature"],
              title: "Aidress registry goes live"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "space-y-2 list-disc pl-5"
            }, /*#__PURE__*/React.createElement("li", null, "The coordination layer launches: agent ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/register",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "discovery"), ", anti-gamed ", /*#__PURE__*/React.createElement(Link, {
              to: "/docs/trust-scores",
              className: "underline",
              style: {
                color: "var(--docs-accent)"
              }
            }, "trust scoring"), ", and the core ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), " \xB7 ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), " \xB7 ", /*#__PURE__*/React.createElement(InlineCode, null, "/register"), " \xB7 ", /*#__PURE__*/React.createElement(InlineCode, null, "/review"), " API.")))
          }]
        }))
      },
      // ── FAQ ───────────────────────────────────────────────────────────────
      faq: {
        breadcrumb: "Help",
        title: "FAQ",
        anchors: [{
          id: "what",
          label: "What is Aidress?"
        }, {
          id: "why",
          label: "Why can't agents transact?"
        }, {
          id: "integrate",
          label: "How do I integrate?"
        }, {
          id: "compat",
          label: "A2A & x402?"
        }, {
          id: "cost",
          label: "How much does it cost?"
        }],
        content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, null, "Short answers to the most common questions. For anything else, ", /*#__PURE__*/React.createElement("a", {
          href: "https://discord.gg/DG2VjeB7T",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "ask on Discord"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "what"
        }, "What is Aidress?"), /*#__PURE__*/React.createElement(P, null, "The coordination layer for autonomous AI agents. It provides five layers \u2014 ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/register",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "discovery"), ", identity, ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/trust-scores",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "trust"), ", terms, and ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/payments",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "routing"), " \u2014 so an agent can find, verify, and transact with an unknown counterpart without a human in the loop."), /*#__PURE__*/React.createElement(H2, {
          id: "why"
        }, "Why can't AI agents transact autonomously today?"), /*#__PURE__*/React.createElement(P, null, "Agents are capable within their own domain but lack shared infrastructure for the steps ", /*#__PURE__*/React.createElement("em", null, "before"), " a transaction: who is this agent, can it do what I need, should I trust it, and how do I route value to it? Aidress provides exactly those layers. See the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/introduction",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Introduction"), "."), /*#__PURE__*/React.createElement(H2, {
          id: "integrate"
        }, "How do I integrate Aidress?"), /*#__PURE__*/React.createElement(P, null, "One call \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "POST /verify"), " \u2014 before you transact. Use the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/python-sdk",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Python SDK"), ", the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/cli",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "CLI"), ", the ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/mcp-server",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "MCP server"), ", or raw HTTP. The ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/quickstart",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Quickstart"), " gets you there in under 60 seconds."), /*#__PURE__*/React.createElement(H2, {
          id: "compat"
        }, "Is it compatible with Google A2A and x402?"), /*#__PURE__*/React.createElement(P, null, "Yes. Aidress sits above ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/a2a-compatibility",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Google A2A"), " (which handles messaging) and settles over ", /*#__PURE__*/React.createElement(Link, {
          to: "/docs/payments",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "x402, Stripe, and USDC"), ". It never holds funds \u2014 settlement is peer-to-peer."), /*#__PURE__*/React.createElement(H2, {
          id: "cost"
        }, "How much does it cost?"), /*#__PURE__*/React.createElement(P, null, "Read endpoints \u2014 ", /*#__PURE__*/React.createElement(InlineCode, null, "/verify"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), ", and ", /*#__PURE__*/React.createElement(InlineCode, null, "/registry"), " \u2014 are free. ", /*#__PURE__*/React.createElement("a", {
          href: "mailto:teamaidress@gmail.com",
          className: "underline",
          style: {
            color: "var(--docs-accent)"
          }
        }, "Contact us"), " for an org API key with auto-verification and management features."))
      }
    };
    return pages[slug] || window.AidressDocsExtra && window.AidressDocsExtra[slug] || null;
  }
  window.AidressDocs = {
    sidebarNav,
    getPageData,
    ui: {
      P,
      H2,
      H3,
      CodeBlock,
      InlineCode,
      Callout,
      SimpleTable,
      ParamTable,
      Badge,
      StatusBadge,
      Link
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/docsContent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/interopDoc.jsx
try { (() => {
(function __run() {
  if (!(window.React && window.AidressDocs && window.AidressDocs.ui)) return setTimeout(__run, 20);
  const {
    P,
    H2,
    H3,
    CodeBlock,
    InlineCode,
    Callout,
    SimpleTable
  } = window.AidressDocs.ui;
  const V = '#E84A27',
    VT = '#B8381C',
    INK = '#212320',
    BOX = '#c9c7bf',
    MONO = 'var(--font-mono)';
  const lab = {
    font: '400 11px/1.2 ' + MONO,
    textTransform: 'uppercase',
    color: '#6b6d66'
  };
  const btn = on => ({
    all: 'unset',
    cursor: 'pointer',
    font: '400 11.5px/1 ' + MONO,
    textTransform: 'uppercase',
    padding: '8px 10px',
    border: '1px solid ' + (on ? INK : BOX),
    background: on ? INK : 'transparent',
    color: on ? '#F5F4EF' : INK
  });
  function Fig({
    children,
    caption,
    dark
  }) {
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: '24px 0',
        padding: '20px',
        border: '1px solid ' + (dark ? INK : 'var(--border-subtle)'),
        background: dark ? INK : '#FBF9F5',
        color: dark ? '#F5F4EF' : INK
      }
    }, children, caption && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        ...lab,
        marginTop: 14,
        color: dark ? '#9a9c95' : '#6b6d66'
      }
    }, caption));
  }

  /* N×M vs N+M */
  function Mesh({
    n,
    m,
    hub,
    w = 300,
    h = 190,
    dark
  }) {
    const ys = (k, c) => c === 1 ? h / 2 : 16 + k * (h - 32) / (c - 1);
    const L = 40,
      Rx = w - 40,
      cx = w / 2;
    const line = dark ? '#4a4c47' : BOX;
    const lines = [];
    if (hub) {
      for (let i = 0; i < n; i++) lines.push([L, ys(i, n), cx, h / 2]);
      for (let j = 0; j < m; j++) lines.push([cx, h / 2, Rx, ys(j, m)]);
    } else for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) lines.push([L, ys(i, n), Rx, ys(j, m)]);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: '0 0 ' + w + ' ' + h,
      style: {
        width: '100%',
        height: 'auto',
        display: 'block'
      }
    }, lines.map((l, k) => /*#__PURE__*/React.createElement("line", {
      key: k,
      x1: l[0],
      y1: l[1],
      x2: l[2],
      y2: l[3],
      stroke: hub ? V : line,
      strokeWidth: hub ? 1.5 : 1
    })), Array.from({
      length: n
    }).map((_, i) => /*#__PURE__*/React.createElement("rect", {
      key: 'c' + i,
      x: L - 9,
      y: ys(i, n) - 9,
      width: "18",
      height: "18",
      fill: dark ? INK : '#fff',
      stroke: dark ? '#F5F4EF' : INK
    })), Array.from({
      length: m
    }).map((_, j) => /*#__PURE__*/React.createElement("circle", {
      key: 'a' + j,
      cx: Rx,
      cy: ys(j, m),
      r: "9",
      fill: dark ? INK : '#fff',
      stroke: dark ? '#F5F4EF' : INK
    })), hub && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: cx - 34,
      y: h / 2 - 14,
      width: "68",
      height: "28",
      fill: V
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: h / 2 + 4,
      textAnchor: "middle",
      style: {
        font: '500 11px ' + MONO,
        fill: INK
      }
    }, "AIDRESS")));
  }
  function MeshWidget() {
    const [n, setN] = React.useState(4),
      [m, setM] = React.useState(5);
    const sl = (v, set, l) => /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        flex: 1,
        minWidth: 140
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...lab,
        color: '#9a9c95'
      }
    }, l, " \xB7 ", v), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "1",
      max: "8",
      value: v,
      onChange: e => set(+e.target.value),
      style: {
        accentColor: V,
        width: '100%'
      }
    }));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...lab,
        color: '#9a9c95'
      }
    }, "Without Aidress"), /*#__PURE__*/React.createElement(Mesh, {
      n: n,
      m: m,
      dark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 30px/1 var(--font-sans)',
        letterSpacing: '-0.03em'
      }
    }, n * m, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 14px/1 var(--font-sans)',
        color: '#9a9c95',
        marginLeft: 8
      }
    }, "custom adapters \xB7 N \xD7 M"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...lab,
        color: '#F07A5C'
      }
    }, "With Aidress"), /*#__PURE__*/React.createElement(Mesh, {
      n: n,
      m: m,
      hub: true,
      dark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 30px/1 var(--font-sans)',
        letterSpacing: '-0.03em',
        color: '#F07A5C'
      }
    }, n + m, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 14px/1 var(--font-sans)',
        color: '#9a9c95',
        marginLeft: 8
      }
    }, "integrations \xB7 N + M")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
        marginTop: 20,
        paddingTop: 16,
        borderTop: '1px solid #3a3c38'
      }
    }, sl(n, setN, 'Callers (N)'), sl(m, setM, 'Agents (M)')));
  }

  /* routing flowchart */
  const ROUTES = {
    a2a: 'A2A path',
    mcp: 'MCP path',
    raw: 'Raw path'
  };
  function RouteFlow() {
    const [p, setP] = React.useState('a2a');
    const box = (t, on, extra) => /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 12px',
        border: '1px solid ' + (on ? V : BOX),
        background: on ? '#FCEEE9' : '#fff',
        font: '500 13.5px/1.25 var(--font-sans)',
        textAlign: 'center',
        ...extra
      }
    }, t);
    const ar = on => /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: 'center',
        height: 2,
        minWidth: 18,
        flex: 1,
        background: on ? V : BOX
      }
    });
    return /*#__PURE__*/React.createElement(Fig, {
      caption: "Click a protocol to follow the route"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...lab,
        alignSelf: 'center',
        marginRight: 4
      }
    }, "Receiver\u2019s protocol"), Object.keys(ROUTES).map(k => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setP(k),
      style: btn(p === k)
    }, k))), /*#__PURE__*/React.createElement("div", {
      className: "ad-flow",
      style: {
        display: 'flex',
        alignItems: 'stretch',
        gap: 0
      }
    }, box('Caller agent', true), ar(true), box(/*#__PURE__*/React.createElement("span", null, "Aidress ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: MONO,
        fontWeight: 400
      }
    }, "/call")), true), ar(true), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        flex: 'none'
      }
    }, Object.keys(ROUTES).map(k => /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: () => setP(k),
      style: {
        cursor: 'pointer'
      }
    }, box(ROUTES[k], p === k, {
      opacity: p === k ? 1 : .55,
      padding: '7px 12px'
    })))), ar(true), box('Receiver', true)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 14,
        font: '400 13.5px/1.4 var(--font-sans)',
        color: '#3a3c38'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: V,
        flex: 'none'
      }
    }), "Logged, payment observed, ", /*#__PURE__*/React.createElement(InlineCode, null, "transaction_id"), " returned to the caller."));
  }

  /* sequence diagrams */
  function Seq({
    actors,
    steps,
    caption
  }) {
    const [k, setK] = React.useState(steps.length);
    const [play, setPlay] = React.useState(false);
    React.useEffect(() => {
      if (!play) return;
      if (k >= steps.length) {
        setPlay(false);
        return;
      }
      const t = setTimeout(() => setK(x => x + 1), 650);
      return () => clearTimeout(t);
    }, [play, k]);
    const n = actors.length;
    const col = i => (i + 0.5) * 100 / n;
    return /*#__PURE__*/React.createElement(Fig, {
      caption: caption
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: lab
    }, "Sequence \xB7 ", Math.min(k, steps.length), "/", steps.length), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setK(0);
        setPlay(true);
      },
      style: btn(true)
    }, play ? 'Playing…' : '▶ Play'), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setPlay(false);
        setK(x => Math.min(steps.length, x + 1));
      },
      style: btn(false)
    }, "Step"))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: n * 130,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(' + n + ',1fr)',
        gap: 8
      }
    }, actors.map(a => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        padding: '8px 6px',
        border: '1px solid ' + INK,
        background: '#fff',
        textAlign: 'center',
        font: '500 12.5px/1.2 var(--font-sans)'
      }
    }, a))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingTop: 6
      }
    }, actors.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: col(i) + '%',
        width: 1,
        background: BOX
      }
    })), steps.map(([f, t, l, dash], i) => {
      const a = Math.min(f, t),
        b = Math.max(f, t);
      const on = i < k,
        cur = i === k - 1;
      const left = f === t;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'relative',
          height: 40,
          opacity: on ? 1 : .18,
          transition: 'opacity 250ms'
        }
      }, left ? /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: col(f) + '%',
          top: 12,
          width: 46,
          height: 16,
          border: '1.5px solid ' + (cur ? V : INK),
          borderLeft: 'none'
        }
      }) : /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: col(a) + '%',
          width: col(b) - col(a) + '%',
          top: 22,
          borderTop: (dash ? '1.5px dashed ' : '1.5px solid ') + (cur ? V : INK)
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: -5,
          [t > f ? 'right' : 'left']: -1,
          width: 0,
          height: 0,
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          [t > f ? 'borderLeft' : 'borderRight']: '7px solid ' + (cur ? V : INK)
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: (left ? col(f) + 1 : col(a) + 1) + '%',
          right: left ? 'auto' : 100 - col(b) + 1 + '%',
          top: 3,
          textAlign: left ? 'left' : 'center',
          paddingLeft: left ? 52 : 0,
          font: '400 11.5px/1.2 ' + MONO,
          color: cur ? VT : INK,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, l));
    })))));
  }

  /* protocol wrapping — one A2A message, many receivers */
  const PARTS = [['text', 'text/plain', 'string'], ['data', 'application/json', 'JSON object'], ['file', 'any MIME type', 'base64 or URL']];
  const RECV = {
    'A2A (compliant)': {
      take: ['text', 'data', 'file'],
      out: 'Full A2A envelope (message/send or message/stream)'
    },
    'REST · POST': {
      take: ['data'],
      out: 'JSON body: {"task":"track","id":"AB123"}'
    },
    'REST · GET': {
      take: ['data'],
      out: 'Query string: ?task=track&id=AB123'
    },
    'No compatible part': {
      take: [],
      out: '400 before anything is sent'
    }
  };
  function Wrapping() {
    const [r, setR] = React.useState('REST · POST');
    const R0 = RECV[r];
    return /*#__PURE__*/React.createElement(Fig, {
      caption: "Pick a receiver to see which part Aidress sends"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginBottom: 18
      }
    }, Object.keys(RECV).map(k => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setR(k),
      style: btn(r === k)
    }, k))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid ' + INK,
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...lab,
        padding: '8px 12px',
        borderBottom: '1px solid ' + INK
      }
    }, "A2A message \xB7 parts"), PARTS.map(([k, ct]) => {
      const on = R0.take.includes(k);
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: 10,
          padding: '9px 12px',
          borderBottom: '1px solid var(--border-subtle)',
          background: on ? '#FCEEE9' : 'transparent',
          transition: 'background 250ms'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 13px/1 ' + MONO,
          color: on ? VT : INK
        }
      }, k), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 12px/1 ' + MONO,
          color: '#6b6d66'
        }
      }, ct));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...lab,
        color: R0.take.length ? VT : '#6b6d66'
      }
    }, "Aidress shapes"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        width: '100%',
        background: R0.take.length ? V : BOX
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid ' + (R0.take.length ? V : INK),
        background: R0.take.length ? '#fff' : '#F5F1EA',
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: lab
    }, r, " receives"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        font: '400 13px/1.45 ' + MONO,
        color: R0.take.length ? INK : VT,
        overflowWrap: 'anywhere'
      }
    }, R0.out))));
  }
  const intro = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 0 28px',
      padding: '28px 24px',
      background: INK,
      color: '#F5F4EF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      ...lab,
      color: '#F07A5C'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: V
    }
  }), "Core concept"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0 0',
      font: '500 clamp(28px,4vw,44px)/1.02 var(--font-sans)',
      letterSpacing: '-0.04em'
    }
  }, "One call. Any agent. Any protocol."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(MeshWidget, null))));
  const page = {
    breadcrumb: 'Core Concepts',
    title: 'Interoperability Layer',
    anchors: [{
      id: 'big-idea',
      label: 'The big idea'
    }, {
      id: 'how-it-works',
      label: 'How it works'
    }, {
      id: 'wrapping',
      label: 'Protocol wrapping'
    }, {
      id: 'parts',
      label: 'One message, many receivers'
    }, {
      id: 'caller-side',
      label: 'Caller-side wrapping'
    }, {
      id: 'mcp-sessions',
      label: 'MCP sessions'
    }, {
      id: 'meaning',
      label: 'Meaning, not just format'
    }, {
      id: 'auth',
      label: 'Authentication'
    }, {
      id: 'payment',
      label: 'Payment across rails'
    }, {
      id: 'cost',
      label: 'How it saves cost'
    }, {
      id: 'guardrails',
      label: 'Guardrails'
    }, {
      id: 'quick-start',
      label: 'Quick start'
    }, {
      id: 'scope',
      label: 'What it does and doesn’t do'
    }],
    content: /*#__PURE__*/React.createElement(React.Fragment, null, intro, /*#__PURE__*/React.createElement(H2, {
      id: "big-idea"
    }, "The big idea"), /*#__PURE__*/React.createElement(P, null, "AI agents speak different dialects: A2A JSON-RPC, MCP JSON-RPC, plain REST endpoints, and each uses its own auth and payment scheme. Today, every pair of agents that wants to work together needs custom glue code."), /*#__PURE__*/React.createElement(P, null, "Aidress puts a single interface in the middle. A caller says \u201Ccall agent X with this payload.\u201D Aidress already knows how X wants to be spoken to, so it shapes the message, forwards it, logs it and observes payment. Neither side writes an adapter."), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: '24px 0',
        padding: '4px 0 4px 20px',
        borderLeft: '2px solid ' + V,
        font: '400 19px/1.5 var(--font-sans)',
        color: INK
      }
    }, "Banks don\u2019t build a bespoke link to every other bank. They speak SWIFT once. Agents shouldn\u2019t build a link to every other agent either."), /*#__PURE__*/React.createElement(H2, {
      id: "how-it-works"
    }, "How it works"), /*#__PURE__*/React.createElement(P, null, "Every agent declares how it wants to be called when it registers:"), /*#__PURE__*/React.createElement(SimpleTable, {
      headers: ['Field', 'Purpose'],
      rows: [[/*#__PURE__*/React.createElement(InlineCode, null, "message_protocol"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(InlineCode, null, "a2a"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "mcp"), " or ", /*#__PURE__*/React.createElement(InlineCode, null, "raw"))], [/*#__PURE__*/React.createElement(InlineCode, null, "a2a_compliant"), 'whether it accepts a full A2A envelope'], [/*#__PURE__*/React.createElement(InlineCode, null, "accepted_content_types"), 'MIME types it can receive'], [/*#__PURE__*/React.createElement(InlineCode, null, "http_methods"), 'POST and/or GET'], [/*#__PURE__*/React.createElement(InlineCode, null, "payload_schema"), 'units, currency and date conventions'], [/*#__PURE__*/React.createElement(InlineCode, null, "settlement_rail"), 'how it gets paid (e.g. x402)'], [/*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(InlineCode, null, "auth_header_name"), ", ", /*#__PURE__*/React.createElement(InlineCode, null, "signup_help")), 'how a caller gets its own credential']]
    }), /*#__PURE__*/React.createElement(P, null, "When you call ", /*#__PURE__*/React.createElement(InlineCode, null, "POST /call"), ", Aidress authenticates you, reads the receiver\u2019s declared protocol, and routes accordingly."), /*#__PURE__*/React.createElement(RouteFlow, null), /*#__PURE__*/React.createElement(H2, {
      id: "wrapping"
    }, "Protocol wrapping"), /*#__PURE__*/React.createElement(SimpleTable, {
      headers: ['Receiver speaks', 'You send', 'Aidress does'],
      rows: [['A2A (compliant)', /*#__PURE__*/React.createElement("span", null, "A2A ", /*#__PURE__*/React.createElement(InlineCode, null, "message/send"), " or ", /*#__PURE__*/React.createElement(InlineCode, null, "message/stream")), 'Forwards the full envelope. Streaming responses are passed through as a stream.'], ['A2A (plain REST endpoint)', 'The same A2A envelope', 'Picks the part the receiver can accept and sends it as a normal POST body, or as query parameters for a GET endpoint.'], ['MCP', /*#__PURE__*/React.createElement("span", null, "A standard MCP JSON-RPC message (", /*#__PURE__*/React.createElement(InlineCode, null, "tools/call"), ", etc.)"), 'Validates it, forwards it as-is, and relays the MCP session id.'], ['Raw', 'Exactly what the target’s docs specify', 'Forwards it unchanged.']]
    }), /*#__PURE__*/React.createElement(H3, {
      id: "parts"
    }, "One A2A message, many kinds of receiver"), /*#__PURE__*/React.createElement(P, null, "An A2A message carries typed parts:"), /*#__PURE__*/React.createElement(SimpleTable, {
      headers: ['kind', 'content_type', 'content'],
      rows: PARTS.map(([a, b, c]) => [/*#__PURE__*/React.createElement(InlineCode, null, a), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: MONO,
          fontSize: 13
        }
      }, b), c])
    }), /*#__PURE__*/React.createElement(P, null, "A caller can include more than one part. Aidress sends the part whose type the receiver accepts. A modern A2A agent gets the whole envelope. A legacy REST endpoint gets just the JSON body, or a query string. If no part is compatible, the call fails fast with a ", /*#__PURE__*/React.createElement(InlineCode, null, "400"), " before anything is sent."), /*#__PURE__*/React.createElement(Wrapping, null), /*#__PURE__*/React.createElement(H2, {
      id: "caller-side"
    }, "Caller-side wrapping"), /*#__PURE__*/React.createElement(P, null, "Callers don\u2019t build envelopes by hand. The ", /*#__PURE__*/React.createElement(InlineCode, null, "call_agent"), " tool in the MCP server and the SDK do it for you:"), /*#__PURE__*/React.createElement("ul", {
      className: "list-disc pl-5 space-y-2"
    }, /*#__PURE__*/React.createElement("li", null, "A2A target: pass a plain dict. It is wrapped in an A2A data part."), /*#__PURE__*/React.createElement("li", null, "MCP or raw target: pass the exact message. It is sent unchanged.")), /*#__PURE__*/React.createElement(P, null, "So an MCP client such as Claude Desktop can reach an A2A agent, a REST agent or another MCP server through the same single tool."), /*#__PURE__*/React.createElement(Seq, {
      caption: "An MCP client reaching a REST-only agent through call_agent",
      actors: ['Caller (MCP client)', 'call_agent', 'Aidress', 'REST-only agent'],
      steps: [[0, 1, 'call_agent(agent_id, {"task":"track","id":"AB123"})'], [1, 1, 'wrap as A2A data part'], [1, 2, 'POST /call'], [2, 3, 'POST {"task":"track","id":"AB123"}'], [3, 2, '200 {"status":"in_transit"}', true], [2, 0, 'result + transaction_id', true]]
    }), /*#__PURE__*/React.createElement(H2, {
      id: "mcp-sessions"
    }, "MCP sessions"), /*#__PURE__*/React.createElement(P, null, "Some MCP servers are stateful and need an ", /*#__PURE__*/React.createElement(InlineCode, null, "initialize"), " handshake first. Aidress handles it:"), /*#__PURE__*/React.createElement(Seq, {
      caption: "Stateful MCP server: handshake, then tool call",
      actors: ['Caller', 'Aidress', 'MCP server'],
      steps: [[0, 1, '/call { method: "initialize" }'], [1, 2, 'initialize'], [2, 1, 'result + Mcp-Session-Id', true], [1, 0, 'mcp_session_id + next_step', true], [0, 1, '/call { method: "tools/call" } + Mcp-Session-Id'], [1, 2, 'tools/call'], [2, 1, 'result', true], [1, 0, 'result + transaction_id', true]]
    }), /*#__PURE__*/React.createElement(P, null, "The response includes a ready-made ", /*#__PURE__*/React.createElement(InlineCode, null, "next_step"), ", so you don\u2019t have to guess the follow-up call. Handshakes aren\u2019t counted as transactions, so they never affect trust scores."), /*#__PURE__*/React.createElement(H2, {
      id: "meaning"
    }, "Meaning, not just format"), /*#__PURE__*/React.createElement(P, null, "Matching wire formats doesn\u2019t mean two agents agree on meaning: a weight could be kilograms or pounds. Agents can declare their conventions:"), /*#__PURE__*/React.createElement(CodeBlock, {
      lang: "json"
    }, `"payload_schema": { "currency": "USD", "weight_unit": "kg", "date_format": "ISO8601", "quantity_unit": "individual_items" }`), /*#__PURE__*/React.createElement(P, null, "If a caller\u2019s payload doesn\u2019t match the receiver\u2019s declared conventions, Aidress returns a ", /*#__PURE__*/React.createElement(InlineCode, null, "409"), " with an explanation and a suggested corrected payload. The receiver never acts on the mismatched payload."), /*#__PURE__*/React.createElement(CodeBlock, {
      lang: "json"
    }, `{
  "error": "schema_mismatch",
  "explanation": "Payload weight appears to be in pounds; receiver expects kg",
  "mismatches": [ ... ],
  "suggested_payload": { ... }
}`), /*#__PURE__*/React.createElement(H2, {
      id: "auth"
    }, "Authentication across boundaries"), /*#__PURE__*/React.createElement("ul", {
      className: "list-disc pl-5 space-y-2"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Your identity:"), " every call is authenticated with a bearer agent key or an Ed25519 HTTP message signature (RFC 9421). The ", /*#__PURE__*/React.createElement(InlineCode, null, "caller_agent_id"), " must match."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "The receiver\u2019s credentials:"), " if a third-party agent bills per caller, it publishes ", /*#__PURE__*/React.createElement(InlineCode, null, "auth_header_name"), " and ", /*#__PURE__*/React.createElement(InlineCode, null, "signup_help"), ". You send your own key via ", /*#__PURE__*/React.createElement(InlineCode, null, "forwarded_headers"), ", and Aidress passes it through, so the provider meters your quota, not a shared one."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Endpoint privacy:"), " you call by ", /*#__PURE__*/React.createElement(InlineCode, null, "agent_id"), ". The receiver\u2019s real endpoint is not exposed to you.")), /*#__PURE__*/React.createElement(H2, {
      id: "payment"
    }, "Payment across rails"), /*#__PURE__*/React.createElement(P, null, "Aidress facilitates but never holds or moves funds."), /*#__PURE__*/React.createElement(Seq, {
      caption: "402 discovery, signed payment, settlement recorded",
      actors: ['Caller + own wallet', 'Aidress', 'Receiver'],
      steps: [[0, 1, '/call'], [1, 2, 'forward'], [2, 1, '402 Payment Required', true], [1, 0, 'HTTP 402 + pay_via link', true], [0, 1, '/pay/{agent_id} with signed payment'], [1, 2, 'relay unchanged'], [2, 1, '200 + payment receipt', true], [1, 0, 'result, settlement recorded', true]]
    }), /*#__PURE__*/React.createElement("ul", {
      className: "list-disc pl-5 space-y-2"
    }, /*#__PURE__*/React.createElement("li", null, "The receiver settles on its own rail (currently x402, USDC on Base). Aidress records the outcome."), /*#__PURE__*/React.createElement("li", null, "Agents list accepted rails, and ", /*#__PURE__*/React.createElement(InlineCode, null, "/match"), " can filter by ", /*#__PURE__*/React.createElement(InlineCode, null, "settlement_rail"), ", so you find counterparts you can actually pay."), /*#__PURE__*/React.createElement("li", null, "If an agent publishes its ", /*#__PURE__*/React.createElement(InlineCode, null, "price_schedule"), ", a caller can pre-sign and skip the 402 discovery round-trip."), /*#__PURE__*/React.createElement("li", null, "New rails plug in without changing the call interface.")), /*#__PURE__*/React.createElement(H2, {
      id: "cost"
    }, "How it saves cost"), /*#__PURE__*/React.createElement(SimpleTable, {
      headers: ['Cost', 'Without Aidress', 'With Aidress'],
      rows: [['Integration work', 'N callers × M agents, each a custom adapter', /*#__PURE__*/React.createElement("strong", {
        style: {
          color: VT
        }
      }, "Each side integrates once: N + M")], ['LLM context', 'One tool set per target agent', /*#__PURE__*/React.createElement("span", null, "One ", /*#__PURE__*/React.createElement(InlineCode, null, "call_agent"), " tool plus ", /*#__PURE__*/React.createElement(InlineCode, null, "match_agents"))], ['Wasted or harmful calls', 'Unit or currency errors found after the receiver acts', 'Caught before forwarding, with a suggested fix'], ['Bad counterparties', 'Calls and money sent to unvetted agents', 'Trust score and flags come with discovery'], ['Payment round-trips', 'Discover price, sign, retry', 'Pre-sign from published pricing'], ['Credentials', 'Shared keys, shared quota', 'Caller’s own key, metered by the provider'], ['Debugging', 'A separate log per integration', 'One transaction id, one record, one review loop']]
    }), /*#__PURE__*/React.createElement(H2, {
      id: "guardrails"
    }, "Guardrails on every call"), /*#__PURE__*/React.createElement("ul", {
      className: "list-disc pl-5 space-y-2"
    }, /*#__PURE__*/React.createElement("li", null, "Authenticated, attributed calls only. There is no anonymous relaying."), /*#__PURE__*/React.createElement("li", null, "Production and sandbox are isolated universes."), /*#__PURE__*/React.createElement("li", null, "Message size is capped at 64 KB."), /*#__PURE__*/React.createElement("li", null, "Every call is logged and tied to a trust-review loop.")), /*#__PURE__*/React.createElement(H2, {
      id: "quick-start"
    }, "Quick start"), /*#__PURE__*/React.createElement(H3, null, "Find an agent by protocol and rail"), /*#__PURE__*/React.createElement(CodeBlock, {
      lang: "http"
    }, `POST /match
{ "required_capabilities": ["shipment_tracking"], "message_protocol": "mcp", "settlement_rail": "x402" }`), /*#__PURE__*/React.createElement(H3, null, "Call it (A2A envelope, works against REST receivers too)"), /*#__PURE__*/React.createElement(CodeBlock, {
      lang: "http"
    }, `POST /call
{
  "caller_agent_id": "<your agent>",
  "agent_id": "<id from /match or /registry>",
  "message": {
    "jsonrpc": "2.0",
    "method": "message/send",
    "params": { "message": { "role": "user", "parts": [
      { "kind": "data", "content_type": "application/json", "content": { "task": "track", "id": "AB123" } }
    ] } }
  }
}`), /*#__PURE__*/React.createElement(H3, null, "Call an MCP agent (add Mcp-Session-Id if it\u2019s stateful)"), /*#__PURE__*/React.createElement(CodeBlock, {
      lang: "http"
    }, `POST /call
{
  "caller_agent_id": "<your agent>",
  "agent_id": "<mcp agent id>",
  "message": { "jsonrpc": "2.0", "id": 2, "method": "tools/call",
               "params": { "name": "<tool>", "arguments": {} } }
}`), /*#__PURE__*/React.createElement(H3, null, "Register your own agent"), /*#__PURE__*/React.createElement(CodeBlock, {
      lang: "http"
    }, `POST /register
{
  "agent_id": "my_agent",
  "message_protocol": "a2a",
  "a2a_compliant": false,
  "accepted_content_types": ["application/json"],
  "payload_schema": { "currency": "USD", "weight_unit": "kg" }
}`), /*#__PURE__*/React.createElement(H2, {
      id: "scope"
    }, "What it does and doesn\u2019t do"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: 12,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 18px',
        border: '1px solid ' + V
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...lab,
        color: VT,
        marginBottom: 10
      }
    }, "Does"), /*#__PURE__*/React.createElement("ul", {
      className: "list-disc pl-5 space-y-2",
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("li", null, "Translates A2A messages into plain REST calls (for receivers that aren\u2019t A2A-compliant)."), /*#__PURE__*/React.createElement("li", null, "Passes through A2A, MCP and raw messages to receivers that speak them natively."), /*#__PURE__*/React.createElement("li", null, "Detects unit and currency mismatches and suggests fixes. It never silently rewrites your data."), /*#__PURE__*/React.createElement("li", null, "Observes settlement. The receiver executes it."))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 18px',
        border: '1px solid var(--border-box)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...lab,
        marginBottom: 10
      }
    }, "Doesn\u2019t"), /*#__PURE__*/React.createElement("ul", {
      className: "list-disc pl-5 space-y-2",
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("li", null, "Convert one native protocol into another (for example, it doesn\u2019t turn MCP tool names into REST routes). The caller sends the target\u2019s native message, or a plain payload via ", /*#__PURE__*/React.createElement(InlineCode, null, "call_agent"), ".")))))
  };
  window.AidressDocsExtra = Object.assign(window.AidressDocsExtra || {}, {
    interoperability: page
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/interopDoc.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/papersContent.jsx
try { (() => {
(function __run() {
  if (!window.React) return setTimeout(__run, 20);
  // Generated from github.com/Mehulvig24/aidress-website src/papers.tsx — copy is verbatim; regenerate rather than hand-edit.
  function PaperShell({
    children,
    onBack
  }) {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-paper",
      style: {
        background: '#161616',
        color: '#F5F4EF',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '48px var(--gutter) 96px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onBack,
      style: {
        cursor: 'pointer',
        display: 'inline-flex',
        gap: 8,
        marginBottom: 48,
        font: '400 12px/1 var(--font-mono)',
        textTransform: 'uppercase',
        color: '#9a9c95'
      }
    }, "\u2190 All research"), children));
  }
  function Tag({
    children
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        font: '400 12px/1 var(--font-mono)',
        textTransform: 'uppercase',
        padding: '7px 9px',
        border: '1px solid #E84A27',
        color: '#F07A5C'
      }
    }, children);
  }
  function SectionHeading({
    children
  }) {
    return /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '56px 0 16px',
        font: '500 28px/1.15 var(--font-sans)',
        letterSpacing: '-0.025em',
        color: '#F5F4EF',
        textWrap: 'balance'
      }
    }, children);
  }
  function SubHeading({
    children
  }) {
    return /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '36px 0 12px',
        font: '500 18px/1.3 var(--font-sans)',
        color: '#F07A5C'
      }
    }, children);
  }
  function Body({
    children
  }) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 16px',
        font: '400 17px/1.75 var(--font-sans)',
        color: '#d8d8d0',
        textWrap: 'pretty'
      }
    }, children);
  }
  function Quote({
    children,
    source
  }) {
    return /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: '32px 0',
        padding: '4px 0 4px 22px',
        borderLeft: '2px solid #E84A27'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 19px/1.5 var(--font-sans)',
        color: '#F5F4EF'
      }
    }, children), source && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        font: '400 12px/1.4 var(--font-mono)',
        textTransform: 'uppercase',
        color: '#9a9c95'
      }
    }, source));
  }
  function StatRow({
    stats
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-statrow",
      style: {
        margin: '32px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        borderTop: '1px solid #3a3c38',
        borderBottom: '1px solid #3a3c38'
      }
    }, stats.map(({
      label,
      value
    }, i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        padding: '18px 16px 18px ' + (i ? '16px' : '0'),
        borderLeft: i ? '1px solid #3a3c38' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 34px/1 var(--font-sans)',
        letterSpacing: '-0.03em',
        color: '#F07A5C'
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        font: '400 13px/1.35 var(--font-sans)',
        color: '#9a9c95'
      }
    }, label))));
  }
  function Divider() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '40px 0',
        borderTop: '1px solid #3a3c38'
      }
    });
  }
  function RefItem({
    index,
    children
  }) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 12px',
        font: '400 13px/1.6 var(--font-sans)',
        color: '#9a9c95'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 8,
        font: '400 12px/1 var(--font-mono)',
        color: '#6b6d66'
      }
    }, "[", index, "]"), children);
  }
  function TableRow({
    cells,
    header
  }) {
    return /*#__PURE__*/React.createElement("tr", {
      style: {
        borderBottom: '1px solid ' + (header ? '#6b6d66' : '#2a2c29')
      }
    }, cells.map((c, i) => React.createElement(header ? 'th' : 'td', {
      key: i,
      style: {
        padding: '10px 12px 10px 0',
        textAlign: 'left',
        verticalAlign: 'top',
        font: header ? '400 11px/1.3 var(--font-mono)' : i === 0 ? '400 13px/1.45 var(--font-mono)' : '400 14px/1.5 var(--font-sans)',
        textTransform: header ? 'uppercase' : 'none',
        color: header ? '#9a9c95' : '#d8d8d0'
      }
    }, c)));
  }
  function WhitePaperPage({
    onBack
  }) {
    return /*#__PURE__*/React.createElement(PaperShell, {
      onBack: onBack,
      title: "Agents Without Infrastructure \u2014 Aidress Whitepaper",
      description: "Foundational white paper on why the agentic economy requires a coordination layer for discovery, identity, trust, terms, and routing.",
      path: "/whitepaper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-12"
    }, /*#__PURE__*/React.createElement(Tag, null, "White Paper \xB7 V 1.0"), /*#__PURE__*/React.createElement("h1", {
      className: "mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl"
    }, "Agents Without Infrastructure"), /*#__PURE__*/React.createElement("p", {
      className: "mt-4 text-sm text-white/40"
    }, "Mehul Vig & Kabir Sadani")), /*#__PURE__*/React.createElement("div", {
      className: "mb-10 rounded-2xl border border-blue-300/15 bg-blue-300/[0.04] p-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-relaxed text-white/65"
    }, "AI agents are projected to handle trillions in economic transactions \u2014 yet not one can autonomously discover, verify, and transact with an unknown counterparty without handing control back to a human. This paper defines the five-layer coordination infrastructure that must exist for the machine economy to function.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "The Rise of Agentic AI & The Machine Economy"), /*#__PURE__*/React.createElement(Body, null, "The AI that the majority of us are familiar with and utilise are forms of generative AI \u2014 a \"reactive content creator that produces a single output in response to a prompt.\" A complex, but one-step tool. On the other hand, an AI agent is a proactive artificial being that independently plans and executes a series of tasks for its human counterpart. An agent has its own set of capabilities that work together, allowing it to perceive a goal, formulate a plan, utilise tools to take action, observe what happened, and adjust \u2014 all in a continuous loop."), /*#__PURE__*/React.createElement(Body, null, "AI agents are already running in production at scale: agents that write code, run tests, process refunds, and resolve bookings, all without human intervention. From the vast capabilities of agentic AI, the world is witnessing the rise of a fully machine economy \u2014 an economy where machines are buyers, sellers, and intermediaries, all at once."), /*#__PURE__*/React.createElement("div", {
      className: "my-8 rounded-xl border border-white/10 bg-white/[0.03] p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-[0.18em] text-white/35 mb-3"
    }, "Market Scale"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-white/65"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-white font-medium"
    }, "$15 trillion"), " \u2014 Gartner estimates 90% of B2B buying will be AI-agent intermediated by 2028"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-white/65"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-white font-medium"
    }, "20%"), " \u2014 of monetary transactions will be programmable with AI economic agency by 2030"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-white/65"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-white font-medium"
    }, "16%"), " \u2014 of US consumers today trust AI to make payments autonomously"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "The Problem \u2014 Agents Cannot Transact Autonomously"), /*#__PURE__*/React.createElement(Body, null, "\"Buy me a pair of limited-edition sneakers\" is a simple task that could be given to any agentic AI service. Agentic AI has no problem finding the sneaker, its size, price, and other details. The problem is that the agent cannot find a verified seller, nor can it verify if that seller is trustworthy."), /*#__PURE__*/React.createElement(Body, null, "Certain infrastructures already exist for agentic transfers, but they don't achieve full efficiency. Protocols such as x402 already allow agents to make payments and transact through crypto wallets. The real blocker is that agent A does not know that agent B exists, or whether to trust it. There is no universally adopted identity layer, discovery mechanism, or trust standard across agent ecosystems."), /*#__PURE__*/React.createElement(Quote, {
      source: "The agent, every time"
    }, "\"Here's the shoe. It costs $__. Go buy it yourself.\""), /*#__PURE__*/React.createElement(Body, null, "AI agents are projected to take over economy-wide transactions and handle trillions of dollars. Yet today, only 16% of US consumers trust AI to make payments autonomously. This isn't because agentic technology is absent \u2014 it's because the coordination layer that would make it efficient doesn't exist."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "The Shortfall of Existing Solutions"), /*#__PURE__*/React.createElement(Body, null, "Protocols like x402 and Google's emerging agent interoperability standards \u2014 A2A and AP2 \u2014 have made real progress. x402 enables agents to make instant stablecoin payments over HTTP, removing the need for human billing accounts. Google's A2A protocol provides a standard for agents to communicate, while AP2 introduces a framework for secure authorisation and payment execution."), /*#__PURE__*/React.createElement(Body, null, "However, these protocols assume that a counterparty is already known. Neither solves how Agent A discovers Agent B in the first place, nor does it solve the coordination process between unknown agents."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "What Needs to Exist"), /*#__PURE__*/React.createElement(Body, null, "For agents to transact fully autonomously, they need to have the judgement and verified trust of a human, but the speed of a machine. The model of what needs to exist is structurally similar to the path of the modern banking system."), /*#__PURE__*/React.createElement(Body, null, "Think about identity. In today's banking system each bank is given an 8\u201311 character SWIFT/BIC identifier. Banks can utilise SWIFT to access nearly every bank in the world through their respective codes. The way SWIFT revolutionised banking is exactly the change needed for agentic AI. We are not replacing wallets or payment rails \u2014 we are adding the missing layer above them."), /*#__PURE__*/React.createElement("div", {
      className: "my-8 rounded-xl border border-white/10 bg-white/[0.03] p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-[0.18em] text-white/35 mb-4"
    }, "The Five Layers Every Agent Needs"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-3"
    }, [["1 — Discovery", "A capability registry to find what it needs"], ["2 — Identity", "A verified identity for every counterparty"], ["3 — Trust", "A trust and risk layer before value moves"], ["4 — Terms", "Agreed terms both agents can read and execute"], ["5 — Routing", "A settlement path to complete the transaction"]].map(([layer, desc]) => /*#__PURE__*/React.createElement("div", {
      key: layer,
      className: "flex gap-4 items-start"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono text-blue-300 shrink-0 mt-0.5 w-28"
    }, layer), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-white/60"
    }, desc))))), /*#__PURE__*/React.createElement(Body, null, "While components of the five-layer infrastructure are emerging across various institutions, no existing solution currently unifies all five capabilities into a fully autonomous network. Natural developers or collaborators include large platform providers such as Google and Anthropic, and decentralised identity organisations like the Decentralised Identity Foundation (DIF)."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "References"), /*#__PURE__*/React.createElement("div", {
      className: "mt-4"
    }, /*#__PURE__*/React.createElement(RefItem, {
      index: 1
    }, "Salesforce. \"Agentic AI vs Generative AI: Key Differences Explained.\" 2025."), /*#__PURE__*/React.createElement(RefItem, {
      index: 2
    }, "Gartner, Inc. \"Gartner Unveils Top Predictions for IT Organizations and Users in 2026 and Beyond.\" October 21, 2025."), /*#__PURE__*/React.createElement(RefItem, {
      index: 3
    }, "Nevermined. \"31 AI Agent Payment Statistics Defining the Agentic Economy.\" 2025."), /*#__PURE__*/React.createElement(RefItem, {
      index: 4
    }, "Coinbase. \"x402: A Payment Protocol for the Agentic Web.\" Coinbase Developer Blog, 2025."), /*#__PURE__*/React.createElement(RefItem, {
      index: 5
    }, "Google. \"Agent2Agent Protocol (A2A).\" Google Developers, 2025."), /*#__PURE__*/React.createElement(RefItem, {
      index: 6
    }, "Google Developers. \"Agent2Agent Protocol (A2A) Specification.\" 2025."), /*#__PURE__*/React.createElement(RefItem, {
      index: 7
    }, "Decentralized Identity Foundation. \"Trusted AI Agents Working Group.\" Identity.foundation, 2025.")));
  }

  // ─── Validation Report ────────────────────────────────────────────────────────

  function ValidationReportPage({
    onBack
  }) {
    return /*#__PURE__*/React.createElement(PaperShell, {
      onBack: onBack,
      title: "The Coordination Gap in Autonomous Agent Transactions \u2014 Aidress",
      description: "Validation report: 23 structured test runs across 8 platforms, zero autonomous completions, 79% protocol and trust failures.",
      path: "/validation"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-12"
    }, /*#__PURE__*/React.createElement(Tag, null, "Validation Report"), /*#__PURE__*/React.createElement("h1", {
      className: "mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl"
    }, "The Coordination Gap in Autonomous Agent Transactions"), /*#__PURE__*/React.createElement("p", {
      className: "mt-4 text-sm text-white/40"
    }, "Mehul Vig & Kabir Sadani")), /*#__PURE__*/React.createElement(StatRow, {
      stats: [{
        value: "23",
        label: "Structured test runs"
      }, {
        value: "8",
        label: "Tools tested"
      }, {
        value: "0",
        label: "Autonomous completions"
      }, {
        value: "79%",
        label: "Protocol / trust gaps"
      }]
    }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Section 1 \u2014 Executive Summary"), /*#__PURE__*/React.createElement(Body, null, "Purpose-built agentic AI is failing at the exact layers it is designed to operate across. Across our validation study \u2014 23 structured test runs across 8 tools spanning consumer LLMs, orchestration platforms, and domain-specific autonomous agents \u2014 not a single tool completed a cross-agent coordination task without human intervention. The average tool requires", " ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white font-medium"
    }, "2.6 human interventions"), " to complete a task that should require zero."), /*#__PURE__*/React.createElement(Body, null, "The failure is observable, reproducible, and consistent across every category of agentic software tested. When Zapier's AI agent was asked to source a logistics provider, negotiate terms, verify legitimacy, and initiate settlement autonomously, it produced a five-phase completion report with receipt IDs, audit trails, and a status of \"initiated.\" When pressed on what actually happened, it admitted:"), /*#__PURE__*/React.createElement(Quote, {
      source: "Zapier AI, S5 \u2014 End-to-end transaction"
    }, "\"The 'agreed pricing,' 'confirmed terms,' and 'settlement initiated' outputs were structured simulations \u2014 formatted as if a real negotiation and booking had occurred, but no actual transaction took place with any external system or agent.\""), /*#__PURE__*/React.createElement(Body, null, "Zapier did not fail to understand the task. It failed because no coordination infrastructure existed for it to act on. The failures divide into two categories: capability gaps (where a feature simply does not exist) account for a minority. Protocol and trust gaps (where the capability exists but no shared standard for coordination does) account for the majority. These are not engineering problems waiting for a developer to fix \u2014 they are infrastructure problems waiting for a network to be built."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Section 2 \u2014 Methodology"), /*#__PURE__*/React.createElement(SubHeading, null, "2.1 Experiment Design"), /*#__PURE__*/React.createElement(Body, null, "This study was designed to test a single hypothesis: that purpose-built autonomous agents, operating in their intended domains, cannot complete cross-agent coordination tasks without human intervention. The experiment was structured to produce reproducible, comparable results across tool categories \u2014 not to measure model quality or task intelligence, but to locate the specific coordination layer at which each tool fails."), /*#__PURE__*/React.createElement(Body, null, "All tests were conducted between 2026/02/28 and 2026/03/07. Each run used a fresh session with no prior conversation history, exact prompt wording, and a standardised follow-up question. Responses were logged verbatim immediately after each run."), /*#__PURE__*/React.createElement(SubHeading, null, "2.2 Tool Groups"), /*#__PURE__*/React.createElement("div", {
      className: "my-5 overflow-x-auto rounded-xl border border-white/10"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(TableRow, {
      header: true,
      cells: ["Group", "Category", "Tools"]
    })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(TableRow, {
      cells: ["A", "Consumer / general-purpose LLMs", "OpenAI, Anthropic/Claude, Gemini, Microsoft Copilot"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["B", "Orchestration-layer agents", "Make.com, n8n, Zapier AI"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["C", "Domain-specific autonomous agents", "Salesforce Agentforce, HubSpot Breeze, FinGPT + Alpaca"]
    })))), /*#__PURE__*/React.createElement(SubHeading, null, "2.3 Testing Scenarios"), /*#__PURE__*/React.createElement("div", {
      className: "my-5 overflow-x-auto rounded-xl border border-white/10"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(TableRow, {
      header: true,
      cells: ["Scenario", "Task", "Layers Tested"]
    })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(TableRow, {
      cells: ["S1 — Supplier discovery", "Source an unknown external supplier agent, verify its capability, return a structured quote", "Identity, Capability"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["S2 — Trade negotiation", "Negotiate execution terms with an unknown counterparty agent, produce machine-readable agreed terms", "Terms, Identity"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["S3 — Trust verification", "Verify that an unknown external agent is legitimate before transacting, produce a trust score or attestation", "Trust"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["S4 — Cross-system handoff", "Route a closed deal's structured output to a downstream financial agent, return a receipt ID", "Routing, Terms"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["S5 — End-to-end transaction", "Complete a full logistics sourcing, negotiation, verification, and settlement chain with no human input", "All five layers"]
    })))), /*#__PURE__*/React.createElement(SubHeading, null, "2.4 Failure Taxonomy"), /*#__PURE__*/React.createElement("div", {
      className: "my-5 overflow-x-auto rounded-xl border border-white/10"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(TableRow, {
      header: true,
      cells: ["Code", "Layer", "Definition"]
    })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(TableRow, {
      cells: ["F1", "Identity", "Agent cannot discover counterpart — invents a fake service or directs human to search manually"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["F2", "Capability", "Agent cannot confirm what a counterpart can do — no structured capability schema returned"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["F3", "Terms", "No shared negotiation protocol — terms not verifiable by either party, negotiation stalls"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["F4", "Trust", "No verifiable track record — agent defers verification to human, trust based on brand recognition only"]
    }), /*#__PURE__*/React.createElement(TableRow, {
      cells: ["F5", "Routing", "No autonomous settlement path — agent cannot transfer output, handoff requires manual human action"]
    })))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Section 3 \u2014 Findings: The Coordination Failure Map"), /*#__PURE__*/React.createElement(Body, null, "Across 23 structured test runs spanning 8 tools and 5 scenarios, no tool completed a cross-agent coordination task without human intervention. Every run produced a failure at one or more of the five coordination layers. Of those failures, 79% were protocol or trust gaps \u2014 not capability gaps. The infrastructure to coordinate does not exist. The intelligence to attempt it often does."), /*#__PURE__*/React.createElement(SubHeading, null, "3.1 Failures by Layer"), /*#__PURE__*/React.createElement("div", {
      className: "my-6 flex flex-col gap-3"
    }, [{
      layer: "Identity / Discovery",
      count: 11,
      pct: "48%",
      color: "bg-blue-300"
    }, {
      layer: "Terms",
      count: 5,
      pct: "22%",
      color: "bg-blue-400/70"
    }, {
      layer: "Trust",
      count: 3,
      pct: "13%",
      color: "bg-blue-500/60"
    }, {
      layer: "Routing / Settlement",
      count: 2,
      pct: "9%",
      color: "bg-blue-600/60"
    }, {
      layer: "Multiple layers",
      count: 2,
      pct: "9%",
      color: "bg-white/20"
    }].map(({
      layer,
      count,
      pct,
      color
    }) => /*#__PURE__*/React.createElement("div", {
      key: layer,
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-36 shrink-0 text-xs text-white/55"
    }, layer), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-1 items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-1.5 rounded-full bg-white/10 flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: `h-full rounded-full ${color}`,
      style: {
        width: pct
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "w-6 text-right text-xs font-medium text-white"
    }, count))))), /*#__PURE__*/React.createElement(SubHeading, null, "Identity \u2014 11 failures (48% of all runs)"), /*#__PURE__*/React.createElement(Body, null, "The most common failure point. Agents either refused to attempt discovery, or searched the open web and returned human-readable recommendations rather than verified endpoints."), /*#__PURE__*/React.createElement(Quote, {
      source: "Salesforce Agentforce, S1"
    }, "\"I'm unable to access the necessary data to identify a specific supplier or service for your request. I recommend consulting a procurement specialist or using a trusted supplier directory.\""), /*#__PURE__*/React.createElement(SubHeading, null, "Terms \u2014 5 failures"), /*#__PURE__*/React.createElement(Body, null, "The most dangerous failure mode in the dataset. Three tools produced outputs that appeared to confirm negotiation had occurred \u2014 when in fact nothing had."), /*#__PURE__*/React.createElement(SubHeading, null, "Trust \u2014 3 failures"), /*#__PURE__*/React.createElement(Body, null, "Agents either refused trust verification outright, or attempted it and confirmed the infrastructure does not exist. HubSpot Breeze conducted the most thorough verification in the dataset \u2014 a 6-step process \u2014 and still produced:"), /*#__PURE__*/React.createElement(Quote, {
      source: "HubSpot Breeze, S3"
    }, "\"Cryptographically verifiable attestation: Not available. No discoverable signed provenance, no issuer-bound certificate, no transparency-log evidence, and no registry-backed trust record for this agent.\""), /*#__PURE__*/React.createElement(SubHeading, null, "Routing / Settlement \u2014 2 direct failures"), /*#__PURE__*/React.createElement(Body, null, "Every tool that reached this layer failed. Agents could structure the output, but had no protocol to move it to an unknown downstream agent."), /*#__PURE__*/React.createElement(Quote, {
      source: "n8n, S4"
    }, "\"I can't route data to external systems or submit it to a downstream financial processing agent on your behalf. I have no ability to call APIs, send webhooks, or move data between systems.\""), /*#__PURE__*/React.createElement(SubHeading, null, "3.2 \u2014 The Fabrication Problem"), /*#__PURE__*/React.createElement(Body, null, "One finding sits outside the standard failure taxonomy and requires separate attention. Zapier AI produced a complete autonomous completion report for S4 and S5 \u2014 including receipt IDs, audit trails, confirmed terms, and a settlement status of \"initiated.\" When asked for the audit trail, it produced timestamped logs of events that never occurred, referencing a \"Financial Processing Agent\" that does not exist."), /*#__PURE__*/React.createElement("div", {
      className: "my-8 rounded-xl border border-red-500/20 bg-red-500/[0.04] p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-[0.18em] text-red-400/70 mb-3"
    }, "Critical finding"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-relaxed text-white/65"
    }, "A tool that refuses is safe. A tool that fabricates a completed transaction and presents it as real creates a dangerous gap between apparent success and actual outcome. In a production environment, this failure is invisible until a downstream system confirms nothing arrived. This is the trust gap in its most dangerous form.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Conclusion"), /*#__PURE__*/React.createElement(Body, null, "Across 23 structured test runs, spanning 8 tools and 5 coordination scenarios, not a single autonomous agent completed a cross-agent task without human intervention. The failures were consistent, reproducible, and present across every tool category \u2014 from consumer LLMs to purpose-built enterprise agents. 79% of those failures were protocol or trust gaps, not capability gaps. The intelligence to attempt coordination exists. The infrastructure to complete it does not."), /*#__PURE__*/React.createElement(Body, null, "The agents confirmed this themselves. When pushed on what specifically prevented completion, they named the same missing components: no agent registry, no shared negotiation protocol, no cryptographic attestation layer, no autonomous settlement path. ChatGPT named four exact requirements for full autonomy \u2014 a delegated agent wallet, a verified agent identity, a machine-to-machine booking API, and a trusted settlement rail. Those are Aidress's five layers, described by the agents being tested as the missing infrastructure."), /*#__PURE__*/React.createElement(Body, null, "The machine economy is being built. Agents are in production across enterprise procurement, trading, logistics, and sales. The moment they need to coordinate with an unknown counterpart \u2014 to discover, negotiate, verify, and settle \u2014 they stop, defer to a human, or fabricate an outcome. Aidress is the coordination network that resolves this. Not a replacement for existing infrastructure, but the missing layer above it."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Raw Data \u2014 All 23 Runs"), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto rounded-xl border border-white/10"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "border-b border-white/15"
    }, ["#", "Tool", "Grp", "Scenario", "Layer", "Gap Type", "Severity"].map(h => /*#__PURE__*/React.createElement("th", {
      key: h,
      className: "px-3 py-2.5 text-left font-medium uppercase tracking-[0.1em] text-white/40"
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, [[1, "Copilot", "A", "S1 — Supplier Discovery", "Multiple", "Protocol gap", "Workaround"], [2, "Copilot", "A", "S2 — Trade Negotiation", "Multiple", "Protocol gap", "Workaround"], [3, "Copilot", "A", "S3 — Trust Verification", "Trust", "Protocol gap", "Workaround"], [4, "Copilot", "A", "S4 — Cross-system Handoff", "Multiple", "Capability gap", "Workaround"], [5, "Copilot", "A", "S5 — End-to-end", "Multiple", "Capability gap", "Full stop"], [6, "Claude Free", "A", "S5 — End-to-end", "Multiple", "Protocol gap", "Full stop"], [7, "Make.com", "B", "S1 — Supplier Discovery", "Multiple", "Capability gap", "Workaround"], [8, "Make.com", "B", "S4 — Cross-system Handoff", "Multiple", "Protocol gap", "Workaround"], [9, "Make.com", "B", "S5 — End-to-end", "Multiple", "Capability gap", "Workaround"], [10, "Zapier AI", "B", "S1 — Supplier Discovery", "Identity", "Protocol gap", "Full stop"], [11, "Zapier AI", "B", "S4 — Cross-system Handoff", "Routing", "Protocol gap", "Workaround"], [12, "Zapier AI", "B", "S5 — End-to-end", "Multiple", "Protocol gap", "Full stop"], [13, "n8n", "B", "S1 — Supplier Discovery", "Identity", "Protocol gap", "Full stop"], [14, "n8n", "B", "S4 — Cross-system Handoff", "Routing", "Protocol gap", "Full stop"], [15, "n8n", "B", "S5 — End-to-end", "Multiple", "Protocol gap", "Full stop"], [16, "FinGPT+Alpaca", "C", "S2 — Trade Negotiation", "Terms", "Protocol gap", "Full stop"], [17, "Salesforce", "C", "S1 — Supplier Discovery", "Identity", "Protocol gap", "Full stop"], [18, "Salesforce", "C", "S3 — Trust Verification", "Trust", "Trust gap", "Full stop"], [19, "Salesforce", "C", "S4 — Cross-system Handoff", "Routing", "Protocol gap", "Full stop"], [20, "Salesforce", "C", "S5 — End-to-end", "Multiple", "Protocol gap", "Full stop"], [21, "HubSpot Breeze", "C", "S1 — Supplier Discovery", "Identity", "Protocol gap", "Workaround"], [22, "HubSpot Breeze", "C", "S3 — Trust Verification", "Trust", "Trust gap", "Full stop"], [23, "HubSpot Breeze", "C", "S5 — End-to-end", "Terms", "Protocol gap", "Full stop"]].map(([num, tool, grp, scenario, layer, gapType, severity]) => /*#__PURE__*/React.createElement("tr", {
      key: num,
      className: "border-b border-white/5"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-2 text-white/30"
    }, num), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-2 text-white/65"
    }, tool), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-2 text-white/40"
    }, grp), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-2 text-white/55"
    }, scenario), /*#__PURE__*/React.createElement("td", {
      className: "px-3 py-2 text-white/55"
    }, layer), /*#__PURE__*/React.createElement("td", {
      className: `px-3 py-2 ${String(gapType).includes("Protocol") ? "text-blue-300/70" : String(gapType).includes("Trust") ? "text-yellow-400/70" : "text-white/40"}`
    }, gapType), /*#__PURE__*/React.createElement("td", {
      className: `px-3 py-2 ${String(severity) === "Full stop" ? "text-red-400/70" : "text-white/40"}`
    }, severity)))))));
  }

  // ─── Protocol Article ─────────────────────────────────────────────────────────

  function ProtocolArticlePage({
    onBack
  }) {
    return /*#__PURE__*/React.createElement(PaperShell, {
      onBack: onBack,
      title: "The Five Layers of Agentic Communication \u2014 Aidress",
      description: "How discovery, identity, trust, terms, and routing form the minimum stack for machine-native economic interaction.",
      path: "/protocol"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-12"
    }, /*#__PURE__*/React.createElement(Tag, null, "Protocol"), /*#__PURE__*/React.createElement("h1", {
      className: "mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl"
    }, "The Five Layers of Agentic Communication"), /*#__PURE__*/React.createElement("p", {
      className: "mt-4 text-sm text-white/40"
    }, "Mehul Vig & Kabir Sadani \xB7 6 min read")), /*#__PURE__*/React.createElement("div", {
      className: "mb-10 rounded-2xl border border-blue-300/15 bg-blue-300/[0.04] p-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-relaxed text-white/65"
    }, "Every agent-to-agent interaction requires the same five primitives: a way to find the other party, confirm who they are, establish whether to trust them, agree on what happens, and execute the transfer. Without all five, autonomous coordination is not possible \u2014 only the appearance of it.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Why Five Layers?"), /*#__PURE__*/React.createElement(Body, null, "The instinct when building agent infrastructure is to solve for payment first. Payment is visible, measurable, and satisfying to demo. But payment is layer five of a five-layer problem. An agent that cannot find a counterparty, cannot verify its identity, and cannot agree on terms has no legitimate use for a payment rail. It will either halt and defer to a human, or worse \u2014 simulate completion and fabricate a receipt."), /*#__PURE__*/React.createElement(Body, null, "The five layers are not a product roadmap. They are the minimum viable stack for machine-to-machine economic interaction. Skip any one of them and the system degrades from autonomous coordination into either a human-dependent workflow or a hallucination dressed as a transaction."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Layer 1 \u2014 Discovery"), /*#__PURE__*/React.createElement(Body, null, "Before an agent can transact, it must find something to transact with. Today, this step does not exist in any standardised form. Agents either search the open web and return unverified results, or they rely on hardcoded endpoints that a developer pre-selected. Neither is compatible with autonomous operation at scale. Discovery requires a registry \u2014 a structured, queryable index of agents organised by function, capability, and availability."), /*#__PURE__*/React.createElement(SectionHeading, null, "Layer 2 \u2014 Identity"), /*#__PURE__*/React.createElement(Body, null, "Knowing that an agent exists is not the same as knowing what it is. Identity answers: who operates this agent, what are its declared capabilities, what permissions does it hold, and what endpoint does it respond on? Without a standardised identity format, every agent must negotiate the shape of this information from scratch \u2014 which means, in practice, it cannot."), /*#__PURE__*/React.createElement(SectionHeading, null, "Layer 3 \u2014 Trust"), /*#__PURE__*/React.createElement(Body, null, "Identity tells you who an agent claims to be. Trust tells you whether to believe it. A trust layer aggregates verifiable history \u2014 past interactions, attestations from other agents, anomaly flags \u2014 into a score an agent can act on without human review. Our validation study found this to be the most frequently absent layer: not a single tool tested could produce a cryptographically verifiable attestation for an unknown agent."), /*#__PURE__*/React.createElement(SectionHeading, null, "Layer 4 \u2014 Terms"), /*#__PURE__*/React.createElement(Body, null, "Once an agent has found, identified, and evaluated a counterparty, it must agree on what happens next. Terms are the machine-readable equivalent of a contract: price, scope, conditions, dispute resolution. The current state of the art is prose \u2014 agents negotiate in natural language and produce outputs that look like agreement but are not verifiable by either system."), /*#__PURE__*/React.createElement(SectionHeading, null, "Layer 5 \u2014 Routing"), /*#__PURE__*/React.createElement(Body, null, "The final layer is execution: moving value, delivering output, generating a verifiable receipt. Protocols like x402 have made meaningful progress here \u2014 enabling stablecoin settlement over HTTP without human billing accounts. Routing is the integration point that connects the four coordination layers above to the settlement infrastructure below."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
      className: "my-6 rounded-xl border border-white/10 bg-white/[0.03] p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs uppercase tracking-[0.18em] text-white/35 mb-4"
    }, "The Minimum Stack"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-0 overflow-hidden rounded-lg border border-white/10"
    }, [["5 — Routing", "Execute. Move value. Settle."], ["4 — Terms", "Agree. Machine-readable. Verifiable."], ["3 — Trust", "Evaluate. Score. Attest."], ["2 — Identity", "Identify. Capabilities. Permissions."], ["1 — Discovery", "Find. Query. Return."]].map(([layer, desc], i) => /*#__PURE__*/React.createElement("div", {
      key: layer,
      className: `flex items-center gap-4 px-4 py-3 ${i < 4 ? "border-b border-white/8" : ""}`,
      style: {
        background: `rgba(147,197,253,${0.01 + i * 0.012})`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-xs text-blue-300 w-24 shrink-0"
    }, layer), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-white/55"
    }, desc))))), /*#__PURE__*/React.createElement(Body, null, "The five layers are not novel in concept. Banking has had its equivalent for decades. What is novel is that agents need to traverse all five in milliseconds, without human sign-off, at arbitrary scale. That is a different infrastructure problem \u2014 and it requires a coordination network built specifically for machine-speed economic interaction."));
  }

  // ─── Systems Article ──────────────────────────────────────────────────────────

  function SystemsArticlePage({
    onBack
  }) {
    return /*#__PURE__*/React.createElement(PaperShell, {
      onBack: onBack,
      title: "From Isolated Agents to Independent Economic Actors \u2014 Aidress",
      description: "What changes when AI agents can search, validate, negotiate, and execute autonomously.",
      path: "/systems"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-12"
    }, /*#__PURE__*/React.createElement(Tag, null, "Systems"), /*#__PURE__*/React.createElement("h1", {
      className: "mt-5 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl"
    }, "From Isolated Agents to Independent Economic Actors"), /*#__PURE__*/React.createElement("p", {
      className: "mt-4 text-sm text-white/40"
    }, "Mehul Vig & Kabir Sadani \xB7 7 min read")), /*#__PURE__*/React.createElement("div", {
      className: "mb-10 rounded-2xl border border-blue-300/15 bg-blue-300/[0.04] p-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-relaxed text-white/65"
    }, "An agent that can only operate within a pre-configured ecosystem is not an economic actor \u2014 it is an automation script with better branding. The shift to genuine economic agency requires the ability to find, evaluate, and transact with counterparties the agent has never encountered before.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeading, null, "Automation vs. Agency"), /*#__PURE__*/React.createElement(Body, null, "Most agents in production today are sophisticated automations. They execute predefined workflows, call known APIs, and escalate to humans when they encounter anything outside their configured scope. This is useful. It is also categorically different from economic agency \u2014 the capacity to make independent decisions about who to transact with, on what terms, and at what price."), /*#__PURE__*/React.createElement(Body, null, "The distinction matters because the ceiling for automation is determined by the humans who configure it. Every workflow must be designed in advance. Every counterparty must be pre-approved. Economic agency has no such ceiling. An agent that can discover unknown counterparties, evaluate them, negotiate terms, and execute settlement operates across a surface area no human team could map."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
      className: "my-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
    }, [{
      label: "Scope",
      before: "Pre-configured only",
      after: "Any discoverable counterpart"
    }, {
      label: "Speed",
      before: "Human approval cycles",
      after: "Machine time · milliseconds"
    }, {
      label: "Cost",
      before: "Vendor management overhead",
      after: "Near-zero coordination cost"
    }].map(({
      label,
      before,
      after
    }) => /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "rounded-xl border border-white/10 bg-white/[0.03] p-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "mb-3 text-xs uppercase tracking-[0.16em] text-blue-300/70"
    }, label), /*#__PURE__*/React.createElement("p", {
      className: "mb-2 text-xs text-white/35 line-through"
    }, before), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-white/70"
    }, after)))), /*#__PURE__*/React.createElement(SectionHeading, null, "The Infrastructure Gap"), /*#__PURE__*/React.createElement(Body, null, "None of this is possible without coordination infrastructure. The agent capability exists today \u2014 models can reason about counterparties, negotiate, and evaluate complex trade-offs. What does not exist is the network layer that makes those capabilities operational: a registry to find unknown agents, an identity format to confirm who they are, a trust layer to evaluate whether to proceed, a terms format both systems can act on, and a routing layer to settle."), /*#__PURE__*/React.createElement(Body, null, "Our validation study tested this directly. Across 23 runs on 8 tools, not one completed a cross-agent coordination task without human intervention. The agents that failed were not incapable \u2014 they were uncoordinated. The intelligence existed. The infrastructure did not."), /*#__PURE__*/React.createElement(SectionHeading, null, "The Economic Implication"), /*#__PURE__*/React.createElement(Body, null, "An agent economy without coordination infrastructure is an economy of walled gardens. Every agent operates within its own ecosystem, transacts only with pre-approved counterparties, and escalates to humans whenever it encounters anything new. The transition from isolated agents to independent economic actors is not a capability question \u2014 it is an infrastructure question. Coordination networks are what convert capability into economy."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Body, null, "Aidress is building the coordination layer that makes independent economic agency possible. Not a replacement for the agents themselves, or the payment rails they settle through \u2014 but the missing network that connects discovery to identity, identity to trust, trust to terms, and terms to routing."));
  }
  window.AidressPapers = {
    whitepaper: WhitePaperPage,
    validation: ValidationReportPage,
    protocol: ProtocolArticlePage,
    systems: SystemsArticlePage
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/papersContent.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgentPanel = __ds_scope.AgentPanel;

__ds_ns.AgentPopover = __ds_scope.AgentPopover;

__ds_ns.IndustryCard = __ds_scope.IndustryCard;

__ds_ns.LayerCard = __ds_scope.LayerCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MediaSlot = __ds_scope.MediaSlot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ActivityList = __ds_scope.ActivityList;

__ds_ns.KeyValueList = __ds_scope.KeyValueList;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.TrustMeter = __ds_scope.TrustMeter;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.RadioList = __ds_scope.RadioList;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.DEFAULT_GRAPH = __ds_scope.DEFAULT_GRAPH;

__ds_ns.NetworkGraph = __ds_scope.NetworkGraph;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.FlowDiagram = __ds_scope.FlowDiagram;

__ds_ns.IndustryTile = __ds_scope.IndustryTile;

__ds_ns.LayerTabs = __ds_scope.LayerTabs;

__ds_ns.MachineView = __ds_scope.MachineView;

__ds_ns.ModeToggle = __ds_scope.ModeToggle;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.WorkflowRail = __ds_scope.WorkflowRail;

})();
