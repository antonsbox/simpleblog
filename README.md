# Simpleblog module for magento
 Simple Blog module for magento is an interface for blogging.
    Main functions are:
  - Creating new blog post
  - Editing existing records
  - Deleting records

 You can also setup the Meta Title, Meta Keywords, Meta Description and Meta Author tags in System->Configuration->SIMPLE BLOG SETTINGS->Settings menu in magento admin interface.
### Tech
 Simpleblog frontend written on Angular2 (https://angular.io/) - the best framework to build single page applications.
### Installation
 Tested work on Magento ver. 1.9.2.4, work on the other does not warrant.
 Download and extract the latest release (https://github.com/antonsbox/simpleblog/releases) to your magento base directory.
 Go to magento configuration interface. Go to menu node System->Web Services->REST->Roles-Role API Resources->Guest and mark everything in Simple Blog REST.
 
 Then go to node System->Web Services->REST->REST Attributes->Guest and also mark everything in Simple Blog REST.
 
 Known apache2 issue:
 Add Options Indexes FollowSymLinks to your magento`s vhost configuration  
##TODO
 minify used javascript libs
