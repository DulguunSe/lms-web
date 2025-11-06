const { useState } = React;

// Firebase тохиргоо (жинхэнэ түлхүүрүүдийг орлуулж оруулна)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const courses = [
  {
    id: "frontend-101",
    title: "Фронтенд хөгжүүлэлт 101",
    level: "Эхлэх түвшин",
    description:
      "HTML, CSS, JavaScript-ийн суурь ойлголтууд болон React-ийн үндэс.",
    teacher: "А. Батболд",
    duration: "6 долоо хоног",
    schedule: "Даваа, Пүрэв 19:00-21:00",
    price: "450,000₮",
    videoUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    materials: [
      { label: "Хичээлийн хөтөлбөр", url: "https://example.com/syllabus" },
      { label: "Даалгаврын сан", url: "https://example.com/tasks" },
    ],
  },
  {
    id: "backend-pro",
    title: "Node.js Backend Pro",
    level: "Дунд түвшин",
    description:
      "REST API зохиох, өгөгдлийн сангийн бүтцийг оновчлох, Firebase-тай холбох.",
    teacher: "Д. Хулан",
    duration: "8 долоо хоног",
    schedule: "Мягмар, Баасан 20:00-22:00",
    price: "550,000₮",
    videoUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    materials: [
      { label: "API загвар", url: "https://example.com/api-design" },
      { label: "Firestore workshop", url: "https://example.com/firestore" },
    ],
  },
  {
    id: "ai-bootcamp",
    title: "AI & ML Bootcamp",
    level: "Ахисан түвшин",
    description:
      "Машин сургалт, TensorFlow, Firebase ML Kit ашигласан бодит төсөл дээр ажиллах.",
    teacher: "С. Энхжин",
    duration: "10 долоо хоног",
    schedule: "Бямба гараг 10:00-15:00",
    price: "790,000₮",
    videoUrl: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
    materials: [
      { label: "Bootcamp handbook", url: "https://example.com/handbook" },
      { label: "Dataset зөвлөмж", url: "https://example.com/datasets" },
    ],
  },
];

const programs = [
  {
    name: "Full Stack веб хөгжүүлэгч",
    summary:
      "12 долоо хоногийн турш React, Node.js, Firebase ашиглаж бүрэн систем бүтээх",
    schedule: "Эхлэх огноо: 5-р сарын 15 | Хичээл: Даваа-Пүрэв 19:00-21:30",
    tuition: "1,290,000₮",
    discount: "Эрт бүртгэл 10% хөнгөлөлт",
  },
  {
    name: "UX/UI дизайн спринт",
    summary:
      "Figma, дизайн сэтгэлгээ, прототип бүтээх ур чадварыг бодит төсөл дээрээс",
    schedule: "Эхлэх огноо: 6-р сарын 5 | Хичээл: Мягмар-Баасан 18:30-21:00",
    tuition: "690,000₮",
    discount: "Оюутан сурагчдад 15%",
  },
];

const pricing = [
  {
    label: "Стандарт",
    amount: "450,000₮",
    perks: ["Онлайн хичээл", "Гарын авлага", "Сертификат"],
  },
  {
    label: "Премиум",
    amount: "750,000₮",
    perks: [
      "Багштай 1:1 зөвлөх",
      "Давтлагын бичлэг",
      "Төслийн код-ревью",
    ],
  },
  {
    label: "Компанийн багц",
    amount: "Тохиролцоно",
    perks: ["Компанийн хэрэгцээнд нийцүүлсэн", "Багийн сургалт", "Төслийн зөвлөх"],
  },
];

const testimonials = [
  {
    name: "Э. Ариунзаяа",
    role: "Фронтенд хөгжүүлэгч @ TechWave",
    message:
      "Codex-ийн React курсийн ачаар би анхны ажлаа амжилттай эхлүүлсэн. Хөтөлбөр маш системтэй байлаа!",
  },
  {
    name: "Б. Тэмүүлэн",
    role: "Backend инженер @ Cloud.mn",
    message:
      "Firebase интеграцитай төслүүд дээр ажиллах чадвартай болсон. Багш нар асуулт бүрт үнэхээр тусалдаг.",
  },
];

function HeroSection({ onCTAClick }) {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1>
          Codex <span>Сургалтын Академи</span>
        </h1>
        <p>
          Орчин үеийн веб хөгжүүлэлтийн ур чадварыг React, Next.js болон Firebase
          ашиглан эзэмшиж, мэргэжлийн түвшинд хүрэх хөтөлбөрүүд.
        </p>
        <button className="btn btn--primary" onClick={onCTAClick}>
          Одоо бүртгүүлэх
        </button>
      </div>
      <div className="hero__stats">
        <div>
          <strong>1500+</strong>
          <span>Төгсөгчид</span>
        </div>
        <div>
          <strong>45</strong>
          <span>Багш, ментор</span>
        </div>
        <div>
          <strong>98%</strong>
          <span>Ажил эрхлэлт</span>
        </div>
      </div>
    </section>
  );
}

