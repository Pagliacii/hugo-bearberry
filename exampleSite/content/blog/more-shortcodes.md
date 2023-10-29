+++
author = "Hugo Authors"
title = "More Shortcodes"
date = "2023-10-29T17:09:08+08:00"
description = "More custom shortcodes."
tags = [
  "shortcodes",
  "hugo",
]
toc = true
+++

This is a page with more custom shortcodes.

## Alerts

### Note alert

```text
{{</* note >}}
Highlights information that users should take into account, even when skimming.
{{< /note */>}}
```

{{< note >}}
Highlights information that users should take into account, even when skimming.
{{< /note >}}

### Important alert

```text
{{</* important >}}
Crucial information necessary for users to succeed.
{{< /important */>}}
```

{{< important >}}
Crucial information necessary for users to succeed.
{{< /important >}}

### Warning alert

```text
{{</* warning >}}
Critical content demanding immediate user attention due to potential risks.
{{< /warning */>}}
```

{{< warning >}}
Critical content demanding immediate user attention due to potential risks.
{{< /warning >}}

## Details

```text
{{</* details "More details" >}}
> The past is never dead. It's not even past.
>
> -- William Faulkner, Requiem for a Nun
{{< /details */>}}
```

{{< details "More details" >}}

> The past is never dead. It's not even past.
>
> -- William Faulkner, Requiem for a Nun

{{< /details >}}

## Quote

```text
{{</* quote title="Requiem for a Nun" author="William Faulkner" ref="https://www.goodreads.com/work/quotes/2041161" >}}
The past is never dead. It's not even past.
{{< /quote */>}}
```

{{< quote title="Requiem for a Nun" author="William Faulkner" ref="https://www.goodreads.com/work/quotes/2041161" >}}
The past is never dead. It's not even past.
{{< /quote >}}

## @

You can use this shortcode to create a link to a GitHub user or Twitter user. For example, {{< at name=Hugo type=github id=gohugoio >}} and {{< at name="GoHugo.io" type=twitter id=gohugoio >}}.

Here is the code:

```text
{{</* at name=Hugo type=github id=gohugoio */>}}
{{</* at name="GoHugo.io" type=twitter id=gohugoio */>}}
```
