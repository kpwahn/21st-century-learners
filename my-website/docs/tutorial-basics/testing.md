---
sidebar_position: 6
---

# Hyper Text Markup Language (HTML)

_45 min - Last Updated: August 2023_

## What is HTML

HTML is the World Wide Web's core markup language.

<details>
    <summary>
        What's a markup language?
    </summary>
    A markup language is a computer language that uses tags to define elements within a document. It aims to be human-readable, meaning markup files contain standard words, rather than typical programming syntax.
</details>

<br />

Web browsers parse HTML and use it to structure web pages. But that's not all! HTML documents might be rendered to a screen, or through a speech synthesizer, or on a braille display.

## An Introduction

<br />

HTML documents look a little something like this:

```html
<h1>Apple<h1>
<p>
    Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.
</p>
<a href="www.apple.com/store">Click here to start shopping</a>
```

### Elements

HTML documents consist of elements and text. In the example above we have 3 elements:

1. `h1` - Heading level one
    - This element is used to represent a heading
2. `p` - paragraph
    - This element is used to represent paragraphs
3. `a` - Anchor (aka link)
    - This element is used to represent links

### Nesting

Each element is denoted by a start tag `<p>` and an end tag `</p>`. They may optionally have some text in-between.

Tags have to be nested such that elements are completely within each other, without overlapping:

🙅‍♂️ Incorrect nesting 🙅‍♂️
```html
<p>This is <em>very <strong>wrong</em>!</strong></p>
```

👌 Correct nesting 👌
```html
<p>This <em>is <strong>correct</strong>.</em></p>
```

If we're intentional about how we format our HTML, it becomes pretty easy to make sure everything is nested correctly.

```html
<section>
    <h2>Minecraft Tips and tricks</h2>
    <ul>
        <li>Zombies are your friend</li>
        <li>Wooden swords are goat 🐐</li>
        <li>If you hold ice you can swim in lava</li>
    <ul>
</section>
```

Three new wild elements have appeared! 👀

1. `section` - Section
    - This element is used to represent a section of content
2. `ul` - Unordered List
    - This element is used to represent a list of items
3. `li` - List item
    - This element is used to items of the list. This elements must be nested within the `ul` tags

### Attributes

Elements can have attributes, which control how the elements work. In our first example, we created like this:

```html
<a href="www.apple.com/store">Click here to start shopping</a>
```

Attributes are placed inside the start tag, and consist of a name and a value, separated by a `=` character.

### I'm overwhelmed 😳

As you may suspect, there are [a lot of elements](https://www.w3schools.com/TAGS/default.asp) and attributes!

Luckily, we don't have to memorize it. While we'll become familar with lots of elements, we can always do a quick Google search to find what we're looking for ("how do I make a link again?").

## CSS
The last element we want to talk about is the `style` element.

By adding a `<style></style>` tag to our HTML, we unlock the ability to modify the appearance of our html by using another language called CSS, or Cascading Style Sheets. CSS is programming language that exists to make HTML look pretty 💅.

We write our CSS in between the opening and closing `style` tags. It looks like this:

```
<style>
    p {
        color: red;
    }
</style>
```

The above snippet selects all of our document's paragraphs (`p` elements), and makes the `color` property `red`. You can swap out the element, property, or value to your hearts content. 

Just like with attributes, there are a lot of different CSS selectors, [properties](https://www.w3schools.com/cssref/index.php), and values we can use! But don't worry, no memorization required. 

## Final Prep

On a computer, using a text editor (such as TextEdit or Notepad) create a new file. Copy and paste the following into you editor:

```
<h1>Hello world 👋</h1>
<style>
    h1 {
        color: tomato;
    }
</style>
```

Then save the file as `index.html`. Be sure it has the `.html` file extension instead of `.txt`. Once saved, double click the file from File Explorer/Finder and it will launch the HTML page in a browser! 😯

Cool, but......

**What else could we add to this document??**

As you make changes, refresh the browser to see any changes you made. If you run into any difficulties, no worries! Reach out on slack for help. Don't sweat it if you don't get too far, we'll help solidy understanding in class.

## 💪 Exercise

_1 - 2 hours_

> **Note**
> These exercises are not required before class. However, if you'd like to give them a go please do!

### Project

Create an "About Me" HTML document.

- Your page should contain (as a minimum):
    - An image of you (or one that represents you)
    - A summary of yourself
    - A title (Text that appears in the browser window's tab)
    - 3 external links
    - A list of facts about you
    - A sprinkle of CSS
    - Anything else you want to add -- be creative!