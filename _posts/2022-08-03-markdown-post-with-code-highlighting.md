---
layout: post
title: "Markdown post with code highlighting"
date: 2022-09-03 20:37:13 +0600
categories: [couples]
author: "Tortoiz Themes"
post_image: "/assets/images/art/b16.webp"
badge_color: "bg-meander"
meta_title: "Kramdown post with code highlighting"
meta_description: |
  Snowlake Jekyll Theme has Kramdown post with code highlighting
simple_nav: true
permalink: "/posts/post-with-code-highlight"
---

First Level Header - Create a code highlighting block in jekyll
==============================================================

Its Super easy to create a Code Highlighting Block with Snowlake. Rouge Plugin is integrated with the theme.
Following code is an example: close anything between {% raw %} {% highlight ruby %} your code here {% endhighlight %} {% endraw %}

{% highlight ruby %}
def bubble_sort(list)
  return list if list.size <= 1 # already sorted
  swapped = true
  while swapped do
    swapped = false
    0.upto(list.size-2) do |i|
      if list[i] > list[i+1]
        list[i], list[i+1] = list[i+1], list[i] # swap values
        swapped = true
      end
    end
  end

  list
end
{% endhighlight %}

Second Level Header With List
-----------------------------
- Markdown Example for List
- Markdown Example for List

# H1 Heading
h1 Heading for this paragraph
Mttis in eros facilisis mauris vestibulum sed, luctus proin nibh nonummy integer, nullam sit eget cum duis. Et sodales blandit, libero pede suscipit, tincidunt amet ultricies vitae dui tempor 

> #### Blockquote Example 
>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non labore totam tempora sed neque repellat numquam eaque inventore! Iusto saepe ipsum, ex, commodi asperiores iure dolores amet dolorem eos voluptatum, aliquid incidunt non perferendis earum dignissimos quod iste accusantium deleniti.Risus sociis urna elementum ultricies justo quisque, mattis in eros facilisis mauris vestibulum sed, luctus proin nibh nonummy integer, nullam sit eget cum duis. Et sodales blandit, libero pede suscipit, tincidunt amet 

## H2 Heading 
Peleifend hac porta faucibus aliquam eros, massa facilisis, sed pede maecenas porttitor id magnis. Ac sed aliquam in felis amet, adipiscing pede a amet faucibus sit, quis in et ullamcorper vel commodo. Volutpat ut pede sem ipsum non, sapien adipiscing, suspendisse neque, quis dolor donec dolor. Sit voluptatibus, scelerisque in semper lacus nostra, ac integer dolor mauris tempus eget

### H3 Heading
Accumsan augue ullamcorper eros viverra neque, libero est metus libero. Lacinia wisi feugiat tellus neque dui pellentesque, libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit est velit similique laborum, cumque aliquam porro dicta debitis repellat, tempore dignissimos, neque ab fuga voluptatibus. Earum numquam repellat sed perspiciatis ratione explicabo, odit! Repellendus voluptatibus nemo praesentium.

#### H4 Heading
Paugue ullamcorper eros viverra neque, libero est metus libero. Lacinia wisi feugiat tellus neque dui pellentesque, libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit est velit similique laborum, cumque aliquam porro dicta debitis repellat, tempore dignissimos, neque ab fuga voluptatibus. Earum numquam repellat sed perspiciatis ratione explicabo, odit! Repellendus voluptatibus nemo praesentiumaugue ullamcorper eros viverra neque, libero est metus libero. Lacinia wisi feugiat tellus neque dui pellentesque, libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit est velit similique laborum, cumque aliquam porro dicta debitis repellat, tempore dignissimos, neque ab fuga voluptatibus. Earum numquam repellat sed perspiciatis ratione explicabo, odit! Repellendus voluptatibus nemo praesentium.

##### H5 Video Heading 


First level header
==================

Second level header
-------------------

# H1 header

## H2 header

### H3 header

#### H4 header

##### H5 header

###### H6 header

