// --------------------------------------------------------------------------------------
// 1. 定义图标与映射 (已优化优先级与 CDN 加速)
// --------------------------------------------------------------------------------------

// 图标源 (统一使用 CDN 加速确保加载成功)
const IconSource = {
  Orz3: "https://fastly.jsdelivr.net/gh/Orz-3/mini@master/Color/",
  Xiaolin: "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/",
  Verge: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/",
  Koolson: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/"
};

// 完整国家映射 (共 58 个)
const countryMap = {
    "CN": "中国", "HK": "香港", "MO": "澳门", "TW": "台湾",
    "JP": "日本", "KR": "韩国", "SG": "狮城", "IN": "印度",
    "ID": "印尼", "MY": "马来西亚", "TH": "泰国", "VN": "越南",
    "PH": "菲律宾", "PK": "巴基斯坦", "IL": "以色列", "TR": "土耳其",
    "AE": "阿联酋", "SA": "沙特", "IR": "伊朗", "KP": "朝鲜",
    "CY": "塞浦路斯", "US": "美国", "CA": "加拿大", "MX": "墨西哥", 
    "GB": "英国", "DE": "德国", "FR": "法国", "NL": "荷兰",
    "RU": "俄罗斯", "IT": "意大利", "ES": "西班牙", "SE": "瑞典",
    "CH": "瑞士", "IE": "爱尔兰", "UA": "乌克兰", "PL": "波兰",
    "NO": "挪威", "FI": "芬兰", "DK": "丹麦", "PT": "葡萄牙",
    "AT": "奥地利", "GR": "希腊", "BE": "比利时", "HU": "匈牙利",
    "CZ": "捷克", "RO": "罗马尼亚", "BG": "保加利亚", "IS": "冰岛",
    "AU": "澳大利亚", "NZ": "新西兰", "BR": "巴西", "AR": "阿根廷", 
    "CL": "智利", "CO": "哥伦比亚", "PE": "秘鲁", "ZA": "南非", 
    "EG": "埃及", "NG": "尼日利亚"
};

