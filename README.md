## Header

Header folder consists of 8 variations of Page Header with Titles

### bg_color: 
this variable when defined on page will change the color of header (page title bckground)
it can take values as follows 
    bg-default
    bg-dark
    bg-gray
    bg-white
    bg-red
	bg-orange
	bg-yellow
	bg-green
	bg-leaf
	bg-teal
	bg-aqua
	bg-meander
	bg-blue
	bg-cobalt
	bg-sky
	bg-purple
	bg-violet
	bg-pink
	bg-rose
	bg-hibiscus
	bg-brown

## Nav

Nav folder consists of 11 variations of Navigation 

## Footer

Footer folder consists of 8 variations of Footer 

## Blogs

The main blogs directory holds the design to blog pages and there are 8 variations of them

### header_image : 
this variable can be used to define a page title image. You can insert the path to your image in this variable.

### post_format:  
its a variable used in blog pages frontmatter to define which post type you wanna use

post_format can take the following values -- general , gallery, carousel , video

## Breadcrumbs
Usage
-----

To render the breadcrumbs for the current page:

    {% include breadcrumbs.html %}

To render the breadcrumbs for another page:

    {% include breadcrumbs.html page=another_page %}

To render breadcrumbs with the home page and date omitted (see [Options](#options) below
for more options):

    {% include breadcrumbs.html omit_home=true omit_date=true %}

Options
-------

omit_home
: Don't include the home page as the first breadcrumb.

omit_collection
: Don't include the page's collection ("posts" by default, for posts) in the breadcrumbs.

omit_categories
: Don't include the page's categories in the breadcrumbs.

omit_date
: Don't include the post's date (year, month and day) in the breadcrumbs.

omit_year
: Don't include the post's year in the breadcrumbs.

omit_month
: Don't include the post's month in the breadcrumbs.

omit_date
: Don't include the post's date in the breadcrumbs.