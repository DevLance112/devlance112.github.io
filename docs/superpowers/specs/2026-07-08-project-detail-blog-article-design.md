# Project Detail Blog Article Design

## Goal

Project detail pages should read like continuous blog articles instead of summary-heavy case study pages. The user selected the continuous editorial article direction: keep the project hero, then move into one uninterrupted article flow where images appear between text sections.

## Current Problem

The current `/projects/:slug` page still feels segmented. It uses an opening brief, reading rail, contribution and outcome cards, chapter blocks, field-note cards, and tag modules. Even though the page uses journal language, the structure makes the content feel like grouped summaries and bullet-point separations.

## Approved Direction

Use a continuous article layout:

- Keep the hero as the entry point for title, summary, project image, and metadata.
- Replace the case-study module stack with a single blog-style article column.
- Present the project story as intro prose followed by section headings and paragraphs.
- Place project images between text sections using the same image position rhythm across all project pages.
- Move highlights and tags to a quiet closing section after the article so they do not interrupt the story.
- Remove card grids and bullet-style content from the main article flow.

## Content Model

The implementation should reuse the existing `projectData.js` fields. The first article section will use `challenge`, `summary`, `contribution`, and `outcome` as paragraph prose. The remaining article sections will come from `project.analysis`, with each analysis item becoming a heading plus paragraph text.

Images should be assigned consistently:

- The hero uses the first available project image.
- The article lead figure uses the second image when available, otherwise the first image.
- Each analysis section receives the next available image in order.
- If a project has fewer images than sections, figures repeat the available article images in order so the text-image rhythm stays consistent.

## Visual Structure

The article should feel calmer and more readable than the current case-study page:

- Main content width should be optimized for long-form reading.
- Headings should be strong but smaller than hero-scale type.
- Paragraphs should have generous line height and comfortable measure.
- Images should sit between text blocks as full-width editorial figures with captions.
- The table of contents / reading rail should be removed so the page reads as an uninterrupted article.

## Components

`ProjectDetail` remains the route component. It should be refactored so the article body is rendered from a simple ordered structure rather than separate card grids. Existing related-work and footer sections can stay.

Expected component responsibilities:

- Build article sections from existing project fields.
- Render article prose in order.
- Render image figures after consistent text positions.
- Render a quiet article footer for highlights and tags.
- Keep related projects after the article.

## Testing

Run the production build after implementation. If a local preview is started, visually check at least one project page on desktop and mobile-width viewports to confirm the page reads as continuous prose, images appear between text sections, and no text overlaps.
