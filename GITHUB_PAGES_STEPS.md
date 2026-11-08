# Publishing the field form on GitHub Pages

**Forestry Commission of Zimbabwe · TREES Registry**
Copyright © 2026 Pomerayi Mutete. All rights reserved.

Eight steps, done once. After that, issuing a new version is two files and a minute.
Nothing here costs anything, and no card is asked for.

---

## 1. Make an account

Go to **github.com** and sign up, using the Commission's own electronic mail address
rather than a personal one. The account outlives whoever sets it up, and an account tied
to a personal address is lost when that officer moves.

## 2. Make a repository

Press **+** at the top right, then **New repository**.

- **Repository name**: `trees-field-capture`
- **Public**. It must be public for the free Pages service. There is nothing confidential
  in these files: no records, no names, no addresses. The officers' entries never leave
  their telephones.
- Leave every tick box clear. Do not add a README; one is already here.
- Press **Create repository**.

## 3. Upload the files

On the page that appears, click **uploading an existing file**.

Open the extracted folder, select **everything inside it**, and drag it into the browser.

One file will not drag, because Windows hides it: **`.nojekyll`**, which has no name
before the dot. In File Explorer, open the **View** menu and tick **Hidden items**, then
drag it in with the rest. Without it GitHub tries to process the files as a website
template and the form does not appear.

Scroll down, press **Commit changes**.

## 4. Turn Pages on

Go to **Settings**, then **Pages** in the left-hand column.

Under **Source**, choose **Deploy from a branch**. Under **Branch**, choose **main** and
the folder **/ (root)**. Press **Save**.

## 5. Wait

Two to five minutes the first time. Refresh the Pages settings page until it shows a
green tick and an address of the form:

    https://<the account name>.github.io/trees-field-capture/

That address is the form. Write it down; it never changes.

## 6. Check it yourself before anyone else sees it

Open the address on your own telephone, outdoors.

- The heading reads **version 5.6 of 8 November 2026**.
- On the Planting tab, press **Read the position from this phone**. It should report an
  accuracy within a few metres. If it refuses, the address is wrong: check it begins
  `https://`.
- Enter a planting that does not matter, close the browser completely, open the address
  again. The planting is still there.
- Then clear it on the Saved tab.

## 7. Give it to the officers

Send the address by WhatsApp or electronic mail. Tell them, in these words:

> Open this address once with a connection. Then press the browser menu, the three dots,
> and choose **Add to Home screen** or **Install app**. Open it from the home screen from
> then on. It works with no connection and no airtime. Do not download the file. Do not
> open it from Downloads.

That last pair of sentences is the whole of the support burden. An officer who opens a
downloaded copy gets no position and sees an empty form, and reports both as faults.

Printing the address as a QR code for the training room saves a good deal of typing.

## 8. Issuing a later version

1. Open `sw.js` in the repository, press the pencil, change
   `trees-field-capture-v5.6` to the new number, commit.
2. Upload the new `index.html` over the old one, commit.

Telephones take it the next time they are opened with a connection. Officers need do
nothing. Ask them to confirm the version line in the heading afterwards.

---

## If something is wrong

**The address shows a list of files instead of the form.** `.nojekyll` was not uploaded,
or `index.html` is inside a folder rather than at the top. Both are fixed by uploading
again.

**404.** Pages has not finished, or the branch was set to something other than `main`.
Wait five minutes, then check Settings, Pages.

**The position is refused on a telephone.** Check the address in the browser bar begins
`https://`. If it begins `content://` or `file://`, the officer downloaded the file
instead of opening the address.

**An officer's work disappeared.** It is held against the address it was entered at. Ask
which address they had open. Work entered in a downloaded copy cannot be recovered from
the published one, which is the reason for step 7.
