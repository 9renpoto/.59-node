import type { JSX } from "preact";

export interface CardProps {
  title: string;
  authorName: string;
  authorImage: string;
  date: string;
  tags: string[];
  coverImage?: string;
  reactions: number;
  comments: number;
  readingTime: number;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <div class="rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
      {props.coverImage && (
        <a href="/" class="block">
          <img
            class="w-full h-48 object-cover"
            src={props.coverImage}
            alt={`Cover for ${props.title}`}
          />
        </a>
      )}
      <div class="p-4 sm:p-6">
        <div class="flex items-center mb-3">
          <img
            class="w-8 h-8 rounded-full mr-3"
            src={props.authorImage}
            alt={`Profile of ${props.authorName}`}
          />
          <div>
            <p class="text-sm font-medium text-gray-900">
              <a href="/">{props.authorName}</a>
            </p>
            <p class="text-xs text-gray-500">
              <time>{props.date}</time>
            </p>
          </div>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-3">
          <a href="/">{props.title}</a>
        </h3>
        <div class="flex flex-wrap mb-4">
          {props.tags.map((tag) => (
            <a
              href="/"
              class="text-xs text-gray-600 hover:text-black mr-2 mb-2 px-2 py-1 border border-gray-200 rounded-md"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div class="flex items-center text-sm text-gray-500">
          <div class="flex items-center mr-6">
            <span>❤️</span>
            <span class="ml-1">{props.reactions} reactions</span>
          </div>
          <div class="flex items-center mr-6">
            <span>💬</span>
            <span class="ml-1">{props.comments} comments</span>
          </div>
          <div class="ml-auto">
            <span class="text-xs">{props.readingTime} min read</span>
            <button
              type="button"
              class="ml-2 px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
