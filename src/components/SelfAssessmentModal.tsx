import { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SelfAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'intro' | 'questions' | 'contact' | 'confirmation';

interface AssessmentData {
  question_1: boolean | null;
  question_2: boolean | null;
  question_3: boolean | null;
  question_4: boolean | null;
  first_name: string;
  phone: string;
}

export function SelfAssessmentModal({ isOpen, onClose }: SelfAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    question_1: null,
    question_2: null,
    question_3: null,
    question_4: null,
    first_name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const calculateResult = () => {
    const yesCount = [
      assessmentData.question_1,
      assessmentData.question_2,
      assessmentData.question_3,
      assessmentData.question_4
    ].filter(answer => answer === true).length;

    if (yesCount >= 3) return 'Overdue';
    if (yesCount >= 1) return 'Maintenance';
    return 'Good';
  };

  const handleQuestionAnswer = (answer: boolean) => {
    const questionKey = `question_${currentQuestion}` as keyof AssessmentData;
    setAssessmentData({ ...assessmentData, [questionKey]: answer });

    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('contact');
    }
  };

  const handleBack = () => {
    if (currentStep === 'contact') {
      setCurrentStep('questions');
      setCurrentQuestion(4);
    } else if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const yesCount = [
        assessmentData.question_1,
        assessmentData.question_2,
        assessmentData.question_3,
        assessmentData.question_4
      ].filter(answer => answer === true).length;

      const result = calculateResult();

      const { error: submitError } = await supabase
        .from('self_assessment_submissions')
        .insert([{
          first_name: assessmentData.first_name,
          phone: assessmentData.phone,
          question_1: assessmentData.question_1,
          question_2: assessmentData.question_2,
          question_3: assessmentData.question_3,
          question_4: assessmentData.question_4,
          yes_count: yesCount,
          assessment_result: result
        }]);

      if (submitError) throw submitError;

      setIsSubmitting(false);
      setCurrentStep('confirmation');
    } catch (err) {
      console.error('Error submitting assessment:', err);
      setError('Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setTimeout(() => {
        setCurrentStep('intro');
        setCurrentQuestion(1);
        setAssessmentData({
          question_1: null,
          question_2: null,
          question_3: null,
          question_4: null,
          first_name: '',
          phone: ''
        });
        setError('');
      }, 300);
    }
  };

  const questions = [
    "Do you notice odors in your vehicle even after cleaning?",
    "Are your seats, carpets, or floor mats darker than they used to be?",
    "When it rains or you wash your car, does water still bead on the paint?",
    "Do you eat or transport kids, pets, or work gear in your vehicle weekly?"
  ];

  const getStepNumber = () => {
    if (currentStep === 'intro') return '1';
    if (currentStep === 'questions') return '2';
    if (currentStep === 'contact') return '3';
    return '3';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full animate-in zoom-in duration-200">
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {currentStep !== 'confirmation' && (
          <div className="absolute top-4 left-4 text-xs font-semibold text-gray-400">
            Step {getStepNumber()} of 3
          </div>
        )}

        {currentStep === 'intro' && (
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is Your Car Due for a Professional Detail?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Answer 4 quick questions to see what level of care your vehicle actually needs.
            </p>
            <button
              onClick={() => setCurrentStep('questions')}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Start Assessment
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {currentStep === 'questions' && (
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      num <= currentQuestion ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">Question {currentQuestion} of 4</p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {questions[currentQuestion - 1]}
            </h3>

            <div className="space-y-3">
              <button
                onClick={() => handleQuestionAnswer(true)}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-left flex items-center justify-between"
              >
                <span>Yes</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleQuestionAnswer(false)}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-lg border-2 border-gray-300 transition-colors text-left flex items-center justify-between"
              >
                <span>No</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {currentQuestion > 1 && (
              <button
                onClick={handleBack}
                className="mt-6 text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
        )}

        {currentStep === 'contact' && (
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Get Your Results
            </h2>
            <p className="text-gray-600 mb-8">
              We'll send you your assessment results and next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="first_name" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  required
                  value={assessmentData.first_name}
                  onChange={(e) => setAssessmentData({ ...assessmentData, first_name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="John"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={assessmentData.phone}
                  onChange={(e) => setAssessmentData({ ...assessmentData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="(805) 555-0123"
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Send My Results'}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full text-gray-600 hover:text-gray-900 font-medium inline-flex items-center justify-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </form>
          </div>
        )}

        {currentStep === 'confirmation' && (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Thanks! Your assessment results are on the way.
            </h2>
            <p className="text-gray-600 mb-8">
              A specialist may reach out if your vehicle needs immediate attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleClose}
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 transition-colors"
              >
                Close
              </button>
              <a
                href="https://calendly.com/dkmobilewashvc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Already know what you want? Book now
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
