from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()


@app.get("/", response_class=HTMLResponse, include_in_schema=False)
def root_response():
    introduction_Page = "./web_pages/Introduction.html" 
    try:
        with open(introduction_Page, "r") as file:
            html_content = file.read()
        return html_content
    except FileNotFoundError:
        return HTMLResponse(status_code=404)

