# TREES Field Capture

**Forestry Commission of Zimbabwe · Research and Training Division**
Tree Restoration, Establishment and Ecological Survival

Version 5.6 · 8 November 2026
Copyright © 2026 Pomerayi Mutete. All rights reserved.

---

This is the telephone form officers use in the field. It records plantings, boundary
points, survival assessments and nurseries, writes nothing to any server, and works
with no connection once it has been opened for the first time.

The files here are published as a web page. An officer opens the address once, installs
it from the browser menu, and from then on it opens from the home screen like any other
application, on or off the network.

## Why it is published rather than sent as a file

Two field problems disappear the moment the form has a web address, and neither can be
solved by sending the file itself.

**A telephone will not give a position to a downloaded file.** Browsers only release the
satellite receiver to a page served over `https`. A file opened from Downloads has an
address beginning `content://` or `file://`, and every attempt to read a position is
refused, with no useful message. Published here, the address begins `https://` and the
receiver works.

**A downloaded file loses the officer's work.** The browser keeps entries against the
address the page was opened from. Each download produces a new address, so an officer who
downloads the form again, or opens yesterday's copy, finds an empty form and assumes the
work was lost. It was not lost; it is held against an address nobody can return to. A
published address never changes, so the work is always there.

## What is here

| File | What it is |
|---|---|
| `index.html` | the form itself, the whole application |
| `manifest.json` | what the telephone needs to install it to the home screen |
| `sw.js` | makes it open with no connection |
| `icon-192.png`, `icon-512.png`, `icon-maskable.png` | the home screen icon |
| `.nojekyll` | stops GitHub processing the files before serving them |
| `GITHUB_PAGES_STEPS.md` | how to publish this, eight steps |

## Issuing a new version

Replacing `index.html` is not enough. Every telephone holds its own copy and will keep
serving it, and nobody notices for a season.

1. Edit `sw.js` and change the version in the line near the top:

       var CACHE = "trees-field-capture-v5.6";

   to `v5.7`, or whatever the new number is.

2. Upload the new `index.html` **and** the changed `sw.js` together.

Telephones then take the new copy the next time they are opened with a connection. The
version shown in the form's own heading is how an officer confirms which copy they hold,
and it is worth asking for that line at the start of any support call.

## Where the officers' work is kept

On the telephone, in the browser's own storage, against this address. It is not sent
anywhere. Nothing reaches the registry until the officer exports a CSV on the Saved tab
and that file is loaded on the registry's Field data page. The form says so on the Saved
tab, above the button that clears the telephone.

## Enquiries

Through the Provincial Forestry Extension Manager.
