
本页面展示了 Hugo Bearberry 主题的综合图片布局系统，展示了使用 placehold.co 进行开发和 Unsplash 照片用于真实案例的各种布局。

## 主图 + 侧边栏布局

主图 + 侧边栏布局提供了展示主要界面和详细组件的绝佳方式。此布局使用 2:1 比例，主图占据突出位置，同时侧边栏项目提供额外的上下文或详细视图。非常适合：

- **应用界面** - 主仪表板和详细信息面板
- **产品展示** - 英雄图片和功能亮点
- **设计演示** - 展示主要概念和支持元素
- **文档示例** - 显示主要内容和参考资料

此实现使用响应式网格，适应不同的屏幕尺寸，同时保持视觉层次结构：

{{< gallery layout="main-sidebar" gap="1.5rem" >}}
- {{< absfigure src="https://placehold.co/600x400/6c757d/ffffff?text=Main+Image" caption="完整的主界面" alt="主应用界面" >}}
- {{< absfigure src="https://placehold.co/300x100/28a745/ffffff?text=Detail+1" caption="顶部控制面板" alt="控件的详细视图" >}}
- {{< absfigure src="https://placehold.co/300x100/dc3545/ffffff?text=Detail+2" caption="左侧导航菜单" alt="侧边栏的详细视图" >}}
- {{< absfigure src="https://placehold.co/300x100/ffc107/000000?text=Detail+3" caption="底部状态指示器" alt="状态栏的详细视图" >}}
{{< /gallery >}}

## 双列弹性布局

简单的并排对比布局：

{{< gallery layout="pair" gap="2rem" >}}
{{< absfigure src="https://placehold.co/400x250/007bff/ffffff?text=Before+Changes" caption="优化前的原始状态" alt="优化前实施" >}}
{{< absfigure src="https://placehold.co/400x250/28a745/ffffff?text=After+Changes" caption="优化后的改进状态" alt="优化后实施" >}}
{{< /gallery >}}

## 三列网格布局

用于展示多个项目的响应式网格布局：

