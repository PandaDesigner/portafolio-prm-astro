import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LocalPortfolioRepository } from '@/core/infrastructure/local-portfolio-repository';

const expectedCompanies = ['Vanguard Vision AI', 'Mercado Libre', 'Efigen Renewable Energy', 'Xcala', 'SirBuho', 'Epsilon Software Solutions'];
for (const lang of ['es', 'en'] as const) {
  test(`${lang}: career records remain distinct and reverse chronological`, async () => {
    const experiences = await new LocalPortfolioRepository(lang).loadExperiences();
    assert.deepEqual(experiences.map(item => item.company), expectedCompanies);
    assert.equal(experiences.find(item => item.company === 'SirBuho')?.period, '2020 – 2021');
    assert.equal(experiences.find(item => item.company === 'Epsilon Software Solutions')?.period, '2018 – 2020');
    assert.match(experiences.find(item => item.company === 'Xcala')?.period ?? '', /2021.*2023/);
    assert.match(experiences.find(item => item.company === 'Efigen Renewable Energy')?.summary ?? '', /Java.*Spring Boot/);
    assert.doesNotMatch(experiences.find(item => item.company === 'SirBuho')?.summary ?? '', /Java/);
  });
  test(`${lang}: profile and education are synchronized`, async () => {
    const repository = new LocalPortfolioRepository(lang);
    const profile = await repository.loadProfile();
    assert.match(profile.role, /Harness Engineering/);
    assert.match(profile.summary, lang === 'en' ? /6\+ years/ : /más de 6 años/);
    assert.doesNotMatch(profile.summary, /5\+|5 años|Spartan/);
    assert.equal((await repository.loadEducation()).length, 6);
    const skills = await repository.loadSkillGroups();
    assert.ok(skills.some(group => group.items.includes('Java')));
    assert.ok(skills.some(group => group.items.includes('Docker')));
  });
}
