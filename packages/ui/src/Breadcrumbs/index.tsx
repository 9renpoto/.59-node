import { tw } from "@twind/core";

type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={tw`flex space-x-2`}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={`${breadcrumb.label}-${breadcrumb.href}`}
            className={tw`flex items-center`}
          >
            {index > 0 && <span className={tw`mx-2`}>/</span>}
            {breadcrumb.href ? (
              <a
                href={breadcrumb.href}
                className={tw`text-blue-600 hover:underline`}
              >
                {breadcrumb.label}
              </a>
            ) : (
              <span className={tw`text-gray-500`}>{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
