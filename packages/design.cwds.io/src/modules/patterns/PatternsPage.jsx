import React from 'react';
import { Link } from 'react-router-dom';
// import { AppBar, PageHeader, Container, Breadcrumb } from '@cwds/components';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import { Container, Row, Col } from '@cwds/components/lib/Grid';
import AnchorNav from '@cwds/components/lib/AnchorNav';
import Page from '@cwds/components/lib/Layouts/Layout';
// import IntraPageRoutes from './ComponentRouteManager';

/* eslint-disable import/no-webpack-loader-syntax */
import PatternsPage from '!babel-loader!mdx-loader!./PatternsPage.mdx';

export default () => (
  <Page
    title="Patterns"
    breadcrumb={[<Link to="/">Guide</Link>, 'Patterns']}
  >
    <PatternsPage />
  </Page>
);
