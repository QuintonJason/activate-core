---
title: About Activate Core
layout: layouts/index.njk
---
<article class="container index-intro">
  <div class="padding-right-dt index-intro__header">
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
    {%- for item in pastEvents.entries -%}
      <li class="past-events__list-item">
        <a href="{{ item.link }}" class="past-events__event" aria-label="{{  item.title  }}">
          <img class="past-events__image" src="{{ item.image }}" alt="{{ item.altText }}">
          <p class="t-body past-events__description">{{ item.description }}</p>
        </a>
    </li>
    {%- endfor -%}
    {{ events }}
  </ul>
</article>

<!-- PAST SPONSORS -->
<article class="container past-sponsors">
  <h3 class="t-display past-sponsors__title">Past Sponsors & Partners</h3>
  <ul class="past-sponsors__list">
    {%- for item in pastSponsors.entries -%}
      <li>
        <img src="{{ item.image }}" alt="{{ item.altText }}">
      </li>
    {%- endfor -%}
  </ul>
</article>
