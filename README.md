# Cedric's Website
 
This is my own website to host my resume, project overviews and a blog on my different areas of interest. I wrote using mkdocs and its plugins.
Below is a list of resources that I used to create the website that you can visit under []().

- [MkDocs](https://www.mkdocs.org/getting-started/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
    - [Light/Dark Mode](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)
- [Comment Section - Formspree](https://formspree.io/)
- [RSS Feed - MkDocs Plugin](https://github.com/Guts/mkdocs-rss-plugin)
- [Discussion Section - giscus](https://giscus.app/)

## How You Could Try mkdocs

### Clone the Repository

Clone the repository from [cedricfyc/my-cv-blog](https://github.com/cedricfyc/my-cv-blog/tree/main#)

### Create a Virtual Environment

- If you do not have Python, downlaod and set-up from [Python - Downloads](https://www.python.org/downloads/)

- Go to the directory within the console

```bash
cd path-to-your-project
```

- Create the virtual environment (I used Python 3.12+)

```bash
python -m venv env
```

### Activate the Virtual Environment

Activate the virtual environment (it will contain the dependencies at the given versions).

- For Windows:

```bash
venv\Scripts\activate
```

- For Linux/macOS

```bash
source env/bin/activate
```

### Install the Dependencies

Within the directory of the project, you will find a requirements.txt. Install the dependencies from it.

```bash
pip install -r requirements.txt
```

### Adjust Some .md Files

Following the markdown syntax given at [Markdown Cheatsheet](https://cedricfyc.github.io/my-cv-blog/blog/misc/cheatsheet/), make the adjustments you want to visualise on given pages.

### Serve the Website Locally

Serve to a port on your local network (it's safe).

```bash
mkdocs serve
```
[http://127.0.0.1:8000/](http://127.0.0.1:8000/) is the default url, just follow it and if you set-up everything correctly, the website should now be hosted locally on your local network.
