import UserProfileType from '../user-profile/user-profile.type';

export default interface ReviewType {
  rating: number;
  user: UserProfileType;
  reviewText: string;
}