// 完整规则定义 (修正 Loyalsoldier 规则格式)
const ruleDefinitions = [
    { name: "LS_Reject", group: "应用净化", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt", behavior: "domain", format: "yaml" },
    { name: "LS_Applications", group: "节点选择", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt", behavior: "classical", format: "yaml" },
    { name: "LS_Private", group: "全球直连", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt", behavior: "domain", format: "yaml" },
    { name: "LS_LanCidr", group: "全球直连", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt", behavior: "ipcidr", format: "yaml" },
    { name: "GoogleFCM", group: "谷歌FCM", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list" },
    { name: "OpenAI", group: "OpenAi", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAi.list" },
    { name: "YouTube", group: "油管视频", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list" },
    { name: "Netflix", group: "奈飞视频", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list" },
    { name: "Bahamut", group: "巴哈姆特", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bahamut.list" },
    { name: "Bilibili", group: "哔哩哔哩", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bilibili.list" },
    { name: "Steam", group: "游戏平台", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Steam.list" },
    { name: "Epic", group: "游戏平台", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Epic.list" },
    { name: "NeteaseMusic", group: "网易音乐", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/NetEaseMusic.list" },
    { name: "Bing", group: "微软Bing", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bing.list", behavior: "domain" },
    { name: "OneDrive", group: "微软云盘", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OneDrive.list", behavior: "domain" },
    { name: "Microsoft", group: "微软服务", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Microsoft.list" },
    { name: "ProxyMedia", group: "国外媒体", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list" },
    { name: "ChinaMedia", group: "国内媒体", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaMedia.list" },
    { name: "Telegram", group: "电报消息", url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list" },
    { name: "LS_TelegramIP", group: "电报消息", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt", behavior: "ipcidr", format: "yaml" },
    { name: "LS_Apple", group: "苹果服务", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt", behavior: "domain", format: "yaml" },
    { name: "LS_ICloud", group: "苹果服务", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt", behavior: "domain", format: "yaml" },
    { name: "LS_Google", group: "节点选择", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt", behavior: "domain", format: "yaml" },
    { name: "LS_Proxy", group: "节点选择", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt", behavior: "domain", format: "yaml" },
    { name: "LS_GFW", group: "节点选择", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt", behavior: "domain", format: "yaml" },
    { name: "LS_NonCN", group: "节点选择", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt", behavior: "domain", format: "yaml" },
    { name: "LS_Direct", group: "全球直连", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt", behavior: "domain", format: "yaml" },
    { name: "LS_CNCIDR", group: "全球直连", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt", behavior: "ipcidr", format: "yaml" }
];

// 图标获取逻辑 (优化优先级顺序)
function getIconForGroup(name) {
  const mapping = [
    { key: "OpenAi", icon: IconSource.Orz3 + "OpenAI.png" },
    { key: "ChatGPT", icon: IconSource.Orz3 + "OpenAI.png" },
    { key: "Telegram", icon: IconSource.Orz3 + "Telegram.png" },
    { key: "电报", icon: IconSource.Orz3 + "Telegram.png" },
    { key: "Google", icon: IconSource.Orz3 + "Google.png" },
    { key: "谷歌", icon: IconSource.Orz3 + "Google.png" },
    { key: "YouTube", icon: IconSource.Orz3 + "YouTube.png" },
    { key: "油管", icon: IconSource.Orz3 + "YouTube.png" },
    { key: "Netflix", icon: IconSource.Orz3 + "Netflix.png" },
    { key: "奈飞", icon: IconSource.Orz3 + "Netflix.png" },
    { key: "Microsoft", icon: IconSource.Orz3 + "Microsoft.png" },
    { key: "微软", icon: IconSource.Orz3 + "Microsoft.png" },
    { key: "Apple", icon: IconSource.Orz3 + "Apple.png" },
    { key: "苹果", icon: IconSource.Orz3 + "Apple.png" },
    { key: "Steam", icon: IconSource.Orz3 + "Steam.png" },
    { key: "游戏", icon: IconSource.Orz3 + "Steam.png" },
    { key: "Bilibili", icon: IconSource.Xiaolin + "bilibili.svg" }, 
    { key: "哔哩哔哩", icon: IconSource.Xiaolin + "bilibili.svg" },
    { key: "Bahamut", icon: IconSource.Xiaolin + "Bahamut.svg" },
    { key: "巴哈姆特", icon: IconSource.Xiaolin + "Bahamut.svg" },
    { key: "Spotify", icon: IconSource.Orz3 + "Spotify.png" },
    { key: "Discord", icon: IconSource.Orz3 + "Discord.png" },
    { key: "Twitter", icon: IconSource.Orz3 + "Twitter.png" },
    { key: "ChinaIP", icon: IconSource.Orz3 + "China.png" },
    { key: "China", icon: IconSource.Orz3 + "China.png" },
    { key: "Global", icon: IconSource.Orz3 + "Global.png" },
    { key: "国外", icon: IconSource.Orz3 + "Global.png" },
    { key: "Netease", icon: IconSource.Koolson + "Netease_Music.png" }, 
    { key: "网易", icon: IconSource.Koolson + "Netease_Music.png" },
    { key: "全球直连", icon: IconSource.Verge + "link.svg" }, 
    { key: "全球拦截", icon: IconSource.Verge + "block.svg" }, 
    { key: "应用净化", icon: IconSource.Koolson + "Advertising.png" },
    { key: "国内媒体", icon: IconSource.Koolson + "Media.png" },
    { key: "国外媒体", icon: IconSource.Orz3 + "Global.png" },
    { key: "漏网之鱼", icon: IconSource.Orz3 + "Final.png" },
    { key: "Match", icon: IconSource.Orz3 + "Final.png" },
    { key: "Auto", icon: IconSource.Orz3 + "Urltest.png" },
    { key: "自动", icon: IconSource.Orz3 + "Urltest.png" },
    { key: "Select", icon: IconSource.Orz3 + "Static.png" },
    { key: "节点选择", icon: IconSource.Koolson + "Proxy.png" },
    { key: "手动切换", icon: IconSource.Orz3 + "Static.png" },
    { key: "Reject", icon: IconSource.Orz3 + "Reject.png" },
    { key: "拦截", icon: IconSource.Orz3 + "Reject.png" },
    { key: "净化", icon: IconSource.Orz3 + "Reject.png" },
    { key: "Direct", icon: IconSource.Orz3 + "Direct.png" },
    { key: "直连", icon: IconSource.Orz3 + "Direct.png" },
    { key: "Cloudflare", icon: IconSource.Orz3 + "Cloudflare.png" },
    { key: "故障转移", icon: IconSource.Orz3 + "Final.png" },
    { key: "Bing", icon: IconSource.Orz3 + "Bing.png" },
    { key: "OneDrive", icon: IconSource.Verge + "OneDrive.svg" },
    { key: "云盘", icon: IconSource.Verge + "OneDrive.svg" },
    { key: "FCM", icon: IconSource.Orz3 + "Google.png" }
  ];

  for (let item of mapping) {
    if (name.toLowerCase().includes(item.key.toLowerCase())) return item.icon;
  }
  for (const [code, cName] of Object.entries(countryMap)) {
    if (name.includes(cName) || name.includes(code)) return `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
  }
  return IconSource.Orz3 + "Static.png";
}

// --------------------------------------------------------------------------------------
// 2. 主函数 (Main)
// --------------------------------------------------------------------------------------

function main(config) {
  if (!config.proxies || config.proxies.length === 0) return config;

  const allProxyNames = config.proxies.map(p => p.name);

  // A. DNS 配置 (完美平衡版)
  config.dns = {
    "enable": true,
    "ipv6": false,
    "listen": "0.0.0.0:1053",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["*.lan", "*.localhost"],
    "respect-rules": true,
    "cache-algorithm": "arc",
    "use-system-hosts": false,
    "proxy-server-nameserver": ["https://dns.alidns.com/dns-query", "https://doh.pub/dns-query"],
    "nameserver": ["https://8.8.8.8/dns-query", "https://1.1.1.1/dns-query"],
    "nameserver-policy": {
      "geosite:cn,private": ["https://dns.alidns.com/dns-query", "https://doh.pub/dns-query"]
    },
    "fallback": ["https://dns.google/dns-query", "https://dns.cloudflare.com/dns-query"],
    "fallback-filter": { "geoip": true, "ipcidr": ["240.0.0.0/4"] }
  };

  // B. 生成 Rule Providers (动态读取格式)
  const newRuleProviders = {};
  ruleDefinitions.forEach(r => {
    newRuleProviders[r.name] = {
      type: "http",
      behavior: r.behavior || "classical",
      url: r.url,
      path: `./ruleset/${r.name}.${r.format === 'yaml' ? 'yaml' : 'list'}`,
      interval: 86400,
      format: r.format || "text"
    };
  });
  config["rule-providers"] = newRuleProviders;

  // C. 动态分组逻辑
  const dynamicGroups = {};
  const countryGroupNames = [];

  config.proxies.forEach(node => {
    let matchedName = null;
    for (const [code, cName] of Object.entries(countryMap)) {
        if (node.name.includes(cName) || node.name.includes(code)) {
            matchedName = cName;
            break;
        }
    }
    
    if (matchedName) {
        const groupKey = matchedName + "节点"; 
        if (!dynamicGroups[groupKey]) dynamicGroups[groupKey] = [];
        dynamicGroups[groupKey].push(node.name);
    }
  });

  const generatedProxyGroups = [];
  for (const [groupName, proxies] of Object.entries(dynamicGroups)) {
    countryGroupNames.push(groupName);
    const autoName = `${groupName}自动`;
    
    generatedProxyGroups.push({
      name: autoName,
      type: "fallback",
      icon: getIconForGroup(groupName),
      url: "http://www.gstatic.com/generate_204",
      interval: 300,
      proxies: proxies
    });

    generatedProxyGroups.push({
      name: groupName,
      type: "select",
      icon: getIconForGroup(groupName),
      proxies: [autoName, ...proxies]
    });
  }

  // D. 构建核心功能组 (还原原始多行排版格式)
  const countrySubGroups = countryGroupNames.length > 0 ? countryGroupNames : ["DIRECT"];
  const baseSelect = { type: "select", interval: 300 };

  const functionGroups = [
    {
      name: "节点选择",
      ...baseSelect,
      icon: getIconForGroup("节点选择"),
      proxies: ["自动选择", "故障转移", ...countrySubGroups, "手动切换", "DIRECT"]
    },
    {
      name: "自动选择",
      type: "url-test",
      icon: getIconForGroup("自动选择"),
      url: "http://www.gstatic.com/generate_204",
      interval: 300,
      tolerance: 50,
      proxies: allProxyNames
    },
    {
      name: "故障转移",
      type: "fallback",
      icon: getIconForGroup("故障转移"),
      url: "http://www.gstatic.com/generate_204",
      interval: 300,
      proxies: allProxyNames
    },
    {
      name: "手动切换",
      type: "select",
      icon: getIconForGroup("手动切换"),
      proxies: allProxyNames
    },
    {
      name: "电报消息",
      ...baseSelect,
      icon: getIconForGroup("电报消息"),
      proxies: ["故障转移", "节点选择", "自动选择", ...countrySubGroups, "手动切换", "DIRECT"]
    },
    {
      name: "OpenAi",
      ...baseSelect,
      icon: getIconForGroup("OpenAi"),
      proxies: ["故障转移", "节点选择", "自动选择", ...countrySubGroups, "手动切换"]
    },
    {
      name: "油管视频",
      ...baseSelect,
      icon: getIconForGroup("油管视频"),
      proxies: ["节点选择", "自动选择", "故障转移", ...countrySubGroups, "手动切换", "DIRECT"]
    },
    {
      name: "奈飞视频",
      ...baseSelect,
      icon: getIconForGroup("奈飞视频"),
      proxies: ["节点选择", "故障转移", ...countrySubGroups, "手动切换", "DIRECT"]
    },
    {
      name: "巴哈姆特",
      ...baseSelect,
      icon: getIconForGroup("巴哈姆特"),
      proxies: ["节点选择", "故障转移", ...countrySubGroups, "手动切换", "DIRECT"]
    },
    {
      name: "哔哩哔哩",
      ...baseSelect,
      icon: getIconForGroup("哔哩哔哩"),
      proxies: ["全球直连", ...countrySubGroups]
    },
    {
      name: "国外媒体",
      ...baseSelect,
      icon: getIconForGroup("国外媒体"),
      proxies: ["节点选择", "故障转移", "自动选择", ...countrySubGroups, "手动切换", "DIRECT"]
    },
    {
      name: "国内媒体",
      ...baseSelect,
      icon: getIconForGroup("国内媒体"),
      proxies: ["DIRECT", ...countrySubGroups, "手动切换"]
    },
    {
      name: "谷歌FCM",
      ...baseSelect,
      icon: getIconForGroup("谷歌FCM"),
      proxies: ["DIRECT", "节点选择", "故障转移", ...countrySubGroups, "手动切换"]
    },
    {
      name: "微软Bing",
      ...baseSelect,
      icon: getIconForGroup("Bing"),
      proxies: ["DIRECT", "节点选择", "故障转移", ...countrySubGroups, "手动切换"]
    },
    {
      name: "微软云盘",
      ...baseSelect,
      icon: getIconForGroup("云盘"),
      proxies: ["DIRECT", "节点选择", "故障转移", ...countrySubGroups, "手动切换"]
    },
    {
      name: "微软服务",
      ...baseSelect,
      icon: getIconForGroup("微软"),
      proxies: ["DIRECT", "节点选择", "故障转移", "手动切换"]
    },
    {
      name: "苹果服务",
      ...baseSelect,
      icon: getIconForGroup("苹果"),
      proxies: ["DIRECT", "节点选择", "故障转移", ...countrySubGroups, "手动切换"]
    },
    {
      name: "游戏平台",
      ...baseSelect,
      icon: getIconForGroup("游戏"),
      proxies: ["DIRECT", "节点选择", "故障转移", ...countrySubGroups, "手动切换"]
    },
    {
      name: "网易音乐",
      ...baseSelect,
      icon: getIconForGroup("网易"),
      proxies: ["DIRECT", "节点选择"]
    },
    {
      name: "全球直连",
      ...baseSelect,
      icon: getIconForGroup("全球直连"),
      proxies: ["DIRECT", "节点选择", "故障转移", "自动选择"]
    },
    {
      name: "全球拦截",
      ...baseSelect,
      icon: getIconForGroup("全球拦截"),
      proxies: ["REJECT", "DIRECT"]
    },
    {
      name: "应用净化",
      ...baseSelect,
      icon: getIconForGroup("应用净化"),
      proxies: ["REJECT", "DIRECT"]
    },
    {
      name: "漏网之鱼",
      ...baseSelect,
      icon: getIconForGroup("漏网之鱼"),
      proxies: ["节点选择", "故障转移", "全球直连", "自动选择", ...countrySubGroups, "手动切换"]
    }
  ];

  config["proxy-groups"] = [...functionGroups, ...generatedProxyGroups];

  // E. 规则逻辑 (整合高优先级代理规则并保持循环逻辑)
  const newRules = [
    // 强制代理，解决 i/o timeout 报错
    "DOMAIN-SUFFIX,googleapis.cn,节点选择",
    "DOMAIN-SUFFIX,gstatic.com,节点选择",
    "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择",
    "DOMAIN-SUFFIX,github.io,节点选择",
    "DOMAIN,v2rayse.com,节点选择"
  ];
  const allGroupNames = config["proxy-groups"].map(g => g.name);

  ruleDefinitions.forEach(r => {
    let target = r.group;
    if (["应用净化", "全球拦截"].includes(r.group)) { target = "REJECT"; }
    else if (!allGroupNames.includes(target) && target !== 'DIRECT' && target !== 'REJECT') {
        target = allGroupNames.includes('节点选择') ? '节点选择' : 'DIRECT';
    }
    newRules.push(`RULE-SET,${r.name},${target}`);
  });

  newRules.push("GEOSITE,cn,全球直连");
  newRules.push("GEOIP,CN,全球直连");
  newRules.push("DOMAIN-SUFFIX,cn,全球直连");
  newRules.push("MATCH,漏网之鱼");

  config.rules = newRules;
  return config;
}