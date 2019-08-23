/* @flow */
import {queueFactory} from 'react-native-spacing-system';
import {spacing, type Spacing} from '../../constants/spacing';

const queue = queueFactory<Spacing>(spacing);

export default queue;
