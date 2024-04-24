import { UserInputValueProvider } from '@/components/providers/UserInputValueProvider';

import { Layout } from '@/components/layout';
import { QuizeForm } from '@/components/form';

export const QuizeFormContent = () => {
  return (
    <Layout>
      <UserInputValueProvider>
        <QuizeForm />
      </UserInputValueProvider>
    </Layout>
  );
};
