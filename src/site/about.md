---
title: Activate 2019
layout: layouts/event.njk
subtitle: Description text for Activate 20129
---

<!-- EVENT HEADER -->
<div class="container event__header">
  <h2 class="t-banner event__name">Activate 2019</h2>
  <div class="event__info">
    <p class="t-body event__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper. Vestibulum fringilla est placerat, mattis erat a, condimentum enim. Morbi quis metus ac magna dignissim auctor. Nullam quis vulputate massa. Curabitur eget lectus sagittis, sagittis quam sed, ullamcorper tortor. Integer eu fringilla felis.</p>
    <div class="event__details">
      <p class="t-subhead event__date">Date <datetime>some time</datetime></p>
      <p class="t-subhead event__location">Location some location</p>
      <div class="event__header-buttons">
        <a href="#0" class="button event__header-button">Event Photos</a>
        <a href="#0" class="button event__header-button">Event Videos</a>
      </div>
    </div>
  </div>
</div>


<div class="container event__type">
  <h2 class="t-display event__type-title">Workshops</h2>
  <h3 class="t-section-title event__track">Student Track</h3>

  <!-- TALKS -->
  <div class="talks">
    {%- for item in talks.entries -%}
      <div class="talk">
        <div class="talk__meta">
          <div class="talk__image-container">
            <img class="talk__image" src="{{ item.image }}" alt="{{ item.altText }}"/>
          </div>
          <div class="talk__details">
            <p class="t-subhead talk__speaker-name">{{ item.speaker }}</p>
            <p class="t-body talk__speaker-info">{{ item.speakerTitle }}, {{ item.speakerCompany }}</p>
            <p class="t-subhead talk__talk-title">{{ item.talkTitle }}</p>
            <a class="t-subhead talk__slides-link" href="{{ item.link }}">Slides</a>
          </div>
        </div>
        <p class="t-body talk__description">{{ item.description }}</p>
      </div>
    {%- endfor -%}
  </div>
</div>

<section class="container">
  <div class="hackathon__wrapper">
    <div class="hackathon__info">
      <h2 class="t-display  hackathon__headline">Hackathon</h2>
      <p class="t-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium magna ac iaculis luctus. Vivamus tristique eleifend felis. Ut ut lorem id leo dapibus semper. Vestibulum fringilla est placerat, mattis erat a, condimentum enim. Morbi quis metus ac magna dignissim auctor. Nullam quis vulputate massa. Curabitur eget lectus sagittis, sagittis quam sed, ullamcorper tortor. Integer eu fringilla felis.</p>
    </div>
    <div class="hackathon__teams">
      <h3 class="t-section-title hackathon__teams-headline">Teams</h3>
      <ul class="hackathon-teams__list">
        <!-- TODO rework to not have repetitive link name in VO -->
        {%- for item in teams.entries -%}
          <li class="hackathon-teams__list-item">
            <p class="t-subhead hackathon-teams__name">{{ item.teamName}}{% if item.isWinner == true %} - Winner{% endif %}</p>
            <a href="{{ item.repoLink }}" class="t-subhead hackathon-teams__link" href="#0">Repo</a>
          </li>
        {%- endfor -%}
      </ul>
    </div>
  </div>
</section>

<section class="container">
  <h2 class="t-display sponsor__headline">Sponsors</h2>
  <ul class="sponsor__grid sponsor__grid--main">
    {%- for item in pastSponsors.entries.slice(0,4) -%}
      <li>
        <img class="sponsor__image" src="{{ item.image }}" alt="1{{ item.altText }}"/>
      </li>
    {%- endfor -%}
  </ul>
  <h3 class="t-display sponsor__headline">In-Kind Sponsors</h3>
  <ul class="sponsor__grid sponsor__grid--community">
    {%- for item in pastSponsors.entries.slice(0,5) -%}
      <li>
        <img class="sponsor__image" src="{{ item.image }}" alt="1{{ item.altText }}"/>
      </li>
    {%- endfor -%}
  </ul>
  <h3 class="t-display sponsor__headline">Community Sponsors</h3>
  <ul class="sponsor__grid sponsor__grid--community">
    {%- for item in pastSponsors.entries.slice(0,6) -%}
      <li>
        <img class="sponsor__image" src="{{ item.image }}" alt="1{{ item.altText }}"/>
      </li>
    {%- endfor -%}
  </ul>
  <h3 class="t-display sponsor__headline">Partners</h3>
  <ul class="sponsor__grid sponsor__grid--partners">
    {%- for item in pastSponsors.entries.slice(0,8) -%}
      <li>
        <img class="sponsor__image" src="{{ item.image }}" alt="1{{ item.altText }}"/>
      </li>
    {%- endfor -%}
  </ul>
</section>
