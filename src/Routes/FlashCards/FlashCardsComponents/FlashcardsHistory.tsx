import React, { useEffect, useState } from "react";
import axios from "axios";
import { backDomain, onLoggOut } from "../../../Resources/UniversalComponents";
import { HeadersProps } from "../../../Resources/types.universalInterfaces";
import { CircularProgress } from "@mui/material";
import { HOne } from "../../../Resources/Components/RouteBox";

interface FlashcardItem {
  _id: string;
  description: string;
  score: number;
  date: string;
}

interface GroupedHistory {
  items: FlashcardItem[];
  totalScore: number;
}

const FlashcardsHistory = ({ headers }: HeadersProps) => {
  const [flashcardHistory, setFlashcardHistory] = useState<FlashcardItem[]>([]);
  const [listeningFlashcardHistory, setListeningFlashcardHistory] = useState<
    FlashcardItem[]
  >([]);
  const [QAReviewHistory, setQAReviewHistory] = useState<FlashcardItem[]>([]);

  const [expandedFlashcardsDays, setExpandedFlashcardsDays] = useState<
    Record<string, boolean>
  >({});
  const [expandedListeningDays, setExpandedListeningDays] = useState<
    Record<string, boolean>
  >({});
  const [expandedQADays, setExpandedQADays] = useState<Record<string, boolean>>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(true);

  const toggleFlashcardDay = (date: string) => {
    setExpandedFlashcardsDays((prevState) => ({
      ...prevState,
      [date]: !prevState[date],
    }));
  };

  const toggleListeningDay = (date: string) => {
    setExpandedListeningDays((prevState) => ({
      ...prevState,
      [date]: !prevState[date],
    }));
  };

  const actualHeaders = headers || {};
  const getNewCards = async (id?: string) => {
    try {
      const response = await axios.get(
        `${backDomain}/api/v1/flashcardscore/${id}`,
        {
          // @ts-ignore
          headers: actualHeaders,
        }
      );
      setFlashcardHistory(
        Array.isArray(response.data.flashcardReviewHistory)
          ? response.data.flashcardReviewHistory
          : []
      );
      setListeningFlashcardHistory(
        Array.isArray(response.data.listeningReviewHistory)
          ? response.data.listeningReviewHistory
          : []
      );
      setQAReviewHistory(
        Array.isArray(response.data.QAReviewHistory)
          ? response.data.QAReviewHistory
          : []
      );
      setLoading(false);
    } catch (error) {
      console.log("Erro ao obter cards", error);
      setFlashcardHistory([]);
      setLoading(false);
      onLoggOut();
    }
  };

  const groupByDay2 = (data: FlashcardItem[]) => {
    if (!Array.isArray(data)) return {};
    return data.reduce((acc, curr) => {
      const date = new Date(curr.date).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = { items: [], totalScore: 0 };
      }
      acc[date].items.push(curr);
      acc[date].totalScore += curr.score;
      return acc;
    }, {} as Record<string, GroupedHistory>);
  };

  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    const parsedUser = user ? JSON.parse(user) : null;
    const id = parsedUser?.id;
    if (id) {
      getNewCards(id);
    }
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  const groupedHistory = groupByDay2(flashcardHistory);
  const groupedListeningHistory = groupByDay2(listeningFlashcardHistory);

  return (
    <div className="flashcard-history-upper">
      {/* Flashcard Reviews */}
      <div>
        <HOne>Flashcard Reviews</HOne>
        {flashcardHistory.length > 0 ? (
          <div className="flashcard-history-list">
            {Object.entries(groupedHistory).map(([date, group]) => (
              <div key={date} className="flashcard-day">
                <h2
                  className="flashcard-date"
                  onClick={() => toggleFlashcardDay(date)}
                >
                  {date} - Total Points: {group.totalScore}
                </h2>
                {expandedFlashcardsDays[date] && (
                  <div className="flashcard-items">
                    {group.items.map((item) => (
                      <div key={item._id} className="flashcard-item">
                        <p>
                          <strong>Description:</strong> {item.description}
                        </p>
                        <p>
                          <strong>Score:</strong> {item.score}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(item.date).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No flashcard history found.</p>
        )}
      </div>
    </div>
  );
};

export default FlashcardsHistory;
