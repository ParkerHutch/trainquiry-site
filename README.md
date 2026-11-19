# Trainquiry website

Static app, support and privacy page for Trainquiry. It contains public website files only: no native app source, WMATA credentials, analytics or backend service. The widget image shows sample arrivals.

## GitHub Pages

Publish this separate repository using **Settings → Pages → Deploy from a branch → main → / (root)**. The `.nojekyll` file keeps the site buildless. All asset paths are relative so the page works at a project-site URL.

- Expected website: <https://parkerhutch.github.io/trainquiry-site/>
- Privacy policy: <https://parkerhutch.github.io/trainquiry-site/#privacy>
- Support: <mailto:trainquirydc@gmail.com>

The `/#privacy` link expands and scrolls to the policy automatically. Keep the page public so users and Apple reviewers can reach it.

## Local preview

```sh
python3 -m http.server 4371 --bind 127.0.0.1
```

Open <http://127.0.0.1:4371/> or <http://127.0.0.1:4371/#privacy>.

The policy describes the November 18, 2026 app, including Anywhere, Home/Work choices, local location handling, direct WMATA downloads and the phone-fed Watch companion. Update the policy and in-app link together if the data practices or website address change.

## App Store link

Set `appStoreUrl` in `config.js` once the real `https://apps.apple.com/…` listing URL exists. Until then the page displays “Coming to the App Store.” Do not put a developer key or private app configuration in this repository.
