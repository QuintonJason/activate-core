---
title: About Activate Core
layout: layouts/base.njk
---
<div>
  <div>
    <h2 class="t-banner">About Activate Blurb</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper. Vestibulum fringilla est placerat, mattis erat a, condimentum enim. Morbi quis metus ac magna dignissim auctor. Nullam quis vulputate massa. Curabitur eget lectus sagittis, sagittis quam sed, ullamcorper tortor. Integer eu fringilla felis.</p>
  </div>

  <div>
    <h3>Next Event</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
  </div>
</div>

<div>
  <h3 class="t-display">Past Events</h3>
  <div>
    <a>
      <img src="" alt="test image">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
    </a>
    <a>
      <img src="" alt="test image">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
    </a>
    <a>
      <img src="" alt="test image">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
    </a>
    <a>
      <img src="" alt="test image">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
    </a>
  </div>
</div>

<div>
  <h3>Past Sponsors & Partners</h3>
  <div>
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
    <img src="" alt="test image">
  </div>

## Post pages

The pages found in in the posts

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>

## Links from an external data source

These links were sourced from [hawksworx.com](https://www.hawksworx.com/feed.json) at build time.

<ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
{%- endfor -%}
</ul>





