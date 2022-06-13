# BarCamp Denver 2022 Marketing Site

## Setup

1. Install packages:
    ```bash
    yarn
    ```
1. Generate the static files:
    ```bash
    yarn build
    ```
1. Run the server:
    ```bash
    yarn start
    ```

## Adding new content

### Sponsors

1. Add a file in the `sponsors` directory and call it `<sponsor-name>.liquid`.
1. Fill out this template:

    ```liquid
    ---
    name: [Full name of sponsor]
    tags: sponsor, [level: either platinum, gold, silver, bronze, or carbon]
    logo: [type of logo: svg or png. Or if this sponsor doesn't have a logo, delete this line.]
    logo_width: [required for png logos]
    logo_height: [required for png logos]
    link: [optional link to the sponsor's website]
    contribution: [optional details about how the sponsor helped out]
    permalink: false
    ---
    ```

    `permalink: false` ensures that Eleventy will not make a page for this file, but we can still use the data throughout our templates (in this case, we're looping through the sponsors on the home page).

1. If the sponsor has a logo, add it to `images/sponsor-logos` and call it `<sponsor-name>.<png,svg>`. Make sure the file name of the logo is the same as the file name for the liquid file.
    1. If you're adding an SVG logo, add its title attribute in `images/svg-sprite/meta.yaml` so it is given a proper title attribute when we generate our SVG sprites.
    1. Currently there isn't any default styling for sponsor logos in regards to size because it's difficult to make them _appear_ to be the same size within their group with one universal rule, so add styles to make it look visually nice with other logos in its level by adding styles for the class `sponsor--<sponsor-name>` in `assets/scss/components/_sponsor.scss`.
