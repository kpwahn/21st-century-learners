/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  startYourOwnBusiness: [
    'start-your-own-business/1',
    'start-your-own-business/2',
    'start-your-own-business/3'
  ],
  tutorialSidebar: [
    'intro-to-tech/1',
    'intro-to-tech/2',
    'intro-to-tech/3',
    'intro-to-tech/4',
    'intro-to-tech/5',
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
