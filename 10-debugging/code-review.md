## Code Review Exercise

### Issue #1: Incorrect More Info button

The "More Info" controls are written as `<a>` tags without an `href`. This is an issue because links should be used for navigation, while buttons should be used for actions such as opening a popup. Using an anchor tag without an `href` is also not ideal for accessibility.

Initial code:

```html
<a class="more-info-button">More Info</a>
```

Updated code:

```html
<button type="button" class="more-info-button">More Info</button>
```

### Issue #2: Empty Buttons

Using WAVE, it reports empty buttons. These buttons are missing an aria-label and title. This is an accessibility issue because screen readers may not know what action the button performs.

Initial code:

```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

Updated code:

```html
<button
  class="close-popup-button"
  aria-label="close popup window"
  title="close popup window"
>
  <i class="fa-solid fa-xmark"></i>
</button>
```

### Issue #3: Heading Hierarchy

The page uses multiple top-level h1 headings instead of a clear heading hierarchy. Since “Scottish Fold” is the main page heading, the other major section headings should be h2 elements. This improves semantic structure and accessibility because assistive technologies rely on heading levels to understand page organization.

Initial code:

```html
<h1>Introduction</h1>
<h1 class="clear-margin-bottom">History</h1>
<h2 class="clear-margin-top">Origin</h2>
<h2 class="clear-margin-top">Acceptance</h2>
<h2 class="clear-margin-top">Popularity</h2>
<h1>Characteristics</h1>
<h2>Ears</h2>
<h2>Body</h2>
<h2>Coat</h2>
<h2>Temperament</h2>
<h2>Habits</h2>
<h1>Cat Facts</h1>
<h1>Tell us what you want to learn more</h1>
```

Updated code:

```html
<h2>Introduction</h2>
<h2 class="clear-margin-bottom">History</h2>
<h3 class="clear-margin-top">Origin</h3>
<h3 class="clear-margin-top">Acceptance</h3>
<h3 class="clear-margin-top">Popularity</h3>
<h2>Characteristics</h2>
<h3>Ears</h3>
<h3>Body</h3>
<h3>Coat</h3>
<h3>Temperament</h3>
<h3>Habits</h3>
<h2>Cat Facts</h2>
<h2>Tell us what you want to learn more</h2>
```

### Issue #4: Cat Facts is not using list

The page uses multiple top-level h1 headings instead of a clear heading hierarchy. Since “Scottish Fold” is the main page heading, the other major section headings should be h2 elements. This improves semantic structure and accessibility because assistive technologies rely on heading levels to understand page organization.

Initial code:

```html
<h2>Cat Facts</h2>
<div>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>They all have one common ancestor: Susie
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>The fold is due to a mutation
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>They're born with straight ears
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>Scottish folds are never bred together
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>There are three degrees of folds
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>They sit like humans
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>They need a gentle touch
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>They're the only folded-ear cats that can
    show
  </p>
  <p class="cat-fact-list-item">
    <span class="bullet-point"></span>They're T-Swift approved
  </p>
</div>
```

Updated code:

```html
<h2>Cat Facts</h2>
<ul class="cat-fact-list">
  <li>They all have one common ancestor: Susie</li>
  <li>The fold is due to a mutation</li>
  <li>They're born with straight ears</li>
  <li>Scottish folds are never bred together</li>
  <li>There are three degrees of folds</li>
  <li>They sit like humans</li>
  <li>They need a gentle touch</li>
  <li>They're the only folded-ear cats that can show</li>
  <li>They're T-Swift approved</li>
</ul>
Removed in style.css .cat-fact-list-item { display: flex; align-items: center; }
.bullet-point { display: block; background-color: black; height: 6px; width:
6px; border-radius: 50%; margin-right: 10px; margin-left: 2em; } Added
.cat-fact-list { padding-left: 2rem; }
```
