# Markdown

## Overview

The following is derived from the [Markdown Guide &ndash; Basic Syntax](https://www.markdownguide.org/basic-syntax/) page of the [Markdown Guide](https://www.markdownguide.org). Thank you John for the original work and thank you Matt for such an excellent guide.

John Gruber's original [Markdown design](https://daringfireball.net/projects/markdown/) is supported by almost all markdown processors. [CommonMark](https://commonmark.org/) and [Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) are two commonly used variants. Minor variations and discrepancies between Markdown processors are noted inline wherever possible.

## Headings

### ATX Style

To create a heading, add number signs (`#`) in front of a word or phrase. The number of number signs corresponds to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| `# Heading level 1` | `<h1>Heading level 1</h1>` | <h1>Heading level 1</h1> |
| `## Heading level 2` | `<h2>Heading level 2</h2>` | <h2>Heading level 2</h2> |
| `### Heading level 3` | `<h3>Heading level 3</h3>` | <h3>Heading level 3</h3> |
| `#### Heading level 4` | `<h4>Heading level 4</h4>` | <h4>Heading level 4</h4> |
| `##### Heading level 5` | `<h5>Heading level 5</h5>` | <h5>Heading level 5</h5> |
| `###### Heading level 6` | `<h6>Heading level 6</h6>` | <h6>Heading level 6</h6> |

### Underlining Style

Alternatively, on the line below the text, add any number of `==` characters for
heading level 1 or `--` characters for heading level 2.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| <pre>Heading level 1<br>===============</pre> | `<h1>Heading level 1</h1>` | <h1>Heading level 1</h1> |
| <pre>Heading level 2<br>---------------</pre> | `<h2>Heading level 2</h2>` | <h2>Heading level 2</h2> |

### Heading Best Practices

Markdown applications don’t agree on how to handle missing space between the number signs (#) and the heading name. For compatibility, always put a space between the number signs and the heading name.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| `# Here's the heading` | `#Here's a heading` |

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| <pre>I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on.</pre> | `<p>I really like using Markdown</p><p>I think I'll use it to format all of my documents from now on.</p>` | <p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p> |

### Paragraph Best Practices

Don’t indent paragraphs with spaces or tabs.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| <pre>Don't put tabs or spaces in front of your paragraphs.<br><br>Keep lines left-aligned like this.</pre> | <pre>  This can result in unexpected formatting problems.<br><br>  Don't add tabs or spaces in front of paragraphs.</pre> |

## Line Breaks

To create a line break (`<br>`), end a line with two or more spaces, and then type return.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| <pre>This is the first line.  <br>And this is the second line.</pre> | `<p>This is the first line.<br>And this is the second line.</p>` | This is the first line.<br>And this is the second line. |

### Line Break Best Practices

You can use two or more spaces (referred to as “trailing whitespace”) for line breaks in nearly every Markdown application, but it’s controversial. It’s hard to see trailing whitespace in an editor, and many people accidentally or intentionally put two spaces after every sentence. For this reason, you may want to use something other than trailing whitespace for line breaks. Fortunately, there is another option supported by nearly every Markdown application: the `<br>` HTML tag.

For compatibility, use trailing white space or the `<br>` HTML tag at the end of the line.

There are two other options I don’t recommend using. CommonMark and a few other lightweight markup languages let you type a backslash (`\`) at the end of the line, but not all Markdown applications support this, so it isn’t a great option from a compatibility perspective. And at least a couple lightweight markup languages don’t require anything at the end of the line — just type return and they’ll create a line break.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| <pre>First line with two spaces after.  <br>And the next line.<br><br>First line with the HTML tag after.<br>And the next line.</pre> | <pre>First line with a backslash after.\\<br>And the next line.<br><br>First line with nothing after.<br>And the next line.</pre> |

## Emphasis

You can add emphasis by making text bold or italic.

### Bold

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| `I just love **bold text**.` | `I just love <strong>bold text</strong>.` | I just love **bold text**. |
| `I just love __bold text__.` | `I just love <strong>bold text</strong>.` | I just love __bold text__. |
| `Love**is**bold`             | `Love<strong>is</strong>bold` | Love**is**bold             |

#### Bold Best Practices

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold the middle of a word for emphasis.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| `Love**is**bold` | `Love__is__bold` |

### Italic

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| `Italicized text is the *cat's meow*.` | `Italicized text is the <em>cat's meow</em>.` | Italicized text is the *cat’s meow*. |
| `Italicized text is the _cat's meow_.` | `Italicized text is the <em>cat's meow</em>.` | Italicized text is the *cat’s meow*. |
| `A*cat*meow` | `A<em>cat</em>meow` | A*cat*meow |

#### Italic Best Practices

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to italicize the middle of a word for emphasis.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| `A*cat*meow` | `A_cat_meow` |

### Bold and Italic

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| `This text is ***really important***.` | `This text is <strong><em>really important</em></strong>.` | This text is ***really important***. |
| `This text is ___really important___.` | `This text is <strong><em>really important</em></strong>.` | This text is ___really important___. |
| `This text is __*really important*__.` | `This text is <strong><em>really important</em></strong>.` | This text is __*really important*__. |
| `This text is **_really important_**.` | `This text is <strong><em>really important</em></strong>.` | This text is **_really important_**. |
| `This is really***very***important text.` | `This is really<strong><em>very</em></strong>important text.` | This is really***very***important text. |

#### Bold and Italic Best Practices

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold and italicize the middle of a word for emphasis.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| `This is really***very***important text.` | `This is really___very___important text.` |

## Blockquotes

To create a blockquote, add a `>` in front of a paragraph.

<div class="code">

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```

</div>

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

### Blockquotes with Multiple Paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

<div class="code">

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

</div>

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Nested Blockquotes

Blockquotes can be nested. Add a `>>` in front of the paragraph you want to nest.

<div class="code">

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

</div>

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquotes with Other Elements

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

<div class="code">

```markdown
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

</div>

The rendered output looks like this:

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going according to **plan**.

## Lists

You can organize items into ordered and unordered lists.

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| <pre>1. First item<br>2. Second item<br>3. Third item<br>4. Fourth item</pre> | `<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>` | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| <pre>1. First item<br>1. Second item<br>1. Third item<br>1. Fourth item</pre> | `<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>` | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| <pre>1. First item<br>8. Second item<br>3. Third item<br>5. Fourth item</pre>  | `<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>` | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| <pre>1. First item<br>2. Second item<br>3. Third item<br>    1. Indented item<br>    2. Indented item<br>4. Fourth item` | `<ol><li>First item</li><li>Second item</li><li>Third item<ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol>` | <ol><li>First item</li><li>Second item</li><li>Third item<ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol> |

### Unordered Lists

To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. Indent one or more items to create a nested list.

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| <pre>- First item<br>- Second item<br>- Third item<br>- Fourth item</pre> | `<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>` | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| <pre>* First item<br>* Second item<br>* Third item<br>* Fourth item</pre> | `<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>` | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| <pre>+ First item<br>* Second item<br>- Third item<br>+ Fourth item</pre> | `<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>` | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| <pre>- First item<br>- Second item<br>- Third item<br>    - Indented item<br>    - Indented item<br>- Fourth item</pre> | `<ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul>` | <ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul>  |

### Adding Elements in Lists

To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following examples.

#### Paragraphs

<div class="code">

```markdown
* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.
```

</div>

The rendered output looks like this:

- This is the first list item.

- Here’s the second list item.

  I need to add another paragraph below the second list item.

- And here’s the third list item.

#### Blockquotes

<div class="code">

```markdown
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.
```

</div>

The rendered output looks like this:

- This is the first list item.

- Here’s the second list item.

  > A blockquote would look great below the second list item.

- And here’s the third list item.

#### Code Blocks

[Code blocks](https://www.markdownguide.org/basic-syntax/#code-blocks) are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

<div class="code">

```markdown
1.  Open the file.
1.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

1.  Update the title to match the name of your website.
```

</div>

The rendered output looks like this:

1. Open the file.

1. Find the following code block on line 21:

    <div class="code">
        
        <html>
            <head>
                <title>Test</title>
            </head>
    </div>

1. Update the title to match the name of your website.


#### Images

<div class="code">

```markdown
1.  Open the file containing the Linux mascot.
1.  Marvel at its beauty.

    ![Tux, the Linux mascot](/assets/images/tux.png)

1.  Close the file.
```

</div>

The rendered output looks like this:

1. Open the file containing the Linux mascot.

1. Marvel at its beauty.

   ![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)

1. Close the file.

## Code

To denote a word or phrase as code, enclose it in backticks (\`).

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| <pre>At the command prompt, type \`nano\`.</pre> | `At the command prompt, type <code>nano</code>.` | At the command prompt, type `nano`. |

### Escaping Backticks

If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (````).

| Markdown | HTML | Rendered Output |
| --- | --- | --- |
| `Use ``code`` in your Markdown file.` | `<code>Use ``code`` in your Markdown file.</code> | Use `code` in your Markdown file. |

### Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

<div class="code">

```html
    <html>
      <head>
      </head>
    </html>
```

</div>

The rendered output looks like this:

<div = class="code">

    <html>
      <head>
      </head>
    </html>

</div>

 **Note:** To create code blocks without indenting lines, use [fenced code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks).

## Horizontal Rules

To create a horizontal rule, use three or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

<div class="code">

```markdown
***

---

___
```

</div>

The rendered output of all three looks identical:

***

---

___

### Horizontal Rule Best Practices

For compatibility, put blank lines before and after horizontal rules.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| <pre>Try to put a blank line before...<br><br>---<br><br>...and after a horizontal rule.</pre> | <pre>Without blank lines, this would be a heading.<br>---<br>Don't do this!</pre> |

## Links

To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).


`My favorite search engine is [Duck Duck Go](https://duckduckgo.com).`


The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com/).

### Adding Titles

You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL.

<div class="code">

```markdown
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
```

</div>

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com/ "The best search engine for privacy").

### URLs and Email Addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.

<div class="code">

```markdown
<https://www.markdownguide.org>
<fake@example.com>
```

</div>

The rendered output looks like this:

<https://www.markdownguide.org/>
<fake@example.com>

### Formatting Links

To [emphasize](https://www.markdownguide.org/basic-syntax/#emphasis) links, add asterisks before and after the brackets and parentheses. To denote links as [code](https://www.markdownguide.org/basic-syntax/#code), add backticks in the brackets.

<div class="code">

```markdown
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```

</div>

The rendered output looks like this:

I love supporting the **[EFF](https://eff.org/)**.
This is the *[Markdown Guide](https://www.markdownguide.org/)*.
See the section on [`code`](#code).

### Reference-style Links

Reference-style links are a special kind of link that make URLs easier to display and read in Markdown. Reference-style links are constructed in two parts: the part you keep inline with your text and the part you store somewhere else in the file to keep the text easy to read.

#### Formatting the First Part of the Link

The first part of a reference-style link is formatted with two sets of brackets. The first set of brackets surrounds the text that should appear linked. The second set of brackets displays a label used to point to the link you’re storing elsewhere in your document.

Although not required, you can include a space between the first and second set of brackets. The label in the second set of brackets is not case sensitive and can include letters, numbers, spaces, or punctuation.

This means the following example formats are roughly equivalent for the first part of the link:

- `[hobbit-hole][1]`
- `[hobbit-hole] [1]`

#### Formatting the Second Part of the Link

The second part of a reference-style link is formatted with the following attributes:

1. The label, in brackets, followed immediately by a colon and at least one space (e.g., `[label]: `).
2. The URL for the link, which you can optionally enclose in angle brackets.
3. The optional title for the link, which you can enclose in double quotes, single quotes, or parentheses.

This means the following example formats are all roughly equivalent for the second part of the link:

- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle`
- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"`
- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'`
- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)`
- `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"`
- `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'`
- `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)`

You can place this second part of the link anywhere in your Markdown document. Some people place them immediately after the paragraph in which they appear while other people place them at the end of the document (like endnotes or footnotes).

#### An Example Putting the Parts Together

Say you add a URL as a [standard URL link](https://www.markdownguide.org/basic-syntax/#links) to a paragraph and it looks like this in Markdown:

<div class="code">

```markdown
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.
```

</div>

Though it may point to interesting additional information, the URL as displayed really doesn’t add much to the existing raw text other than making it harder to read. To fix that, you could format the URL like this instead:

<div class="code">

```markdown
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
```

</div>

In both instances above, the rendered output would be identical:

> In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

and the HTML for the link would be:

<div class="code">

```html
<a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>
```

</div>

### Link Best Practices

Markdown applications don’t agree on how to handle spaces in the middle of a URL. For compatibility, try to URL encode any spaces with `%20`.

| ✅ Do this | ❌ Don't do this |
| --- | --- |
| `[link](https://www.example.com/my%20great%20page)` | `[link](https://www.example.com/my great page)` |

## Images

To add an image, add an exclamation mark (`!`), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

<div class="code">

```markdown
![Philadelphia's Magic Gardens. This place was so cool!](/assets/images/philly-magic-gardens.jpg "Philadelphia's Magic Gardens")
```

</div>

The rendered output looks like this:

![Philadelphia's Magic Gardens. This place was so cool!](https://d33wubrfki0l68.cloudfront.net/eab45e25bb79970178fab7a2d10cba0209372a59/94d9e/assets/images/philly-magic-garden.jpg)

### Linking Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

<div class="code">

```markdown
[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
```

</div>

The rendered output looks like this:

[![An old rock in the desert](https://d33wubrfki0l68.cloudfront.net/70a143fdf134aacde3740662a2a47a2a1ee0d216/276c9/assets/images/shiprock.jpg)](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

## Escaping Characters

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (`\`) in front of the character.

<div class="code">

```markdown
\* Without the backslash, this would be a bullet in an unordered list.
```

</div>

The rendered output looks like this:

\* Without the backslash, this would be a bullet in an unordered list.

### Characters You Can Escape

You can use a backslash to escape the following characters.

| Character | Name |
| --- | --- |
| \ | backslash |
| ` | backtick (see also [escaping backticks in code](https://www.markdownguide.org/basic-syntax/#escaping-backticks)) |
| * | asterisk |
| _ | underscore |
| { } | curly braces |
| [ ] | brackets |
| ( ) | parentheses |
| # | pound sign |
| + | plus sign |
| - | minus sign (hyphen) |
| . | dot |
| ! | exclamation mark |
| \| | pipe (see also [escaping pipe in tables](https://www.markdownguide.org/extended-syntax/#escaping-pipe-characters-in-tables)) |

## HTML

Many Markdown applications allow you to use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the color of text or changing the width of an image.

To use HTML, place the tags in the text of your Markdown-formatted file.

<div class="code">

```
This **word** is bold. This <em>word</em> is italic.
```

</div>

The rendered output looks like this:

This **word** is bold. This <em>word</em> is italic.

### HTML Best Practices
For security reasons, not all Markdown applications support HTML in Markdown documents. When in doubt, check your Markdown application’s documentation. Some applications support only a subset of HTML tags.

Use blank lines to separate block-level HTML elements like `<div>`, `<table>`, `<pre>`, and `<p>` from the surrounding content. Try not to indent the tags with tabs or spaces — that can interfere with the formatting.

You can’t use Markdown syntax inside block-level HTML tags. For example, `<p>italic and **bold**</p>` won’t work.
