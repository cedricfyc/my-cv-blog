# 📝 Markdown Syntax Cheatsheet

## 📄 Headings
```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

---

## 🔤 Text Formatting
```markdown
**Bold Text**
*Italic Text*
***Bold & Italic***
~~Strikethrough~~
```

---

## 🔗 Links
```markdown
[OpenAI](https://www.openai.com)
```

---

## 🖼️ Images
```markdown
![Alt text](path/to/image.jpg)
![Alt text](path/to/image.jpg "Optional Title")
```

---

## 📋 Lists

### Unordered
```markdown
- Item 1
- Item 2
  - Nested Item
```

### Ordered
```markdown
1. First item
2. Second item
   1. Sub-item
```

---

## 💬 Blockquotes
```markdown
> This is a blockquote.
>> Nested blockquote
```

---

## 💻 Code

### Inline
```markdown
`inline code`
```

### Block
```python
def hello():
    print("Hello, Markdown!")
```

---

## 📊 Tables
```markdown
| Name  | Age | City      |
|-------|-----|-----------|
| John  | 25  | New York  |
| Alice | 30  | London    |
```

---

## ✅ Task Lists
```markdown
- [x] Write Markdown
- [ ] Learn ImageMagick
```

---

## ⚙️ Horizontal Rule
```markdown
---
```

---

## 🔗 URLs & Email
```markdown
<https://www.example.com>
<you@example.com>
```

---

## 🧩 Escaping Characters
```markdown
\*This text is not italicized\*
```

---

## 🧰 Image Resizing Command (Linux)
To resize an image using **ImageMagick**:

```bash
sudo apt install imagemagick
convert assets/thai-red-curry.jpeg -resize 300x200 assets/thai-red-curry-small.jpeg
```
