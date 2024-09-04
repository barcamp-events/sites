# BarCamp Omaha 2024 Marketing Site

## Setup

1. Install packages:
    ```bash
    npm install
    ```
1. Generate the static files:
    ```bash
    npm run build
    ```
1. Run the server:
    ```bash
    npm start
    ```

## Adding new content

### Sponsors

1. Add a file in `_data/<en/es>/sponsors/<platinum/gold/silver/bronze/recurring>` and call it `<sponsor-name>.json`.
1. Fill out this template:

    ```json
    {
      "name": "[Full name of sponsor]",
      "link": "[optional link to the sponsor's website]",
      "image": [true/false, indicating if they have a logo],
      "representative": {
        "include": [true/false],
        "name": "[Name of representative]"
      },
      "contribution": "[optional details about how the sponsor helped out]"
    }
    ```

1. If the sponsor has a logo, add it to `images/sponsor-logos` and call it `<sponsor-name>.<png,svg>`. Make sure the file name of the logo is the same as the file name for the liquid file.
