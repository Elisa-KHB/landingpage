"use client";

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lectureType: '디지털인문학',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', lectureType: '디지털인문학', message: '' });
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Navigation Header */}
      <header>
        <div className="header-container">
          <a href="#" className="logo">김현빈.hub</a>
          <ul className="nav-links">
            <li><a href="#about">소개</a></li>
            <li><a href="#lectures">강의 분야</a></li>
            <li><a href="#values">핵심 가치</a></li>
            <li><a href="#contact">문의하기</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-badge">Digital Convergence Educator</span>
            <h1 className="hero-title font-serif-heading">
              융합으로<br />
              공부와 학습을<br />
              <span className="highlight">재미있게</span>.
            </h1>
            <p className="hero-description">
              인문학과 테크놀로지, 그리고 경영 시뮬레이션을 넘나들며 배움의 지평을 넓힙니다. 
              디지털 방법론으로 문명을 이해하는 <strong>디지털인문학</strong>과 비즈니스 메커니즘을 체득하는 <strong>경영게임</strong> 강의를 진행합니다.
            </p>
            <div className="hero-buttons">
              <a href="#lectures" className="btn btn-primary">강의 살펴보기</a>
              <a href="#contact" className="btn btn-secondary">협업 및 출강 문의</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card-wrapper">
              <img src="/convergence.png" alt="융합 에너지 시각화" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '0.5rem', border: '1px solid var(--border-color)' }} />
              <div className="profile-details">
                <span className="profile-role">Lecturer</span>
                <h3 className="profile-name font-serif-heading">김현빈</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  디지털과 인문학의 경계를 융합하여 새로운 학습 경험을 설계합니다.
                </p>
              </div>
              <div className="profile-stat-box">
                <div className="stat-item">
                  <span className="stat-value">200+</span>
                  <span className="stat-label">진행 강의 수</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">98%</span>
                  <span className="stat-label">강의 만족도</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="about-grid">
          <div>
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <span className="section-label">Biography</span>
              <h2 className="section-title font-serif-heading">디지털과 인문학,<br />그리고 경영을 연결하다</h2>
            </div>
            <p className="about-intro-text">
              학문 간의 단절을 넘어서는 융합적 가치는 깊이 있는 성찰과 재미있는 경험에서 나옵니다.
            </p>
            <div className="about-body-text">
              <p>
                오늘날 데이터와 테크놀로지는 더 이상 이공계만의 전유물이 아닙니다. 인문학적 상상력과 데이터를 다루는 기술이 만날 때, 우리는 세상을 입체적으로 통찰할 수 있는 거대한 렌즈를 얻게 됩니다.
              </p>
              <p>
                저는 단순히 지식을 전달하는 일방적인 강의 방식을 지양합니다. 시뮬레이션 게임 속에서 최고경영자가 되어 의사결정을 내리고, 고전 텍스트 속에서 알고리즘을 활용해 관계를 탐색하는 '체험형 융합 학습'을 통해 교육생들이 능동적으로 몰입하도록 돕습니다.
              </p>
            </div>
          </div>

          <div className="about-features" id="values">
            <div className="about-feature-card">
              <div className="feature-header">
                <div className="feature-icon">⛓️</div>
                <h4 className="feature-title">지식의 초연결 (Convergence)</h4>
              </div>
              <p className="feature-desc">
                인문학적 사유와 데이터 시각화, 경영 전략 시뮬레이션의 결합으로 입체적인 사고의 프레임을 제시합니다.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="feature-header">
                <div className="feature-icon">🎮</div>
                <h4 className="feature-title">체험형 배움 (Activity)</h4>
              </div>
              <p className="feature-desc">
                단순 암기가 아닌 웹 도구 활용, 경영 게임 등 시뮬레이션 실습을 통해 원리를 직접 경험하고 깨닫습니다.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="feature-header">
                <div className="feature-icon">⚡</div>
                <h4 className="feature-title">몰입형 스토리 (Storytelling)</h4>
              </div>
              <p className="feature-desc">
                자칫 지루하게 느껴질 수 있는 이론 지식을 흥미진진한 인문학적 에피소드와 퀴즈로 엮어 강력한 흡입력을 전달합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures Section */}
      <section id="lectures" className="content-section" style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'rgba(19, 27, 46, 0.2)' }}>
        <div className="section-header">
          <span className="section-label">Core Lectures</span>
          <h2 className="section-title font-serif-heading">주요 강의 분야</h2>
        </div>

        <div className="lectures-grid">
          {/* Lecture 1 */}
          <div className="lecture-card">
            <div>
              <div className="lecture-icon-big">🏛️</div>
              <h3 className="lecture-title font-serif-heading">디지털인문학 (Digital Humanities)</h3>
              <p className="lecture-desc">
                문학, 역사, 예술 등의 전통 인문 연구 분야에<br />
                텍스트 마이닝, 데이터 시각화, 네트워크 분석 등 컴퓨터공학적 방법론을 융합합니다.<br />
                인문 데이터의 정제부터 시각적 탐색까지 흥미로운 예제로<br />
                인문학적 가치를 새롭게 조명합니다.
              </p>
            </div>
            <div className="lecture-curriculum">
              <span className="curriculum-title">주요 커리큘럼</span>
              <ul className="curriculum-list">
                <li className="curriculum-tag">인문 데이터 시각화</li>
                <li className="curriculum-tag">텍스트 마이닝 기법</li>
                <li className="curriculum-tag">디지털 아카이빙 개론</li>
                <li className="curriculum-tag">네트워크 노드 분석</li>
              </ul>
            </div>
          </div>

          {/* Lecture 2 */}
          <div className="lecture-card">
            <div>
              <div className="lecture-icon-big">📈</div>
              <h3 className="lecture-title font-serif-heading">경영게임 (Business Simulation)</h3>
              <p className="lecture-desc">
                체험형 경영 시뮬레이션 엔진을 기반으로,<br />
                참가자들이 직접 가상의 회사를 창업하고 운영하며<br />
                마케팅, 생산, 재무제표 작성 및 분석 등<br />
                비즈니스의 전반적인 순환 루프를 몸소 깨닫는<br />
                실전 비즈니스 역량 강화 워크숍입니다.
              </p>
            </div>
            <div className="lecture-curriculum">
              <span className="curriculum-title">주요 커리큘럼</span>
              <ul className="curriculum-list">
                <li className="curriculum-tag">경영 메커니즘의 이해</li>
                <li className="curriculum-tag">비즈니스 의사결정 시뮬레이션</li>
                <li className="curriculum-tag">재무 수치와 의사결정</li>
                <li className="curriculum-tag">팀워크 및 전술 수립</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <span className="section-label">Connect</span>
                <h2 className="contact-tagline font-serif-heading">함께 만드는<br />지적인 즐거움</h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '320px' }}>
                  대학 특강, 기업 워크숍, 교육 컨설팅 등 김현빈 강사와의 협업 및 출강 제안을 환영합니다.
                </p>
              </div>

              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-label">이메일 문의</div>
                    <div className="contact-value">contact@hyunbin-kim.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">활동 지역</div>
                    <div className="contact-value">전국 (온/오프라인)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--accent-color)',
                  borderRadius: '16px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  gap: '1rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '2px solid var(--accent-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'var(--accent-color)'
                  }}>✓</div>
                  <h3 className="font-serif-heading" style={{ fontSize: '1.5rem' }}>메시지가 성공적으로 전송되었습니다!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    작성해주신 메일 주소로 빠른 시일 내에 연락드리겠습니다.
                  </p>
                  <button onClick={handleReset} className="btn btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                    새 메시지 보내기
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">이름 / 기관명</label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      placeholder="성함 혹은 기관명을 입력해주세요"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">회신받을 이메일 주소</label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lectureType">관심 분야</label>
                    <select
                      className="form-input"
                      id="lectureType"
                      value={formData.lectureType}
                      onChange={(e) => setFormData({ ...formData, lectureType: e.target.value })}
                    >
                      <option value="디지털인문학">디지털인문학 특강/워크숍</option>
                      <option value="경영게임">경영게임 시뮬레이션 교육</option>
                      <option value="공동연구">공동 연구 및 프로젝트</option>
                      <option value="기타">기타 협업 문의</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">상세 문의 내용</label>
                    <textarea
                      className="form-textarea"
                      id="message"
                      placeholder="행사 시기, 대상, 시간 등 상세 일정을 적어주시면 원활한 상담이 가능합니다."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                    {submitting ? '전송 중...' : '문의 메시지 보내기'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-copyright">
            © {new Date().getFullYear()} 김현빈 (Kim Hyun-bin). All rights reserved.
          </div>
          <ul className="footer-links">
            <li><a href="#about">소개</a></li>
            <li><a href="#lectures">강의</a></li>
            <li><a href="#contact">문의</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
