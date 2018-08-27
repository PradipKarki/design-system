import AlertsPage from './views/AlertsPage';
import AvatarsPage from './views/AvatarsPage';
import BadgesPage from './views/BadgesPage';
import ButtonsPage from './views/ButtonsPage';
import TogglesPage from './views/TogglesPage';
import BreadcrumbsPage from './views/BreadcrumbsPage';
import CardsPage from './views/CardsPage';
import IconsPage from './views/IconsPage';
import ModalsPage from './views/ModalsPage';
import TooltipsPage from './views/TooltipsPage';

/* eslint-disable import/no-webpack-loader-syntax */
import InfoTipsPage from '!babel-loader!mdx-loader!./views/InfoTipsPage.mdx';
// import TooltipsPage from '!babel-loader!mdx-loader!./views/TooltipsPage.mdx';
/* eslint-enable import/no-webpack-loader-syntax */

export default [
  { title: 'Alerts', slug: 'AlertsPage', component: AlertsPage },
  { title: 'Avatars', slug: 'AvatarsPage', component: AvatarsPage },
  { title: 'Badges', slug: 'BadgesPage', component: BadgesPage },
  { title: 'Buttons', slug: 'ButtonsPage', component: ButtonsPage },
  { title: 'Toggles', slug: 'toggles', component: TogglesPage },
  { title: 'Breadcrumbs', slug: 'breadcrumbs', component: BreadcrumbsPage },
  { title: 'Cards', slug: 'CardsPage', component: CardsPage },
  { title: 'Icons', slug: 'IconsPage', component: IconsPage },
  { title: 'Tooltips', slug: 'TooltipsPage', component: TooltipsPage },
  { title: 'InfoTips', slug: 'InfoTipsPage', component: InfoTipsPage },
  { title: 'Modals', slug: 'modals', component: ModalsPage },
];
