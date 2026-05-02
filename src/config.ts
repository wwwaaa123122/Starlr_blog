import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Starlr blog",
	subtitle: "爱你所爱",
	description:
		"分享网络技术、服务器部署、内网穿透、静态网站搭建、CDN优化、容器化部署等技术教程与实践经验的个人技术博客，专注于云原生、无服务器架构和前后端开发，作者为starlr/星辰旅人",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh-CN', 'ja', etc.
	themeColor: {
		hue: 245, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/icon.png", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "友情链接",
			url: "/friends/",
			external: false,
		},
		{
		    name: "脚本",
		    url: "/scripts/",
		    external: false,
		}
		LinkPreset.About,
		{
			name: "Github",
			url: "https://github.com/wwwaaa123122",
			external: true,
		},
		{
			name: "统计",
			url: "https://umami.xc-lr.cn/share/FNH4YZYF9xPh0Xjt",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/favicon.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "星辰旅人",
	bio: "Protect what you love./爱你所爱！",
	links: [
		 {
			name: "Twitter",
			icon: "fa6-brands:twitter",
			url: "https://twitter.com/wwwaaa123122",
		 },
		 {
			name: "Telegram",
			icon: "fa-brands:telegram",
			url: "https://t.me/wwwaaa123122",
		 },
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wwwaaa123122",
		},
		{
			name: "Mail",
			icon: "fa6-solid:envelope",
			url: "mailto:i@xc-lr.cn",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
