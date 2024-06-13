import s from "./top-menu.module.scss";

type MenuItem = {
  text: string;
  path: string;
  locales: string[];
};

type Props = {
  pathname: string;
  menuItems: MenuItem[];
};

export const TopMenu = ({ pathname, menuItems }: Props) => {
  return (
    <div class={s.header}>
      <a {...(pathname !== "/" && { href: "/" })} class={s.logo}>
        {/* <img src="/ym.svg" /> */}
        <span>/</span>
        ymatuhin
        <span>/</span>
      </a>

      <nav class={s.nav}>
        {menuItems.map((item) => (
          <a
            href={item.path}
            className={`${s.navItem} ${
              pathname === item.path ? s.active : ""
            }`}>
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
