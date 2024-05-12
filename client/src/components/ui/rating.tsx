import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface ratingProps {
    rating: number;
    hideRating?: boolean;
}

const Rating = ({ rating, hideRating = false }: ratingProps) => {
    return (
        <div className="rating">
            <div>
            {[...Array(5)].map((_, index) => (
                <div key={index} style={{ display: 'inline-block' }}>
                    {index + 1 <= rating ? (
                        <FaStar
                            style={{ cursor: 'pointer', color: 'orange' }}
                        />
                    ) : index < rating ? (
                        <FaStarHalfAlt
                            style={{ cursor: 'pointer', color: 'orange' }}
                        />
                    ) : (
                        <FaStar
                            style={{ cursor: 'pointer', color: 'whitesmoke' }}
                        />
                    )}
                </div>
            ))}

        </div>
        </div>
    );
};

export default Rating;