{{< gallery layout="grid" cols="3" gap="1rem" >}}
- ![Item 1](https://placehold.co/250x200/dc3545/ffffff?text=Item+1)
- ![Item 2](https://placehold.co/250x200/ffc107/000000?text=Item+2)
- ![Item 3](https://placehold.co/250x200/17a2b8/ffffff?text=Item+3)
- ![Item 4](https://placehold.co/250x200/28a745/ffffff?text=Item+4)
- ![Item 5](https://placehold.co/250x200/6f42c1/ffffff?text=Item+5)
- ![Item 6](https://placehold.co/250x200/e83e8c/ffffff?text=Item+6)
{{< /gallery >}}

## 2:1 比例布局

用于强调的三分之二和三分之一布局：

{{< gallery layout="main-sidebar" >}}
- {{< absfigure src="https://placehold.co/450x300/6610f2/ffffff?text=Main+Content" caption="包含详细信息的主要内容区域" alt="主要内容部分" >}}
- {{< absfigure src="https://placehold.co/200x300/f59e0b/ffffff?text=Sidebar" caption="次要信息面板" alt="侧边栏信息" >}}
{{< /gallery >}}

## 图片对比较

非常适合前后对比或并排比较：

{{< gallery layout="pair" gap="2rem" >}}
{{< absfigure src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=350&h=200&fit=crop&crop=center" caption="传统界面设计 - Unsplash 上的 Thomas Veit 摄影" alt="旧设计版本" >}}
{{< absfigure src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=350&h=200&fit=crop&crop=center" caption="现代界面重设计 - Unsplash 上的 Samuel Zeller 摄影" alt="新设计版本" >}}
{{< /gallery >}}

## 自定义间距

展示不同间距需求的间距大小：

{{< gallery layout="grid" cols="3" gap="2rem" >}}
- ![Tight](https://placehold.co/200x150/8b5cf6/ffffff?text=Tight)
- ![Medium](https://placehold.co/200x150/3b82f6/ffffff?text=Medium)
- ![Loose](https://placehold.co/200x150/06b6d4/ffffff?text=Loose)
{{< /gallery >}}

## 瀑布布局（Pinterest 风格）

具有不同图片高度的瀑布流布局，实现类似 Pinterest 的错位效果：

### 基础瀑布流网格

{{< gallery layout="masonry" cols="3" gap="1rem" >}}
- ![Tall Image 1](https://placehold.co/300x400/6366f1/ffffff?text=Tall+Image+1)
- ![Wide Image 2](https://placehold.co/300x200/8b5cf6/ffffff?text=Wide+Image+2)
- ![Square Image 3](https://placehold.co/300x300/10b981/ffffff?text=Square+Image+3)
- ![Tall Image 4](https://placehold.co/300x450/f59e0b/ffffff?text=Tall+Image+4)
- ![Short Image 5](https://placehold.co/300x180/ef4444/ffffff?text=Short+Image+5)
- ![Medium Tall 6](https://placehold.co/300x350/6366f1/ffffff?text=Medium+Tall+6)
{{< /gallery >}}

### 双列瀑布流与真实图片

{{< gallery layout="masonry" cols="2" gap="1.5rem" >}}
- ![Real photo 1](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop&crop=center)
- ![Real photo 2](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=250&fit=crop&crop=center)
- ![Real photo 3](https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=350&fit=crop&crop=center)
- ![Real photo 4](https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop&crop=center)
{{< /gallery >}}

### 四列紧凑瀑布流

{{< gallery layout="masonry" cols="4" gap="0.5rem" >}}
- ![Photo 1](https://placehold.co/200x250/a855f7/ffffff?text=Photo+1)
- ![Photo 2](https://placehold.co/200x180/3b82f6/ffffff?text=Photo+2)
- ![Photo 3](https://placehold.co/200x220/10b981/ffffff?text=Photo+3)
- ![Photo 4](https://placehold.co/200x200/f59e0b/ffffff?text=Photo+4)
- ![Photo 5](https://placehold.co/200x280/ef4444/ffffff?text=Photo+5)
- ![Photo 6](https://placehold.co/200x160/6366f1/ffffff?text=Photo+6)
- ![Photo 7](https://placehold.co/200x240/8b5cf6/ffffff?text=Photo+7)
- ![Photo 8](https://placehold.co/200x190/10b981/ffffff?text=Photo+8)
{{< /gallery >}}

## 使用本地图片

您也可以通过将图片放在静态或内容目录中来使用本地图片：

### 方法 1：静态文件

将图片放在 `static/images/` 中并使用绝对路径引用它们：

```markdown
{{</* imgmain-sidebar
    src="/images/main-interface.png"
    sidebarImages="/images/detail1.png,/images/detail2.png,/images/detail3.png"
    altMain="主界面"
    alt1="控件的详细视图"
    alt2="侧边栏的详细视图"
    alt3="状态栏的详细视图"
    captionMain="完整的主界面"
    caption1="顶部控制面板"
    caption2="左侧导航菜单"
    caption3="底部状态指示器"
    gap="1rem" */>}}
```

**实时示例：**
{{< gallery layout="main-sidebar" gap="1rem" >}}
- {{< absfigure src="/images/main-interface.png" caption="完整的主界面" alt="主界面" >}}
- {{< absfigure src="/images/detail1.png" caption="顶部控制面板" alt="控件的详细视图" >}}
- {{< absfigure src="/images/detail2.png" caption="左侧导航菜单" alt="侧边栏的详细视图" >}}
- {{< absfigure src="/images/detail3.png" caption="底部状态指示器" alt="状态栏的详细视图" >}}
{{< /gallery >}}

### 方法 2：页面资源

将图片放在 markdown 文件的同一目录中或页面包中：

```markdown
{{</* imgpair
    src1="before-screenshot.png"
    src2="after-screenshot.png"
    alt1="重设计前"
    alt2="重设计后"
    caption1="原始实现"
    caption2="改进版本"
    gap="2rem" */>}}
```

**实时示例：**
{{< gallery layout="pair" gap="2rem" >}}
- {{< absfigure src="/images/before-screenshot.png" caption="原始实现" alt="重设计前" >}}
- {{< absfigure src="/images/after-screenshot.png" caption="改进版本" alt="重设计后" >}}
{{< /gallery >}}

### 方法 3：混合本地和远程

您可以在同一布局中混合本地和远程图片：

```markdown
{{</* imggrid images="/images/local1.png,https://example.com/remote2.jpg,/images/local3.png"
    cols=3
    alt1="本地图片示例"
    alt2="远程图片示例"
    alt3="另一个本地图片" */>}}
```

**实时示例：**
{{< gallery layout="grid" cols="3" >}}
- ![本地图片示例](/images/local1.png)
- ![远程图片示例](https://placehold.co/300x200/007bff/ffffff?text=Remote+Image)
- ![另一个本地图片](/images/local3.png)
{{< /gallery >}}

### 真实占位符示例

这里是一个使用本地样式路径的示例（这些将是您的实际图片）：

{{< gallery layout="main-sidebar" gap="1rem" >}}
- {{< absfigure src="/images/dashboard-main.png" caption="完整应用程序仪表板" alt="完整仪表板视图" >}}
- {{< absfigure src="/images/dashboard-header.png" caption="顶部导航栏" alt="带有导航的仪表板标题" >}}
- {{< absfigure src="/images/dashboard-sidebar.png" caption="侧边导航菜单" alt="带有菜单的仪表板侧边栏" >}}
- {{< absfigure src="/images/dashboard-footer.png" caption="底部操作按钮" alt="带有操作的仪表板页脚" >}}
{{< /gallery >}}

### 大图测试

此示例演示了在页面上缩小的​​高分辨率图片，但点击时显示完整尺寸：

{{< gallery layout="pair" >}}
{{< absfigure src="https://placehold.co/2000x1500/ff6b6b/ffffff?text=Extra+Large+Image+%282000x1500%29" caption="超大图：点击查看完整的 2000×1500 分辨率，支持滚动" alt="超高分辨率图片（在页面上缩放）" >}}
{{< absfigure src="https://placehold.co/1200x800/4ecdc4/ffffff?text=Large+Image+%281200x800%29" caption="大图：点击查看完整的 1200×800 分辨率" alt="用于比较的大图" >}}
{{< /gallery >}}

所有布局都是完全响应式的，将完美适应不同的屏幕尺寸，同时保持可访问性和视觉层次结构。

