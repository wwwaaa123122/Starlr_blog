// 友链数据类型定义
export interface Friend {
	name: string;
	url: string;
	avatar: string;
	description: string;
}

// 友链数据
export const friends: Friend[] = [
	{
		name: "Astro",
		url: "https://github.com/withastro/astro",
		avatar: "https://avatars.githubusercontent.com/u/44914786?s=48&v=4",
		description:
			"本站框架",
	},
	{
	    name: "Acofork",
	    url: "https://blog.2x.nz",
	    avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
	    description:
	        "分享网络技术、服务器部署、内网穿透、静态网站搭建、CDN优化、容器化部署等技术教程与实践经验的个人技术博客",
	},
];

