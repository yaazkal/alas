; Alas master makefile
;
api = 2
core = 7.x
projects[drupal][type] = "core"
projects[drupal][download][type] = "get"
projects[drupal][download][url] = "http://files.aegir.cc/core/drupal-7.41.1.tar.gz"

; Modules
projects[admin_menu][version] = "3.0-rc5"

projects[ajax_poll][version] = "1.1"

projects[apc][version] = "1.0-beta4"

projects[audiofield][version] = "1.0"

projects[seo_checker][version] = "1.8"

projects[boolean][version] = "1.1"

projects[ctools][version] = "1.9"

projects[checklistapi][version] = "1.2"

projects[ckeditor][version] = "1.16"

projects[context][version] = "3.6"

projects[date][version] = "2.8"

projects[db_maintenance][version] = "1.2"

projects[delta][version] = "3.0-beta11"

projects[fontyourface][version] = "2.8"

projects[entity][version] = "1.6"

projects[entitycache][version] = "1.2"

projects[entityreference][version] = "1.1"

projects[fb_social][version] = "2.0-beta4"

projects[media][version] = "1.5"

projects[globalredirect][version] = "1.5"

projects[i18n][version] = "1.11"

projects[imagefield_focus][version] = "1.0"

projects[imce][version] = "1.9"

projects[jplayer][version] = "2.0-beta1"

projects[libraries][version] = "2.2"

projects[lightbox2][version] = "1.0-beta1"

projects[link][version] = "1.3"

projects[mailchimp][version] = "2.12"

projects[media_flickr][version] = "1.0-alpha4"

projects[media_vimeo][version] = "2.1"

projects[media_youtube][version] = "3.0"

projects[mediafront][version] = "2.2"

projects[metatags_quick][version] = "2.9"

projects[module_filter][version] = "2.0"

projects[omega_tools][version] = "3.0-rc4"

projects[pathauto][version] = "1.2"

projects[print][version] = "1.3"

projects[qa_checklist][version] = "1.1"

projects[robotstxt][version] = "1.3"

projects[search404][version] = "1.3"

projects[seo_checklist][version] = "4.1"

projects[sharethis][version] = "2.10"

projects[site_verify][version] = "1.1"

projects[soundmanager2][version] = "2.0-beta1"

projects[token][version] = "1.6"

projects[transliteration][version] = "3.2"

projects[variable][version] = "2.5"

projects[views][version] = "3.14"

projects[views_fluid_grid][version] = "3.0"

projects[webform][version] = "3.24"

projects[xmlsitemap][version] = "2.3"

; Themes
projects[adaptivetheme][version] = "2.2"

projects[omega][version] = "3.1"

projects[md_construction][version] = "1.6"

projects[skeletontheme][version] = "1.0"

; Please fill the following out. Type may be one of get, git, bzr or svn,
; and url is the url of the download.
projects[session_expire][download][type] = ""
projects[session_expire][download][url] = ""
projects[session_expire][type] = "module"

; Libraries
; Please fill the following out. Type may be one of get, git, bzr or svn,
; and url is the url of the download.
libraries[mailchimp][download][type] = "get"
libraries[mailchimp][download][url] = "https://apidocs.mailchimp.com/api/downloads/mailchimp-api-class.zip"
libraries[mailchimp][directory_name] = "mailchimp"
libraries[mailchimp][type] = "library"

; Please fill the following out. Type may be one of get, git, bzr or svn,
; and url is the url of the download.
libraries[player][download][type] = "get"
libraries[player][download][url] = "https://github.com/happyworm/jPlayer/archive/2.9.2.tar.gz"
libraries[player][directory_name] = "player"
libraries[player][type] = "library"
