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
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  
   tutorialSidebar: [
      'intro',
      /*'Components/components-doc', 'tutorial-basics/create-a-document',*/
      {
        type: 'category',
        label: 'Components',
        items: ['Components/Overview', 
          //'Components/component-1', 
          // 'Components/component-2', 
          // 'Components/component-3', 
          // 'Components/component-4',//],
      //},
        {
          type: 'category',
          label: 'Component-1 (Wanna work with us?)',
          items: [
            'Components/Component-1/Types/type-1',
            'Components/Component-1/Types/type-2',
            'Components/Component-1/Types/type-3',
            'Components/Component-1/Types/type-4',
            'Components/Component-1/Types/type-5',
          //   'Components/Types/type-1',
          //   'Components/Types/type-2',
          //   'Components/Types/type-3',
          //   'Components/Types/type-4',
        //   {
        //     type: 'category',
        //     label: 'Types',
        //     items: [
        //       // 'Components/Component-1/Types/type-1',
        //       // 'Components/Component-1/Types/type-2',
        //       // 'Components/Component-1/Types/type-3',
        //       // 'Components/Component-1/Types/type-4',
        //       // 'Components/Component-1/Types/type-5',
        // ],},
      ],},
      
        {
          type: 'category',
          label: 'Component-2 (Wir Sind)',
          items: [
          //   'Components/Types/type-1',
          //   'Components/Types/type-2',
          //   'Components/Types/type-3',
          //   'Components/Types/type-4',
          // {
          //   type: 'category',
          //   label: 'Types',
          //   items: [
              'Components/Component-2/Types/type-1',
              'Components/Component-2/Types/type-2',
              'Components/Component-2/Types/type-3',
              'Components/Component-2/Types/type-4',
              'Components/Component-2/Types/type-5',
        // ],},
      ],},
        {
          type: 'category',
          label: 'Component-3 (Home Intro)',
          items: [
          //   'Components/Types/type-1',
          //   'Components/Types/type-2',
          //   'Components/Types/type-3',
          //   'Components/Types/type-4',
          // {
          //   type: 'category',
          //   label: 'Types',
          //   items: [
              'Components/Component-3/Types/type-1',
              'Components/Component-3/Types/type-2',
              'Components/Component-3/Types/type-3',
              'Components/Component-3/Types/type-4',
              'Components/Component-3/Types/type-5',
        // ],},
      ],},
        {
          type: 'category',
          label: 'Component-4 (Welance Scrolly Telling)',
          items: [
          //   'Components/Types/type-1',
          //   'Components/Types/type-2',
          //   'Components/Types/type-3',
          //   'Components/Types/type-4',
          // {
          //   type: 'category',
          //   label: 'Types',
          //   items: [
              'Components/Component-4/Types/type-1',
              'Components/Component-4/Types/type-2',
              'Components/Component-4/Types/type-3',
              'Components/Component-4/Types/type-4',
              'Components/Component-4/Types/type-5',
        // ],},
      ],},
       {
          type: 'category',
          label: 'Component-5 (Big Departments change Background, with Description)',
          items: [
          
              'Components/Component-5/Types/type-1',
              'Components/Component-5/Types/type-2',
              'Components/Component-5/Types/type-3',
              'Components/Component-5/Types/type-4',
              'Components/Component-5/Types/type-5',
        
      ],},

      {
        type: 'category',
        label: 'Component-6 (Collective Pictures w/GPS)',
        items: [
        
            'Components/Component-6/Types/type-1',
            'Components/Component-6/Types/type-2',
            'Components/Component-6/Types/type-3',
            'Components/Component-6/Types/type-4',
            'Components/Component-6/Types/type-5',
      
    ],},

    {
      type: 'category',
      label: 'Component-7 (Collective Pictures w/GPS)',
      items: [
      
          'Components/Component-7/Types/type-1',
          'Components/Component-7/Types/type-2',
          'Components/Component-7/Types/type-3',
          'Components/Component-7/Types/type-4',
          'Components/Component-7/Types/type-5',
    
   ],},
    ],},
    //   {
    //     type: 'category',
    //     label: 'Component-1',
    //     items: ['Components/Types/type-1', 'Components/Types/type-2', 'Components/Types/type-3', 'Components/Types/type-4'],
    //   },
      
    // ], 
  
      ],
    
  };

export default sidebars;




// // sidebars.js
// module.exports = {
//   tutorialSidebar: [
//     {
//       type: 'category',
//       label: 'Getting Started',
//       items: [
//         'doc1', 
//         'doc2',
//         {
//           type: 'category',
//           label: 'Advanced Topics',
//           items: [
//             'doc3',
//             'doc4',
//             {
//               type: 'category',
//               label: 'Deep Dive',
//               items: [
//                 'doc5',
//                 'doc6',
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: 'category',
//       label: 'API Reference',
//       items: [
//         'api-doc1',
//         'api-doc2',
//       ],
//     },
//   ],
// };
