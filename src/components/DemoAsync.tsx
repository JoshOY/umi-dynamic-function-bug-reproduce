import { dynamic } from 'umi';

export const AsyncDemo = dynamic({
  async loader() {
    const { Demo } = await import('./Demo');
    // type of `Demo` can be inferred properly as `React.FC<DemoProps>`
    return Demo;
  },
});

export type AsyncDemoType = typeof AsyncDemo;  // <-- but here infers type `ComponentClass<{}, any>`
