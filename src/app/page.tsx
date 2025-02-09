import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home as HomeIcon, Settings, User, Bell, Github, Code2, Laptop } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Next.js Template</h1>
          <div className="flex gap-2">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm" 
              asChild
            >
              <Link 
                href="https://github.com/mtatkinson/base-template-web" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub (opens in new tab)"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground text-lg">
          A modern, feature-rich template showcasing the power of Next.js 14, TypeScript, and Shadcn/UI components.
          Explore the examples below to see what's possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Template Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore the different aspects of this template through the interactive tabs below. 
            Each section demonstrates the capabilities, components, and features that come pre-configured and ready to use.
          </p>
        </div>

        <Tabs defaultValue="components" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="components">
              <Code2 className="w-4 h-4 mr-2" />
              UI Components
            </TabsTrigger>
            <TabsTrigger value="features">
              <Laptop className="w-4 h-4 mr-2" />
              Key Features
            </TabsTrigger>
            <TabsTrigger value="demo">
              <Settings className="w-4 h-4 mr-2" />
              Interactive Demo
            </TabsTrigger>
          </TabsList>

          {/* Components Tab */}
          <TabsContent value="components">
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Sample UI Components</h2>
                <p className="text-muted-foreground">
                  Explore our collection of beautifully designed, accessible, and customizable UI components.
                  Each component is built with Shadcn/UI and supports both light and dark modes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>A showcase of different button styles and states available in the template</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Buttons support various states including hover, focus, and disabled, with full keyboard navigation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Form Controls</CardTitle>
                    <CardDescription>Essential form elements with built-in accessibility features</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Enter your email" />
                      <p className="text-sm text-muted-foreground">
                        Input fields feature consistent styling, validation states, and focus management.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Core Features</h2>
                <p className="text-muted-foreground">
                  Built with modern web development best practices and tools to provide a solid foundation for your next project.
                  Click on any feature to learn more about it.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://react.dev/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://react.dev/favicon.png" type="image/png" />
                      <img 
                        src="https://react.dev/favicon.ico"
                        alt="React logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>React 18</CardTitle>
                    </Link>
                    <CardDescription>
                      The library for web and native user interfaces, featuring Server Components and Hooks
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://nextjs.org/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://nextjs.org/favicon.png" type="image/png" />
                      <img 
                        src="https://nextjs.org/favicon.ico"
                        alt="Next.js logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>Next.js 14</CardTitle>
                    </Link>
                    <CardDescription>
                      The React framework for production, featuring App Router, Server Components, and optimized performance
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://www.typescriptlang.org/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://www.typescriptlang.org/favicon-32x32.png" type="image/png" />
                      <img 
                        src="https://www.typescriptlang.org/favicon.ico"
                        alt="TypeScript logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>TypeScript</CardTitle>
                    </Link>
                    <CardDescription>
                      Full TypeScript integration with strict type checking and enhanced developer experience
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://tailwindcss.com/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://tailwindcss.com/favicons/favicon-32x32.png" type="image/png" />
                      <source srcSet="https://tailwindcss.com/favicons/favicon.svg" type="image/svg+xml" />
                      <img 
                        src="https://tailwindcss.com/favicon.ico"
                        alt="TailwindCSS logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>TailwindCSS</CardTitle>
                    </Link>
                    <CardDescription>
                      Utility-first CSS framework with built-in dark mode and responsive design
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://ui.shadcn.com/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://ui.shadcn.com/apple-touch-icon.png" type="image/png" />
                      <img 
                        src="https://ui.shadcn.com/favicon.ico"
                        alt="Shadcn/UI logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>Shadcn/UI</CardTitle>
                    </Link>
                    <CardDescription>
                      Beautifully designed components built with Radix UI and Tailwind CSS
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://www.radix-ui.com/favicon.png" type="image/png" />
                      <source srcSet="https://www.radix-ui.com/favicon-black.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
                      <source srcSet="https://www.radix-ui.com/favicon-white.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
                      <img 
                        src="https://www.radix-ui.com/favicon.png"
                        alt="Radix UI logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>Radix UI</CardTitle>
                    </Link>
                    <CardDescription>
                      Unstyled, accessible components for building high‑quality design systems
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://eslint.org/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://eslint.org/icon.svg" type="image/svg+xml" />
                      <img 
                        src="https://eslint.org/favicon.ico"
                        alt="ESLint logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://eslint.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>ESLint</CardTitle>
                    </Link>
                    <CardDescription>
                      Static code analysis with Next.js specific rules and TypeScript integration
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://lucide.dev/favicon.ico" type="image/x-icon" />
                      <source srcSet="https://lucide.dev/logo.svg" type="image/svg+xml" />
                      <img 
                        src="https://lucide.dev/favicon.ico"
                        alt="Lucide Icons logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>Lucide Icons</CardTitle>
                    </Link>
                    <CardDescription>
                      Beautiful & consistent icon pack with over 1000 icons designed for the modern web
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <picture>
                      <source srcSet="https://cva.style/assets/img/favicon.png" type="image/png" />
                      <source srcSet="https://cva.style/assets/img/og.png" type="image/png" />
                      <img 
                        src="https://cva.style/assets/img/favicon.png"
                        alt="CVA logo"
                        className="w-8 h-8 mb-2"
                      />
                    </picture>
                    <Link href="https://cva.style/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <CardTitle>CVA</CardTitle>
                    </Link>
                    <CardDescription>
                      Type-safe class variance authority for managing component variants
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Demo Tab */}
          <TabsContent value="demo">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Components</CardTitle>
                <CardDescription>Try out these components to see how they work together</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Action Buttons</h3>
                    <div className="flex items-center gap-2">
                      <Button>
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                      </Button>
                      <Button variant="outline">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                      <Button variant="secondary">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Buttons with icons demonstrate how to combine components for better visual hierarchy.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Search Example</Label>
                    <div className="flex gap-2">
                      <Input placeholder="Search components..." />
                      <Button>Search</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A common pattern for search functionality with instant visual feedback.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
