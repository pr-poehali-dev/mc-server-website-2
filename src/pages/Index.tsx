import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: 'Обновление экономики 2.0',
      date: '20 октября 2025',
      description: 'Новая система торговли между игроками! Теперь вы можете открывать свои магазины и устанавливать цены.',
      badge: 'Обновление'
    },
    {
      id: 2,
      title: 'Новый режим: SkyBlock',
      date: '15 октября 2025',
      description: 'Начните своё выживание на летающем острове! Уникальная экономика и торговля с другими островами.',
      badge: 'Новинка'
    },
    {
      id: 3,
      title: 'Хэллоуин ивент',
      date: '10 октября 2025',
      description: 'Специальные квесты, уникальные награды и временный магазин с эксклюзивными предметами!',
      badge: 'Ивент'
    }
  ];

  const rules = [
    { icon: 'ShieldCheck', title: 'Честная игра', text: 'Читы, баги и эксплойты запрещены' },
    { icon: 'Users', title: 'Уважение', text: 'Оскорбления и токсичность недопустимы' },
    { icon: 'Pickaxe', title: 'Гриферство', text: 'Разрушение чужих построек - бан' },
    { icon: 'MessageSquare', title: 'Спам', text: 'Реклама и флуд в чате запрещены' }
  ];

  const gameModes = [
    {
      title: 'Выживание',
      icon: 'TreePine',
      description: 'Классический режим с полноценной экономикой',
      features: ['Магазины игроков', 'Торговые аукционы', 'Банковская система', 'Биржа ресурсов']
    },
    {
      title: 'SkyBlock',
      icon: 'Cloud',
      description: 'Выживание на островах в небе',
      features: ['Развитие острова', 'Торговля между островами', 'Уникальные квесты', 'Кооп режим']
    },
    {
      title: 'Креатив',
      icon: 'Paintbrush',
      description: 'Строй всё что захочешь',
      features: ['Неограниченные ресурсы', 'Большие участки', 'WorldEdit', 'Приватные зоны']
    }
  ];

  const shopItems = [
    {
      title: 'VIP',
      price: '199₽',
      icon: 'Crown',
      features: ['Префикс VIP', '2 дома', 'Кит каждые 12ч', 'Цветной ник'],
      popular: false
    },
    {
      title: 'PREMIUM',
      price: '399₽',
      icon: 'Gem',
      features: ['Префикс PREMIUM', '5 домов', 'Кит каждые 6ч', 'Полёт в лобби', 'Эффекты частиц'],
      popular: true
    },
    {
      title: 'ELITE',
      price: '799₽',
      icon: 'Sparkles',
      features: ['Префикс ELITE', '10 домов', 'Кит каждый час', 'Полёт везде', 'Уникальные эффекты', 'Личный магазин'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Box" size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">MineEconomy</h1>
                <p className="text-xs text-muted-foreground">Сервер с экономикой</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <Icon name="Users" size={14} />
                <span>247 онлайн</span>
              </Badge>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Copy" size={16} className="mr-2" />
                play.mineeconomy.ru
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Сервер работает с 2020 года
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Выживай. Торгуй. <span className="text-primary">Богатей.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Самая продвинутая система экономики в Minecraft. Открывай магазины, торгуй на аукционе, стань богатейшим игроком сервера!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Discord сервер
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <Icon name="Store" size={32} className="text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-muted-foreground">Магазинов</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Сделок в день</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <Icon name="Coins" size={32} className="text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-muted-foreground">В обороте</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            {[
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'rules', label: 'Правила', icon: 'ScrollText' },
              { id: 'modes', label: 'Режимы', icon: 'Gamepad2' },
              { id: 'shop', label: 'Донат', icon: 'ShoppingBag' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-all flex items-center gap-2 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab.icon as any} size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {activeTab === 'news' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold">Последние новости</h3>
              <Badge variant="outline">Всего: {newsItems.length}</Badge>
            </div>
            {newsItems.map((news) => (
              <Card key={news.id} className="hover:border-primary/50 transition-all hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{news.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {news.date}
                      </CardDescription>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {news.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Правила сервера</h3>
              <p className="text-muted-foreground">Соблюдай правила и наслаждайся игрой!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {rules.map((rule, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={rule.icon as any} size={24} className="text-primary" />
                      </div>
                      <CardTitle>{rule.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{rule.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-8 border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertTriangle" size={20} className="text-primary" />
                  Важно знать
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Незнание правил не освобождает от ответственности</p>
                <p>• Администрация имеет право изменять правила без предупреждения</p>
                <p>• При нарушении правил бан может быть выдан без предупреждения</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'modes' && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Игровые режимы</h3>
              <p className="text-muted-foreground">Выбери режим по душе</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {gameModes.map((mode, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon name={mode.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-center">{mode.title}</CardTitle>
                    <CardDescription className="text-center">{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mode.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shop' && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Донат магазин</h3>
              <p className="text-muted-foreground">Поддержи сервер и получи преимущества</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {shopItems.map((item, idx) => (
                <Card
                  key={idx}
                  className={`relative hover-scale transition-all ${
                    item.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon name={item.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-center text-2xl">{item.title}</CardTitle>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{item.price}</span>
                      <span className="text-muted-foreground">/месяц</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    <Button
                      className={`w-full mt-4 ${
                        item.popular
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/90'
                      }`}
                    >
                      Купить {item.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-8 border-muted">
              <CardContent className="py-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Безопасная оплата</div>
                      <div className="text-sm text-muted-foreground">Банковские карты, СБП, электронные кошельки</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Мгновенная выдача</div>
                      <div className="text-sm text-muted-foreground">Получи привилегии сразу после оплаты</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="Box" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-semibold">MineEconomy</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 MineEconomy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
