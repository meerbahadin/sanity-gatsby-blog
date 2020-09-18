export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6491ac521ed5009e56cf8b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jee42wxp',
                  apiId: 'a85ecc95-9e44-4dcd-9c4f-61b48981c2bf'
                },
                {
                  buildHookId: '5f6491ac5956c8011be738b7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-deeygvsj',
                  apiId: '414e6970-5646-40f9-ad36-b1998ddb1bb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meerbahadin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-deeygvsj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
