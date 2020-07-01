---
title: About Activate Core
layout: layouts/index.njk
---
<article class="container index-intro">
  <div class="index-intro__header">
    <h2 class="t-banner index-intro__headline">About Activate Blurb</h2>
    <p class="t-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper. Vestibulum fringilla est placerat, mattis erat a, condimentum enim. Morbi quis metus ac magna dignissim auctor. Nullam quis vulputate massa. Curabitur eget lectus sagittis, sagittis quam sed, ullamcorper tortor. Integer eu fringilla felis.</p>
  </div>

  <div class="index-intro__event">
    <h3 class="t-display index-intro__event-title">Next Event</h3>
    <img class="index-intro__event-image" src="" alt="event image" />
    <p class="t-body index-intro__event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
  </div>
</article>

<!-- PAST EVENTS -->
<article class="container past-events">
  <h3 class="t-display past-events__title">Past Events</h3>

  <ul class="past-events__list">
    {%- for item in pastEvents.entries.slice(0,5) -%}
      <li>
        <a href="{{ item.link }}">{{ item.title }}</a>
      </li>
    {%- endfor -%}
    <li class="past-events__list-item">
      <a class="past-events__event">
        <img class="past-events__image" src="" alt="test image">
        <p class="t-body past-events__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
      </a>
    </li>
    <li class="past-events__list-item">
      <a class="past-events__event">
        <img class="past-events__image" src="" alt="test image">
        <p class="t-body past-events__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
      </a>
    </li>
    <li class="past-events__list-item">
      <a class="past-events__event">
        <img class="past-events__image" src="" alt="test image">
        <p class="t-body past-events__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
      </a>
    </li>
    <li class="past-events__list-item">
      <a class="past-events__event">
        <img class="past-events__image" src="" alt="test image">
        <p class="t-body past-events__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper.</p>
      </a>
    </li>
  </ul>
</article>

<!-- PAST SPONSORS -->
<article class="container past-sponsors">
  <h3 class="t-display past-sponsors__title">Past Sponsors & Partners</h3>
  <ul class="past-sponsors__list">
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>
    <li>
      <img src="" alt="test image">
    </li>

  </ul>
</article>

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





