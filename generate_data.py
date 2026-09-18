import json
import os
import uuid
import random

def generate_description(name):
    openings = [
        f"Этот инструмент {name} радикально меняет подход к управлению задачами.",
        f"Мощное решение {name} создано специально для современных интернет-проектов.",
        f"С помощью {name} вы навсегда забудете о рутине.",
        f"Плагин {name} предоставляет невероятные возможности для автоматизации.",
        f"Если вы ищете способ ускорить работу, {name} станет лучшим выбором."
    ]
    middles = [
        "Он идеально подходит для предпринимателей и вебмастеров, стремящихся снизить издержки.",
        "Данный продукт необходим всем, кто ценит свое время и не хочет переплачивать за сложную разработку.",
        "Его главная целевая аудитория — владельцы бизнеса, которым важна стабильность.",
        "Решение создано для маркетологов и менеджеров, желающих повысить конверсию.",
        "Оптимально для специалистов, которые хотят внедрить передовые технологии без кодинга."
    ]
    benefits = [
        "Внедрение позволяет сэкономить до 50% бюджета на доработки.",
        "За счет автоматизации процессов вы освободите часы рабочего времени.",
        "Интуитивный интерфейс окупает затраты в первый же месяц использования.",
        "Отсутствие необходимости нанимать программиста делает этот продукт сверхвыгодным.",
        "Благодаря простоте интеграции, вы начинаете получать прибыль мгновенно."
    ]
    closings = [
        "Никаких скрытых платежей, только чистая польза.",
        "Надежность подтверждена сотнями довольных пользователей.",
        "Присоединяйтесь к числу лидеров рынка уже сегодня.",
        "Ваш бизнес скажет вам спасибо.",
        "Сделайте шаг навстречу современным технологиям."
    ]
    
    return f"{random.choice(openings)} {random.choice(middles)} {random.choice(benefits)} {random.choice(closings)}"

def generate_intents(slug, name):
    intent_templates = [
        f"как подключить {name} без программиста",
        f"автоматизация {slug} настройка",
        f"{name} для wordpress отзывы",
        f"интеграция {slug} быстро и дешево",
        f"установка {name} пошаговое руководство",
        f"аналоги {slug} для сайта",
        f"скачать {name} последняя версия",
        f"решение проблем с {slug}"
    ]
    return random.sample(intent_templates, k=5)

def main():
    dump_path = "dump.json"
    with open(dump_path, "r", encoding="utf-8") as f:
        dump_data = json.load(f)
    
    ru_plugins = []
    for plugin in dump_data.get("items", dump_data):
        slug = plugin.get("slug", "")
        original_name = plugin.get("original_name", plugin.get("name", slug))
        ru_plugins.append({
            "slug": slug,
            "category": plugin.get("category", ""),
            "version": plugin.get("version", ""),
            "platform": plugin.get("platform", ""),
            "bonus": plugin.get("bonus", ""),
            "price_rub": plugin.get("price_rub", ""),
            "image_url": plugin.get("image_url", ""),
            "name": original_name,
            "description": generate_description(original_name),
            "attributes": [
                {"name": "Платформа", "value": plugin.get("platform", "WordPress")},
                {"name": "Версия PHP", "value": "7.4 - 8.2"},
                {"name": "Лицензия", "value": "GPLv2+"},
                {"name": "Язык", "value": "Русский"},
                {"name": "Обновления", "value": "Автоматические"},
                {"name": "Совместимость", "value": "Проверена"}
            ],
            "intents": generate_intents(slug, original_name),
            "purchase_url": f"https://yookassa.ru/checkout?shopId=SHOP_123456&productId={slug}&ref={str(uuid.uuid4())[:8]}"
        })
    
    os.makedirs("src/data", exist_ok=True)
    with open("src/data/ru_plugins.json", "w", encoding="utf-8") as f:
        json.dump(ru_plugins, f, ensure_ascii=False, indent=2)

    en_plugins = []
    platforms = ["Shopify", "Amazon", "WooCommerce", "Magento", "BigCommerce", "Squarespace", "Wix"]
    for i in range(20):
        slug = f"global-integration-{i}"
        platform = platforms[i % len(platforms)]
        name = f"{platform} SuperSync {i}"
        en_plugins.append({
            "slug": slug,
            "category": "Integration",
            "version": "1.0.0",
            "platform": platform,
            "bonus": "Free Setup Support",
            "price_rub": 1500 + i*100,
            "image_url": "default_en.png",
            "name": name,
            "description": f"The ultimate {name} tool designed to streamline your global e-commerce operations. Perfect for businesses looking to scale effortlessly. Saves countless hours of manual data entry and reduces human errors significantly. No coding required.",
            "attributes": [
                {"name": "Platform", "value": platform},
                {"name": "PHP Version", "value": "8.0+"},
                {"name": "License", "value": "MIT"},
                {"name": "Language", "value": "English"},
                {"name": "Auto-updates", "value": "Enabled"}
            ],
            "intents": [
                f"how to sync {platform} easily",
                f"best {name} plugin",
                f"automate {platform} workflow",
                f"{name} download"
            ],
            "purchase_url": f"https://yookassa.ru/checkout?shopId=SHOP_654321&productId={slug}&ref={str(uuid.uuid4())[:8]}"
        })
        
    with open("src/data/en_plugins.json", "w", encoding="utf-8") as f:
        json.dump(en_plugins, f, ensure_ascii=False, indent=2)
    print("Generation complete!")

if __name__ == '__main__':
    main()
