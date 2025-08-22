
这是一个展示更多自定义短代码的页面。

## 警告框

### 注意警告

```text
{{</* note >}}
突出显示用户应该注意的信息，即使在快速浏览时也应该注意。
{{< /note */>}}
```

{{< note >}}
突出显示用户应该注意的信息，即使在快速浏览时也应该注意。
{{< /note >}}

### 提示警告

```text
{{</* tip >}}
帮助用户更成功的可选信息。
{{< /tip */>}}
```

{{< tip >}}
帮助用户更成功的可选信息。
{{< /tip >}}

### 重要警告

```text
{{</* important >}}
用户成功必需的关键信息。
{{< /important */>}}
```

{{< important >}}
用户成功必需的关键信息。
{{< /important >}}

### 警告

```text
{{</* warning >}}
由于潜在风险而需要用户立即关注的关键内容。
{{< /warning */>}}
```

{{< warning >}}
由于潜在风险而需要用户立即关注的关键内容。
{{< /warning >}}

### 谨慎警告

```text
{{</* caution >}}
某个行为的负面潜在后果。
{{< /caution */>}}
```

{{< caution >}}
某个行为的负面潜在后果。
{{< /caution >}}

## 详情展开

```text
{{</* details "更多详情" >}}
> The past is never dead. It's not even past.
>
> -- William Faulkner, Requiem for a Nun
{{< /details */>}}
```

{{< details "更多详情" >}}

> The past is never dead. It's not even past.
>
> -- William Faulkner, Requiem for a Nun

{{< /details >}}

## 引用

```text
{{</* quote title="Requiem for a Nun" author="William Faulkner" ref="https://www.goodreads.com/work/quotes/2041161" >}}
The past is never dead. It's not even past.
{{< /quote */>}}
```

{{< quote title="Requiem for a Nun" author="William Faulkner" ref="https://www.goodreads.com/work/quotes/2041161" >}}
The past is never dead. It's not even past.
{{< /quote >}}

## @

你可以使用这个短代码来创建到 GitHub 用户或 Twitter 用户的链接。例如，{{< at name=Hugo type=github id=gohugoio >}} 和 {{< at name="GoHugo.io" type=twitter id=gohugoio >}}。

代码如下：

```text
{{</* at name=Hugo type=github id=gohugoio */>}}
{{</* at name="GoHugo.io" type=twitter id=gohugoio */>}}
```