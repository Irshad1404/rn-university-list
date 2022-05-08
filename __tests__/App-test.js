/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

git add -A
git config user.email "<your_email_address>"
git config user.name "<your_name>"
git commit -m 'Create Patch File'
git format-patch -1 HEAD
