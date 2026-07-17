"use client";

import Image from "next/image";
import { useState } from "react";

interface OssImageProps {
	src: string; // OSS 上的文件路径，如 "images/sky_atmosphere_1993.svg"
	alt: string;
	width?: number;
	height?: number;
	className?: string;
	sizes?: string;
	quality?: number;
	priority?: boolean;
	processing?: "2webp" | "resize" | "none"; // OSS 图片处理样式
	caption?: string; // 可选图片说明
	captionClassName?: string;
	containerClassName?: string;
	onError?: () => void;
}

/**
 * 封装 Next.js Image，自动拼接 OSS 链接
 * 如果是 SVG 文件，自动跳过 OSS 处理
 */
	export function OssImage({
		src,
		alt,
		width,
		height,
		className = "m-auto object-cover rounded-lg",
		sizes,
		priority = false,
		processing = "2webp",
		caption,
		captionClassName = "mt-2 text-center text-sm text-gray-500",
		containerClassName = "",
		onError,
	}: OssImageProps) {
	const [error, setError] = useState(false);

	const isSvg = (path: string) => {
		return path.toLowerCase().endsWith('.svg');
	};

	const buildOssUrl = (path: string) => {
		const baseUrl = "https://j1n9h3.oss-cn-hangzhou.aliyuncs.com";
		const cleanPath = path.startsWith("/") ? path.slice(1) : path;
		const fullUrl = `${baseUrl}/${cleanPath}`;

		if (isSvg(path) || processing === "none") {
		return fullUrl;
		}

		if (processing === "2webp") {
		return `${fullUrl}?x-oss-process=style/2webp`;
		}

		return fullUrl;
	};

	const imageUrl = buildOssUrl(src);

	if (error) {
		return (
		<div className={containerClassName}>
			<div
			className={`flex items-center justify-center bg-stone-900 my-2 text-stone-500 w-full h-64 ${className}`}
			
			>
			<span className="text-lg font-light ">图片加载失败</span>
			</div>
		</div>
		);
	}

	return (
		<div className={containerClassName}>
		<Image
			src={imageUrl}
			alt={alt}
			width={width}
			height={height}
			className={className}
			sizes={sizes}
			priority={priority}
			onError={() => {
			setError(true);
			onError?.();
			}}
		/>
		</div>
  	);
}