function LevelList() {
  const levels = [
    {
      title: "Эхлэх түвшин",
      description:
        "Програмчлалын суурь ойлголт, хэрэглэгчийн интерфэйсийн дизайн, Git ашиглах анхан шат.",
    },
    {
      title: "Дунд түвшин",
      description:
        "React экосистем, Next.js, Firebase Authentication болон Firestore дата бүтцийн практик сургалт.",
    },
    {
      title: "Ахисан түвшин",
      description:
        "CI/CD, серверийн талын рэндэрлэл, микросервис архитектур болон клаудын интеграц.",
    },
  ];

  return (
    <section className="section" id="levels">
      <h2>Сургалтын түвшин</h2>
      <div className="cards">
        {levels.map((level) => (
          <article key={level.title} className="card">
            <h3>{level.title}</h3>
            <p>{level.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CourseCard({ course, onEnroll }) {
  return (
    <article className="course-card">
      <div className="course-card__header">
        <div>
          <h3>{course.title}</h3>
          <span className="badge">{course.level}</span>
        </div>
        <span className="price">{course.price}</span>
      </div>
      <p className="course-card__description">{course.description}</p>
      <ul className="course-card__meta">
        <li>
          <strong>Багш:</strong> {course.teacher}
        </li>
        <li>
          <strong>Үргэлжлэх хугацаа:</strong> {course.duration}
        </li>
        <li>
          <strong>Хуваарь:</strong> {course.schedule}
        </li>
      </ul>
      <div className="course-card__links">
        <a href={course.videoUrl} target="_blank" rel="noreferrer">
          Танилцуулга видео
        </a>
        {course.materials.map((material) => (
          <a key={material.label} href={material.url} target="_blank" rel="noreferrer">
            {material.label}
          </a>
        ))}
      </div>
      <button className="btn btn--outline" onClick={() => onEnroll(course)}>
        Хичээлд бүртгүүлэх
      </button>
    </article>
  );
}

function CoursesSection({ onEnroll }) {
  return (
    <section className="section" id="courses">
      <div className="section__heading">
        <h2>Хичээлүүдийн жагсаалт</h2>
        <p>Сургалтын модуль бүрийг хуваарьт оруулах, нийтлэх боломжтой.</p>
      </div>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
        ))}
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="section" id="programs">
      <div className="section__heading">
        <h2>Сургалтын програмууд</h2>
        <p>Хичээл сонголт, цаг хугацаа, төлбөрийн дэлгэрэнгүй мэдээллийг эндээс үзнэ үү.</p>
      </div>
      <div className="cards">
        {programs.map((program) => (
          <article key={program.name} className="card">
            <h3>{program.name}</h3>
            <p>{program.summary}</p>
            <p>
              <strong>Хуваарь:</strong> {program.schedule}
            </p>
            <p>
              <strong>Төлбөр:</strong> {program.tuition}
            </p>
            <p>
              <strong>Хөнгөлөлт:</strong> {program.discount}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="section__heading">
        <h2>Төлбөр ба хөнгөлөлт</h2>
        <p>Сургалтад хамрагдах төлбөрийн схем болон тусгай хөнгөлөлтүүд.</p>
      </div>
      <div className="pricing-grid">
        {pricing.map((item) => (
          <article key={item.label} className="pricing-card">
            <h3>{item.label}</h3>
            <p className="pricing-card__amount">{item.amount}</p>
            <ul>
              {item.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <button className="btn btn--primary">Сонгох</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="section__heading">
        <h2>Холбоо барих</h2>
        <p>
          Сургалтын талаар асуух зүйл байвал бидэнтэй доорх формоор болон social сувгуудаар холбогдоорой.
        </p>
      </div>
      <div className="contact-grid">
        <form className="contact-form">
          <label>
            Нэр
            <input type="text" name="name" placeholder="Таны нэр" required />
          </label>
          <label>
            Имэйл
            <input type="email" name="email" placeholder="name@email.com" required />
          </label>
          <label>
            Мессеж
            <textarea name="message" rows="4" placeholder="Юу сонирхож байна?" required></textarea>
          </label>
          <button type="submit" className="btn btn--primary">
            Илгээх
          </button>
        </form>
        <div className="contact-info">
          <p>
            <strong>Утас:</strong> +976 9911-2233
          </p>
          <p>
            <strong>Имэйл:</strong> hello@codex.academy
          </p>
          <p>
            <strong>Хаяг:</strong> Улаанбаатар хот, Сүхбаатар дүүрэг, Инновацийн гудамж 12/3
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthModal({ isOpen, onClose, mode, onToggle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Haах">
          ×
        </button>
        <h3>{mode === "signup" ? "Оюутан бүртгэл" : "Нэвтрэх"}</h3>
        <form className="modal__form">
          {mode === "signup" && (
            <label>
              Бүтэн нэр
              <input type="text" name="fullName" placeholder="Ж. Болор" required />
            </label>
          )}
          <label>
            Имэйл
            <input type="email" name="email" placeholder="name@email.com" required />
          </label>
          <label>
            Нууц үг
            <input type="password" name="password" placeholder="••••••••" required />
          </label>
          <button type="submit" className="btn btn--primary">
            {mode === "signup" ? "Бүртгүүлэх" : "Нэвтрэх"}
          </button>
        </form>
        <p className="modal__toggle">
          {mode === "signup" ? (
            <>
              Аль хэдийн бүртгэлтэй юу?{" "}
              <button type="button" onClick={() => onToggle("login")}>
                Нэвтрэх
              </button>
            </>
          ) : (
            <>
              Шинэ хэрэглэгч үү?{" "}
              <button type="button" onClick={() => onToggle("signup")}>
                Бүртгүүлэх
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <section className="section" id="profile">
      <div className="section__heading">
        <h2>Хувийн мэдээлэл</h2>
        <p>Оюутан өөрийн мэдээллийг шинэчлэх, хичээл, шалгалтын явцыг хянах хэсэг.</p>
      </div>
      <div className="profile-card">
        <div>
          <h3>Сурагчийн нэр: Ж. Болор</h3>
          <p>Имэйл: bolor@student.codex.mn</p>
          <p>Элссэн хөтөлбөр: Full Stack веб хөгжүүлэгч</p>
        </div>
        <div className="profile-progress">
          <h4>Явц</h4>
          <ul>
            <li>
              Фронтенд модуль <span>80%</span>
            </li>
            <li>
              Backend модуль <span>55%</span>
            </li>
            <li>
              Төгсгөлийн төсөл <span>Эхлээгүй</span>
            </li>
          </ul>
          <button className="btn btn--outline">Мэдээлэл шинэчлэх</button>
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section className="section" id="feedback">
      <div className="section__heading">
        <h2>Сэтгэгдэл &amp; Хүсэлт</h2>
        <p>Манай оюутнууд болон хэрэглэгчид сургалтын талаар ийнхүү санал хүсэлтээ илэрхийлсэн.</p>
      </div>
      <div className="feedback-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial">
            <p>“{testimonial.message}”</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.role}</span>
          </article>
        ))}
      </div>
      <form className="feedback-form">
        <label>
          Таны нэр
          <input type="text" placeholder="Нэрээ оруулна уу" required />
        </label>
        <label>
          Сэтгэгдэл
          <textarea rows="3" placeholder="Та юу бодож байна?" required></textarea>
        </label>
        <button type="submit" className="btn btn--primary">
          Сэтгэгдэл илгээх
        </button>
      </form>
    </section>
  );
}

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <div className="header__logo">Codex</div>
      <nav className="header__nav">
        <a href="#home">Нүүр</a>
        <a href="#levels">Түвшин</a>
        <a href="#courses">Хичээлүүд</a>
        <a href="#programs">Програм</a>
        <a href="#pricing">Төлбөр</a>
        <a href="#contact">Холбоо барих</a>
      </nav>
      <div className="header__actions">
        <button className="btn btn--ghost" onClick={() => onLoginClick("login")}>
          Нэвтрэх
        </button>
        <button className="btn btn--primary" onClick={() => onLoginClick("signup")}>
          Бүртгүүлэх
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Codex сургалтын академи. Бүх эрх хуулиар хамгаалагдсан.</p>
      <a href="#home">Дээшээ буцах</a>
    </footer>
  );
}

function App() {
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCTAClick = () => {
    setAuthMode("signup");
    setAuthOpen(true);
  };

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setAuthMode("signup");
    setAuthOpen(true);
  };

  const handleClose = () => {
    setAuthOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <Header onLoginClick={(mode) => {
        setAuthMode(mode);
        setAuthOpen(true);
      }} />
      <main>
        <HeroSection onCTAClick={handleCTAClick} />
        <LevelList />
        <CoursesSection onEnroll={handleEnroll} />
        <ProgramsSection />
        <PricingSection />
        <ProfileSection />
        <FeedbackSection />
        <ContactSection />
      </main>
      <Footer />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={handleClose}
        mode={authMode}
        onToggle={(mode) => setAuthMode(mode)}
      />
      {selectedCourse && (
        <div className="toast">
          <p>
            “{selectedCourse.title}” хичээлийг сонгосон. Нэвтэрч, төлбөрөө баталгаажуулаарай!
          </p>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
