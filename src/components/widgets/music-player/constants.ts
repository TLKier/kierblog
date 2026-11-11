import Cover1 from "../../../assets/music/cover/单相思.jpg?url";
import Cover2 from "../../../assets/music/cover/桜流し.jpg?url";
import Cover3 from "../../../assets/music/cover/One Last Kiss.jpg?url";
import Cover4 from "../../../assets/music/cover/唯一jpg?url";
import Cover5 from "../../../assets/music/cover/だんご大家族.jpg?url";
import Cover6 from "../../../assets/music/cover/Last regrets.jpg?url";
import Cover7 from "../../../assets/music/cover/Polytope.jpg?url";
import Cover8 from "../../../assets/music/cover/Horizon Dreamer.jpg?url";
import Cover9 from "../../../assets/music/cover/空気力学少女と少年の詩.jpg?url";
import Cover10 from "../../../assets/music/cover/Weight of the world.jpg?url";
import Cover11 from "../../../assets/music/cover/unlasting.jpg?url";

import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "单相思",
		artist: "Aimer",
		cover: Cover1,
		url: "assets/music/url/单相思.mp3",
		duration: 253,
	},
	{
		id: 2,
		title: "桜流し",
		artist: "宇多田光",
		cover: Cover2,
		url: "assets/music/url/桜流し.mp3",
		duration: 253,
	},
	{
		id: 3,
		title: "One Last Kiss",
		artist: "宇多田光",
		cover: Cover3,
		url: "assets/music/url/One Last Kiss.mp3",
		duration: 253,
	},
	{
		id: 4,
		title: "唯一",
		artist: "G.E.M.邓紫棋",
		cover: Cover4,
		url: "assets/music/url/唯一.mp3",
		duration: 253,
	},
	{
		id: 5,
		title: "だんご大家族",
		artist: "茶太",
		cover: Cover5,
		url: "assets/music/url/だんご大家族.mp3",
		duration: 241,
	},
	{
		id: 6,
		title: "Last regrets",
		artist: "彩音",
		cover: Cover6,
		url: "assets/music/url/Last regrets.mp3",
		duration: 253,
	},
	{
		id: 7,
		title: "Polytope",
		artist: "三浦大知",
		cover: Cover7,
		url: "assets/music/url/Polytope.mp3",
		duration: 253,
	},
	{
		id: 8,
		title: "Horizon Dreamer",
		artist: "三浦大知",
		cover: Cover8,
		url: "assets/music/url/Horizon Dreamer.mp3",
		duration: 253,
	},
	{
		id: 9,
		title: "空気力学少女と少年の詩",
		artist: "はな",
		cover: Cover9,
		url: "assets/music/url/空気力学少女と少年の詩.mp3",
		duration: 253,
	},
	{
		id: 10,
		title: "Weight of the world",
		artist: "冈部啓一,MONACA",
		cover: Cover10,
		url: "assets/music/url/Weight of the world.mp3",
		duration: 253,
	},
	{
		id: 11,
		title: "unlasting",
		artist: "Lisa",
		cover: Cover11,
		url: "assets/music/url/unlasting.mp3",
		duration: 253,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: DEFAULT_COVER_URL,
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
